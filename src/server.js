const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const registerRoutes = require('./routes/registerRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
 
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connectd"))
.catch(err => console.log(err))

app.use('/posts', registerRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})
//Cross Origin Resource Sharing (CORS);


