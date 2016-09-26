var express = require('express')
var router = express.Router()
var User = require('../models').User

router.post('/register', function(req, res, next) {
	var username = req.body.name
	var age = req.body.age
	var password = req.body.password
	var firstname = req.body.firstname
	var lastname = req.body.lastname

	var newuser = new User()
	newuser.name = username
	newuser.age = age
	newuser.password = password
	newuser.firstname = firstname
	newuser.lastname = lastname
	newuser.save(function(err, savedUser) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})

module.exports =  router