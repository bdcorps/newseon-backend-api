var express = require("express");
var mongoose = require("mongoose");
var gridfs = require("gridfs-stream");
const fs = require("fs");
const request = require("request");

const multer = require("multer");
var cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
var crypto = require("crypto");
var path = require('path');

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

//var statusReport = {};

/* 
This API takes the queries in contentURLList.js and runs it through newsapi.org. The retrieved articles are then sent to Google Text to Speech. The audio is saved as filename, based on the hashed function (title of the article), in order to identify duplicates. The file is then uploaded to tracks db using GridFS and the location stored in the articles db.
*/

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const HTTP_SERVER_ERROR = 500;
app.use(function (err, req, res, next) {
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

//----------------------google text to speech

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

connection.once("open", function () {
  //  statusReport.articledb = {"status" :  "connected"}

  app.get("/generate", (req, res) => {

    categoriesAPI = [];
    for (var i = 0; i < categoriesJSON.categories.length; i++) {
      var categoriesData = {};
      var category = categoriesJSON.categories[i];
      categoriesData.id = category.id;
      categoriesData.title = category.title;
      categoriesData.playlists = convertQueryToPlaylistURLs(category.playlists, category.title);
      categoriesAPI.push(categoriesData);
    }


    var categoryToSave = new Category({
      categoriesAPI
    });


    categoryToSave.save(function (error) {
      if (error) {
        console.error(error);
      }
    });

    res.send('Generated');
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
        title = "Top Headlines"
        let urlParameters = Object.entries(query).map(e => e.join('=')).join('&');
        var playlistURL = "https://newsapi.org/v2/top-headlines?" +
          urlParameters +
          "&apiKey=" + API_KEY;

        urls.push(playlistURL);
      }

      var random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      var playlistsData = {};
      playlistsData.id = random;
      if (query.category != null) {
        playlistsData.title = title + " about " + captilizeWord(query.category);
      } else if (query.q != null) {
        playlistsData.title = title + " about " + captilizeWord(query.q);
      }
      playlistsData.url = playlistURL;
      playlistIDs.push(playlistsData.id);
      //playlistsAPI.push(playlistsData);

      //Put playlistsData to playlistdb


      //TODO: need to add article IDS
      var playlistToSave = new Playlist({
        playlistData
      });

      playlistToSave.save(function (error) {
        if (error) {
          console.error(error);
        }
      });
    }
    //return playlists ids
    return playlistIDs;
  }

  function captilizeWord(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
  }


  app.get("/", (req, res) => {
    res.render('main.ejs');
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
    var playlists = contentURLLists.playlists;

    //Calls the newsapi.org for articles based on the contentURLList.js
    var articles = sampleArticle.content.articles;

    for (var i = 0; i < playlists.length; i++) {
      //   request(playlists[i], function(error, response, body) {
      //     if (!error && response.statusCode == 200) {
      //       console.log(body);
      //     }
      //   });

      for (var j = 0; j < articles.length; j++) {
        initAudioTracks(req, res, articles[j]);
      }
    }

    return res.status(201).json({
      message: "File uploaded successfully."
    });
  });
});

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

// Slowing down the calls to Google Text to Speech
const initAudioTracks = async (req, res, article) => {
  await snooze(2000);
  generateAudioTrack(req, res, article);
};

function generateAudioTrack(req, res, article) {
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

    // Create a hash based on the contents of the article title
    // This is so we don't write duplicate content to the db
    var hash = crypto
      .createHash("md5")
      .update(article.title)
      .digest("hex");

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
        const storage = multer.memoryStorage();
        const upload = multer({
          storage: storage,
          limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }
        });
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

    articleToSave.save(function (error) {
      if (error) {
        console.error(error);
      }
    });
  });
}

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3005;

app.listen(port, function() {
  console.log('Server running on port: %d', port);
});