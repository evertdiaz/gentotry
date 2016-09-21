var express = require('express');
var router = express.Router();
var User = require('../models').User

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



router.get('/', function(req, res, next) {
  User.find(function(err, users) {
    res.send(users)
  })
})

router.get('/:userId', function(req, res, next) {
	// De igual manera sería buscar por name
  User.find({_id: req.params.userId}, function(err, users) {
    res.send(users)
  })
})

module.exports = router;
