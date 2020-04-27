var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    googleID: String
});

var Users = mongoose.model('Users', userSchema, 'users');

module.exports = Users;