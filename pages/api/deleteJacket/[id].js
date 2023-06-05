import Jacket from "../../../models/Jacket"
import connect from "@/lib/mongodb"
import { _id } from "@next-auth/mongodb-adapter";
import mongoose from "mongoose"


export default async function deleteStuff(req,res){
    const {
        method,
        query: { id },
       
      } = req;
if(method === "DELETE"){
    try{
        await connect()
        const myJacket = await Jacket.findByIdAndDelete(id);
        res.status(200).send(myJacket)

    }catch(error){

        res.status(400).send({error, message: 'something went wrong'})
    }

}
    
}