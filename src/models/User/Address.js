const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  street: String,
  state: String,
  city: String,
  region: String,
});




//The Reason Why It Was Written module.exports is because you want to the controller to have a access in the Schema
//The mongoose.model has been declared to call the MongoDB and put it in the database.
//After Declaring the function model you need to put the "Address" parameter to let the db know what it is, lastly
//The Address Schema has been declared in the mongoose model to know what are the data that the db should have
module.exports = mongoose.model("Address", AddressSchema);
