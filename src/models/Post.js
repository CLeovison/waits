const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    datePosted: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('POST', PostSchema)