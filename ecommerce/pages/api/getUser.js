// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import signingUp from "./signUp";
import Profile from '../../models/Profile'
import renderProfile from "./userProfile";
import mongoose from "mongoose";

export default async function updateProfile(req,res){
  try{
    const user = await Profile.find()
    if(user){
    return res.status(200)
    }
  }
  catch{
    res.status(400).json({status: 'not able to get profile'})
  }

 
  
}