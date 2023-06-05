import connect from "@/lib/mongodb";
import Shoe from '../../models/Shoe'
import mongoose from "mongoose";

export default async function getJacket(req,res){
    
   if(req.method !== 'GET'){
    res.json({"code": "you did not do a get request"})
   }
   try{
    await connect();
    const myShoe = await Shoe.find().limit(1).sort({$natural: -1})
    res.status(200).send(myShoe)
    
   }catch(error){
    res.status(400).send({error, msg: "Something went wrong!"})
   }
}