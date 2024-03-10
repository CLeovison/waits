const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  phonenum: Number,
  address: String,
  email: String,
});
