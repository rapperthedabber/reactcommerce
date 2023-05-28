
import mongoose from "mongoose";
const { Schema, model } = require('mongoose');

const shoeSchema= mongoose.Schema({
    id: {

        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true

    },
    product: {
        type: String,
        required: true
      
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }


})
module.exports = mongoose.models?.Shoe || mongoose.model('Shoe', shoeSchema)