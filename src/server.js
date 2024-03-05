const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const postRoutes = require('./routes/postRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connectd"))
.catch(err => console.log(err))

app.use('/posts', postRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})
//Cross Origin Resource Sharing (CORS);


console.log('Fuckshit');