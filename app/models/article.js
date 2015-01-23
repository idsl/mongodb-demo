// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  author: String,
  category: String,
  title: String,
  text: String
});

ArticleSchema.virtual('date')
  .get(function () {
    return this._id.getTimestamp();
  });

mongoose.model('Article', ArticleSchema);

