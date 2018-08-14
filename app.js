var express = require("express");
var mongoose = require("mongoose");
var gridfs = require("gridfs-stream");
const fs = require("fs");
const request = require("request");

const multer = require("multer");
var cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
var crypto = require("crypto");
var path = require("path");
var cors = require('cors');

require("dotenv").config();

var contentURLLists = require("./uploads/contentURLList");
var sampleArticle = require("./uploads/sampleArticle");

var categoriesJSON = require("./uploads/categoriesConfig");
const trackRoute = express.Router();
const { Readable } = require("stream");

const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

var models = require("./models/models.js");
var Article = models.ArticleModel;
var Playlist = models.PlaylistModel;
var Category = models.CategoryModel;

// Imports the Google Cloud client library
const textToSpeech = require("@google-cloud/text-to-speech");

var currentPlaylistURLsToDownload = [];

//put the key in .env
var API_KEY = process.env.API_KEY;
var dataToSaveToFile = { playlists: [] };

//var statusReport = {};

/* 
This API takes the queries in contentURLList.js and runs it through newsapi.org. The retrieved articles are then sent to Google Text to Speech. The audio is saved as filename, based on the hashed function (title of the article), in order to identify duplicates. The file is then uploaded to tracks db using GridFS and the location stored in the articles db.
*/

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const HTTP_SERVER_ERROR = 500;
app.use(function(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || HTTP_SERVER_ERROR).render("500");
});

/**
 * Connect MongoDriver to store the audio tracks
 */
let db;
MongoClient.connect(
  "mongodb://newseumapp1:newseumapp1@ds117336.mlab.com:17336/newseumapp",
  (err, database) => {
    if (err) {
      console.log(
        "MongoDB Connection Error. Please make sure that MongoDB is running."
      );

      //  statusReport.trackdb = {"err" :  JSON.stringify(err)}
      process.exit(1);
    }
    db = database;
    // statusReport.trackdb = {"status" :  "connected"}
  }
);

var connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));

/**
 * Connect Mongoose to store Article documents
 */
mongoose.connect(
  "mongodb://newseumapp1:newseumapp1@ds117336.mlab.com:17336/newseumapp"
);

mongoose.Promise = Promise;

//----------------------google text to speech

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

