var express = require('express');
var quizController = require('../controllers/quiz_controller');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/autor', function(req, res) {
  res.render('autor');
});

router.get('/search', function(req, res) {
  res.render('search');
});

// Autoload de comandos con quizId
router.param('quizId', quizController.load);

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
