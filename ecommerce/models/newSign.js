
import mongoose from "mongoose";
const { Schema, model } = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
      
    }

})
module.exports = mongoose.models.User || mongoose.model('User', userSchema)

