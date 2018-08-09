var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    uid: String,
    headline: String,
    abstract: String,
    author: String,
    media: String,
    audioTrackID: String,
    publishedOn: Date
});

var PlaylistSchema = new Schema({
    id: String,
    title: String,
    url: String,
    articles: [String]
});

var CategorySchema = new Schema({
    id: String,
    title: String,
    playlists: [String]
});


ArticleSchema.statics.findOrCreate = require("find-or-create");
PlaylistSchema.statics.findOrCreate = require("find-or-create");
CategorySchema.statics.findOrCreate = require("find-or-create");

var ArticleModel = mongoose.model('article', ArticleSchema, 'articles');
var PlaylistModel = mongoose.model('playlist', CategorySchema, 'playlists');
var CategoryModel = mongoose.model('category', CategorySchema, 'categories');

module.exports = { ArticleModel: ArticleModel, PlaylistModel: PlaylistModel, CategoryModel: CategoryModel };