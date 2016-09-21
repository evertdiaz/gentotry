var mongoose = require('mongoose')
mongoose.model('users', {name: String})
var User = mongoose.model('users')

mongoose.model('clothes', {tipo: String})
var clothes = mongoose.model('clothes')

module.exports.User = User
module.exports.clothes = clothes