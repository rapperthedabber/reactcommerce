
import { NextResponse } from "next/server"
import { redirect } from 'next/navigation';
import mongoose from "mongoose"
import User from '../../models/newSign'
import connect from "@/lib/mongodb"
import { Router } from "next/router";


import mongooseConnect from "@/lib/mongoose"
// import clientPromise from "@/lib/mongodb"

export default async function signingUp(req,res){
    // res.status(200).json(clientPromise.url)
    await connect()

    const user = await User.create(req.body);
    if(!user){
        
        // res.json({"code": 'User Created!'})
        res.json({status: "User not Created"})
           
    }else{
        
        const {pathname} = Router
        // res.json({"code": 'User Created!'})
        if(pathname == '/'){
            return Router.push('/homePage/homePage')
             }
    }


 
}