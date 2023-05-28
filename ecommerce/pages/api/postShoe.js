import connect from "@/lib/mongodb";
import mongoose from "mongoose";
import Shoes from "@/components/Shoes";

async function postShoe(req,res){
    await connect();
    try{
        const myShoes = await Shoes.create(req.body);
        if(myShoes){
            return res.status(200).json({'code': "Successfully added shoe item"})
        }
    }catch(error){
        res.status(400).json({status: 'not able to post Shoe item'})
    }
}