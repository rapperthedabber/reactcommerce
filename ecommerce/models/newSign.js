import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const SignUPSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})
export const signUp = model('SignUp', SignUPSchema)  
