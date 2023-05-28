import connect from "@/lib/mongodb";
import mongoose from "mongoose";
import Shoe from '../../models/Shoe';

export default async function postShoe(req,res){
    await connect();
    try{
        const myShoes = await Shoe.create(req.body);
        if(myShoes){
            return res.status(200).json({'code': "Successfully added shoe item"})
        }
    }catch(error){
        res.status(400).json({status: 'not able to post Shoe item'})
    }
}