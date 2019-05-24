const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  favourites: {
    type: Array,
    required: false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
