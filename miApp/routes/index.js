var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Gentlers' });
// });

router.get('/', function(req, res, next) {
	res.render('index', {title: "Gento", description: "En Gentlers te mostramos solo las prendas que de verdad quieres usar"})
	// Para leer el query entramos en localhost:3000/?=age=22 por ejemplo
	console.log(req.query)
})

router.get('/users', function(req, res, next) {
	res.send({
		users: ["evert", "carlos", "diaz", "buitron"]
	})
})

router.get('/users/:id', function(req, res, next) {
	console.log(req.params)
	res.send(200)
})

module.exports = router;
