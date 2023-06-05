import mongoose from "mongoose";
import connect from "@/lib/mongodb";
import Profile from '../../models/Profile'

export default async function renderProfile(req,res){
    await connect()
    try{
        const profile = await Profile.create(req.body);
        if(profile){
            // res.json({"code": 'User Created!'})
          res.redirect('/Profile/Profile')
           
        }else{
            res.json({"code": "profile not Created"})
        }
    
    
     }catch (error){
        res.status(400).json({status: 'not able to create a new user'})
    
     }


}