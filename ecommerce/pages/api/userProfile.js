import mongoose from "mongoose";
import connect from "@/lib/mongodb";
import Profile from '../../models/Profile'
import {Router} from "next/router";
export default async function renderProfile(req,res){
    await connect()

        const profile = await Profile.create(req.body);
        if(!profile){
            return res.status(200).json({"code": "profile not Created"})
           
        }else{
            const {pathname} = Router
            if(pathname == '/'){
           return Router.push('/Profile/Profile')
            }
        }
    
    

}