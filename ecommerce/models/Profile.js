
import mongoose from "mongoose";
const { Schema, model } = require('mongoose');

const profileSchema= mongoose.Schema({
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
        required: true
    }


})
module.exports = mongoose.models.Profile || mongoose.model('Profile', profileSchema)