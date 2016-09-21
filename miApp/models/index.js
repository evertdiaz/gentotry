var mongoose = require('mongoose')
mongoose.model('users', {name: String})
var User = mongoose.model('users')

module.exports = User