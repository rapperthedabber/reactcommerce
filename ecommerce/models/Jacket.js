import React from "react";
import mongoose from "mongoose"
import { model } from "mongoose";

import { models } from "mongoose";

const JacketSchema = new mongoose.Schema(
    {
    category: {
        type: String,
        required: true

    },
    url: {
        type: String,
        required: true

    },
    product: {
        type: String,
        required: true
      
    },
    price: {
        type: [Number],
        required: true
    },

    description: {
        type: String,
        required: true
    }


}); 
module.exports = mongoose.models?.jacket || mongoose.model('jacket', JacketSchema)



