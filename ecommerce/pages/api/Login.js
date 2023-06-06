
import { NextResponse } from "next/server"
import { redirect } from 'next/navigation';
import mongoose from "mongoose"
import User from '../../models/newSign'
import connect from "@/lib/mongodb"
import { Router } from "next/router";


export default async function Login(req,res){
await connect()
const {username, password} = req.body
const user = await User.findOne({username,password})
if(!user){
   
    return res.status(200).json({status: "Not able to find user"})

}else{
    const {pathname} = Router
    if(pathname == '/'){
   return Router.push('/homePage/homePage')
    }
 
}



}