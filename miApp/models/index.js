var mongoose = require('mongoose')

var Schema =  mongoose.Schema

var userSchema = new Schema({
	name: String,
	age: Number
})
mongoose.model('users', userSchema) 
var User = mongoose.model('users')

var clothesSchema = new Schema({
	tipo: String,
	precio: Number
})
mongoose.model('clothes', clothesSchema)
var clothes = mongoose.model('clothes')

module.exports.User = User
module.exports.clothes = clothes