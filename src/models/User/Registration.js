const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  phonenum: String
});

module.exports = mongoose.model("Register", RegisterSchema);

//The First Thing That you need to do is to create a schema so you know what the data that the database should get
//Second is to create a Routes so you can access the data from the Model
//Finally you need to create a Controller so you can controll how the use interacts in the front end --
// -- The controller contains the flow control logic for the application