connection.once("open", function() {
  //  statusReport.articledb = {"status" :  "connected"}

  app.get("/categories", (req, res) => {
    Category.find({}, function(err, doc) {
      if (err) {
        res.send("error: " + err);
      }
      res.send({category: doc});
    });
  });

  app.get("/categories/:categoryID", (req, res) => {
    Category.find({id:req.params.categoryID}, function(err, doc) {
      if (err) {
        res.send("error: " + err);
      }
      res.send(doc);
    });
  });

  app.get("/playlists/:playlistID", (req, res) => {
    Playlist.find({id:req.params.playlistID}, function(err, doc) {
      if (err) {
        res.send("error: " + err);
      }
      res.send(doc);
    });
  });

  app.get("/articles/:articleID", (req, res) => {
    Article.find({uid:req.params.articleID}, function(err, doc) {
      if (err) {
        res.send("error: " + err);
      }
      res.send(doc);
    });
  });

  app.post("/generate", (req, res) => {
    categoriesAPI = [];
    for (var i = 0; i < categoriesJSON.categories.length; i++) {
      var categoriesData = {};
      var category = categoriesJSON.categories[i];
      categoriesData.id = category.id;
      categoriesData.title = category.title;
      categoriesData.playlists = convertQueryToPlaylistURLs(
        category.playlists,
        category.title
      );
      categoriesAPI.push(categoriesData);

      var categoryToSave = new Category({
        id: categoriesData.id,
        title: categoriesData.title,
        playlists: categoriesData.playlists
      });

      categoryToSave.save(function(error) {
        if (error) {
          console.error(error);
        }
      });
    }

    res.send("Generated");
  });

  function convertQueryToPlaylistURLs(playlistQuery, title) {
    var playlistIDs = [];
    var title;
    var urls = [];
    var playlistsAPI = [];
    for (var i = 0; i < playlistQuery.length; i++) {
      var curPlaylist = playlistQuery[i];
      var query = curPlaylist.query;

      // This is only for topHeadlines. The everything and sources part have to be added.
      if (curPlaylist.type == "topHeadlines") {
        title = "Top Headlines";
        let urlParameters = Object.entries(query)
          .map(e => e.join("="))
          .join("&");
        var playlistURL =
          "https://newsapi.org/v2/top-headlines?" +
          urlParameters +
          "&apiKey=" +
          API_KEY;

        urls.push(playlistURL);
      }

      var random =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);

      var playlistsData = {};
      playlistsData.id = random;
      if (query.category != null) {
        playlistsData.title = title + " about " + captilizeWord(query.category);
      } else if (query.q != null) {
        playlistsData.title = title + " about " + captilizeWord(query.q);
      }
      playlistsData.url = playlistURL;
      playlistsData.media = "http://via.placeholder.com/150x150";
      playlistsData.articles = [];
      playlistIDs.push({playlistsData.id, playlistsData.title, playlistsData.media});

      dataToSaveToFile.playlists.push({
        id: playlistsData.id,
        url: playlistsData.url
      });
      saveToFile(dataToSaveToFile);

      //playlistsAPI.push(playlistsData);

      //Put playlistsData to playlistdb

      console.log(">>>>>>>");
      console.log(JSON.stringify(playlistsData));
      console.log(">>>>>>>");

      //TODO: need to add article IDS
      var playlistToSave = new Playlist({
        id: playlistsData.id,
        title: playlistsData.title,
        url: playlistsData.url,
        media: playlistsData.media,
        articles: playlistsData.articles
      });

      playlistToSave.save(function(error) {
        if (error) {
          console.error(error);
        }
      });
    }
    //return playlists ids
    return playlistIDs;
  }

  function saveToFile(data) {
    var dataToWrite = data;
    var d = new Date();
    var n = d.getTime();

    dataToWrite.timestamp = n;
    fs.writeFile(
      __dirname + "/uploads/playlistsData",
      JSON.stringify(data),
      function(err) {
        if (err) {
          return console.log(err);
        }

        console.log("The file was saved!");
      }
    );
  }

  function readFromFile(path) {
    var text = fs.readFileSync(path, "utf8");
    return JSON.parse(text);
  }

  function captilizeWord(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
  }

  app.get("/", (req, res) => {
    res.send("its running");
  });

  /**
   * GET /tracks/:trackID
   */
  app.get("/tracks/:trackID", (req, res) => {
    try {
      var trackID = new ObjectID(req.params.trackID);
    } catch (err) {
      return res.status(400).json({
        message:
          "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters"
      });
    }
    res.set("content-type", "audio/mp3");
    res.set("accept-ranges", "bytes");

    let bucket = new mongodb.GridFSBucket(db, {
      bucketName: "tracks"
    });

    let downloadStream = bucket.openDownloadStream(trackID);

    downloadStream.on("data", chunk => {
      res.write(chunk);
    });

    downloadStream.on("error", () => {
      res.sendStatus(404);
    });

    downloadStream.on("end", () => {
      res.end();
    });
  });

  /**
   * POST /tracks
   */

  app.post("/tracks/", (req, res) => {
    //read playlistsData file

    var data = readFromFile(__dirname + "/uploads/playlistsData");
    var playlists = data.playlists;

    var articleIDs = [];

    //Calls the newsapi.org for articles based on the contentURLList.js

    console.log("+++");

    console.log(playlists.length);
    console.log("+++");

    for (let i = 0; i < playlists.length; i++) {
      request(playlists[i].url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          articles = body;

          console.log(
            "-----------------------------------------------------------"
          );
          console.log(articles);
          console.log(
            "-----------------------------------------------------------"
          );

          var articles = sampleArticle.content.articles;
          articleIDs = [];
          // Create a hash based on the contents of the article title
          // This is so we don't write duplicate content to the db
          var hash = "";
          for (var j = 0; j < articles.length; j++) {
            hash = crypto
              .createHash("md5")
              .update(articles[j].title)
              .digest("hex");

            initAudioTracks(req, res, articles[j], hash);
            articleIDs.push(hash);

            // articleIDs.push());
          }

          // console.log("about to wrtie to " + i + " " + playlists[i]);

          //save articleIDs to playlistdb docs
          Playlist.findOne({ id: playlists[i].id }, function(err, doc) {
            doc.articles = articleIDs;
            console.log("MMMM");
            console.log(articleIDs);
            console.log("MMMM");
            doc.save(function(err) {
              if (err) {
                console.error("ERROR!" + err);
              }
            });
          });
        }
      });
    }

    return res.status(201).json({
      message: "File uploaded successfully."
    });
  });
});

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

// Slowing down the calls to Google Text to Speech
const initAudioTracks = async (req, res, article, hash) => {
  await snooze(2000);
  generateAudioTrack(req, res, article, hash);
};

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }
});

function generateAudioTrack(req, res, article, hash) {
  const audioRequest = {
    input: { text: article.title },
    // Select the language and SSML Voice Gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    // Select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" }
  };

  // Performs the Text-to-Speech request
  client.synthesizeSpeech(audioRequest, (err, response) => {
    if (err) {
      console.error("ERROR:", err);
      // statusReport.speech = {tts: JSON.stringify(err)};
      return;
    }

    //  statusReport.speech = {tts: "connected"};

    // Write the binary audio content to a local file
    fs.writeFile(
      __dirname + "/uploads/" + hash,
      response.audioContent,
      "binary",
      err => {
        if (err) {
          console.error("ERROR:", err);
          return;
        }

        //When done saving file

        upload.single("track")(req, res, err => {
          if (err) {
            console.log("error: " + err);
          }

          uploadTrack(article, hash);
        });
      }
    );
  });
}

// Uploads the audio track of the news article to db
function uploadTrack(article, hash) {
  var readableTrackStream = fs.createReadStream(__dirname + "/uploads/" + hash);

  let bucket = new mongodb.GridFSBucket(db, {
    bucketName: "tracks"
  });

  let uploadStream = bucket.openUploadStream(hash);

  let id = uploadStream.id;

  readableTrackStream.pipe(uploadStream);

  uploadStream.on("error", () => {
    // return res.status(500).json({ message: "Error uploading file" });
  });

  uploadStream.on("finish", () => {
    //save to mongodb
    var articleToSave = new Article({
      uid: hash,
      headline: article.title,
      abstract: article.description,
      publisher: article.source.name,
      media: article.urlToImage,
      publishedOn: new Date(article.publishedAt),
      audioTrackID: id
    });

    articleToSave.save(function(error) {
      if (error) {
        console.error(error);
      }
    });
  });
}

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3005;

app.listen(port, function() {
  console.log("Server running on port: %d", port);
});
