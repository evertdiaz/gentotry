var express = require('express')
var router = express.Router()
var clothes = require('../models').clothes

router.get('/', function(req, res) {
  clothes.find(function(err, clothes) {
    res.send(clothes)
  })
})

module.exports = router