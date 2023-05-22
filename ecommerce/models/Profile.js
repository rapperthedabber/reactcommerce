
import mongoose from "mongoose";
const { Schema, model } = require('mongoose');

const userSchema = mongoose.Schema({
    url: {
        type: String,
        required: true

    },
    Name: {
        type: String,
        required: true
      
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: ture
    }


})
module.exports = mongoose.models.User || mongoose.model('User', userSchema)