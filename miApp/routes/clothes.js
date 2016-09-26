var express = require('express')
var router = express.Router()
var clothes = require('../models').clothes

router.get('/', function(req, res) {
  clothes.find(function(err, clothes) {
    res.send(clothes)
  })
})


var mongoose = require('mongoose')


router.get('/:tipo', function(req, res, next) {
	// De igual manera sería buscar por name
  clothes.find({tipo: req.params.tipo}, function(err, clothes) {
    mongoose.model('clothes').populate(clothes, {path: 'user'}, function(err, clothes) {
    	res.send(clothes)
    })
  })
})

module.exports = router
 