const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    size:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true
    }
})
