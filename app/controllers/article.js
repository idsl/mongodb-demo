var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/api', router);
};

router.get('/article', function (req, res, next) {

  Article.find(function (err, articles) {
    if (err) return next(err);
    res.json(articles);
  });

});

router.get('/article/:id', function (req, res, next) {

  Article.findOne({ _id: req.params.id }, function (err, article) {
    if (err) return next(err);
    res.json(article);
  });

});

router.post('/article', function (req, res, next) {

  var article = new Article(req.body);
  article.save(function (err) {
    if (err) return next(err);
    res.json({ message: 'Article Added' });
  });

});

router.put('/article/:id', function (req, res, next) {

  Article.findOne({ _id: req.params.id }, function(err, article) {
    if (err) return next(err);
 
    for (prop in req.body) {
      article[prop] = req.body[prop];
    }
 
    article.save(function(err) {
      if (err) return next(err);
      res.json({ message: 'Article updated' });
    });
  });

});

router.delete('/article/:id', function (req, res, next) {

  Article.remove({_id: req.params.id}, function(err, article) {
    if (err) return next(err);
    res.json({ message: 'Successfully deleted' });
  });
  
});