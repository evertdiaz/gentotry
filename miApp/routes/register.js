var express = require('express')
var router = express.Router()
var User = require('../models').User

router.get('/', function(req, res, next) {
	res.render('register', {title: "Registro - Gento"})
})


module.exports =  router