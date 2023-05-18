import mongoose from "mongoose"
import { signUp } from "@/models/newSign"
import mongooseConnect from "@/lib/mongoose"
// import clientPromise from "@/lib/mongodb"

export default async function signingUp(req,res){
    await mongooseConnect()
    // res.status(200).json(clientPromise.url)
    const {method} = req
    
    if(method === 'POST'){
        const {username, password} = req.body;
        const newUser = await signUp.create({
            username, password
        })
        res.json(newUser)
        
    }
}