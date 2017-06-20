var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  passwordHash: String,
  passwordSalt: String
});

module.exports = mongoose.model('User', UserSchema);