const mongoose = require("mongoose");

const User = new mongoose.Schema({
  id: Number,
  username:! String,
  password:! String,
  first_name: String,
  last_name: String,
  address: String,
});

module.exports = mongoose.model('POST', User)