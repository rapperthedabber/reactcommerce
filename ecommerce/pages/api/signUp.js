import mongoose from "mongoose"
import connect from "@/lib/mongodb"
import User from '../../models/newSign'


import mongooseConnect from "@/lib/mongoose"
// import clientPromise from "@/lib/mongodb"

export default async function signingUp(req,res){
    // res.status(200).json(clientPromise.url)
    await connect()
 try{
    const user = await User.create(req.body);
    if(user){
        // res.json({"code": 'User Created!'})
        res.writeHead(302, { Location: '/homePage/homePage' }).end()
           
    }else{
        res.json({"code": "User not Created"})
    }


 }catch (error){
    res.status(400).json({status: 'not able to create a new user'})

 }
}