var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	res.render('shop', {title: "Comprar - Gento"})
	// Para leer el query entramos en localhost:3000/?=age=22 por ejemplo
	console.log(req.query)
})


module.exports = router;
