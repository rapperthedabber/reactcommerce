

import mongoose from "mongoose"
import User from '../../models/newSign'
import connect from "@/lib/mongodb"


export default async function Login(req,res){
await connect()
const {username, password} = req.body
const user = await User.findOne({username,password})
if(!user){
    return res.json({status: "Not able to find user"})

}else{
    res.redirect('/Products/products')
}



}