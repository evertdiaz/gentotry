var _ = require('underscore')
var h = require('./m2')
var http = require('http')
h.hola()
h.chau()

var server = http.createServer(function(req, res) {
	console.log('Request')
	res.write('Hi')
	res.end()
})

server.listen(9500)