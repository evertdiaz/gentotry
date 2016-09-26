var express = require('express')
var router = express.Router()
var User = require('../models').User

router.post('/', function(req, res, next) {
	var username = req.body.name
	var password = req.body.password

	User.findOne({name: username, password: password}, function(err, user) {
		if(err){
			console.log(err)
			return res.status(500).send()
		}
		if(!user) {
			return res.status(404).send()
		}

		return res.status(200).send(user)
	})
})

module.exports = router