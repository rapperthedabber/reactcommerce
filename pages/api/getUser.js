// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import signingUp from "./signUp";
import Profile from '../../models/Profile'
import renderProfile from "./userProfile";
import mongoose from "mongoose";
import connect from "@/lib/mongodb";
import { data } from "autoprefixer";

export default async function updateProfile(req,res){
      if(req.method !== "GET"){
        res.status(400).send({msg: 'you did not do a GET REQUEST'})
      }
    
      try{
        await connect()
        const task = await Profile.find().limit(1).sort({$natural:-1})
        res.status(200).send(task)
      }catch(err){
        res.status(400).send({err, msg: 'Something went wrong!'})

      }

 
  
}