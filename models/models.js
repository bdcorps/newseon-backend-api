var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    uid: String,
    headline: String,
    abstract: String,
    publisher: String,
    media: String,
    audioTrackID: String,
    publishedOn: Date
});

ArticleSchema.statics.findOrCreate = require("find-or-create");

var ArticleModel = mongoose.model('article', ArticleSchema, 'articles');

module.exports = { ArticleModel: ArticleModel };
