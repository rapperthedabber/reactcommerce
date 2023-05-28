import connect from "@/lib/mongodb";
import Jacket from '../../models/Jacket'

export default async function getJacket(req,res){
    
   if(req.method !== 'GET'){
    res.json({"code": "you did not do a get request"})
   }
   try{
    await connect();
    const myJacket = await Jacket.find().limit(1).sort({$natural: -1})
    res.status(200).send(myJacket)
    
   }catch(error){
    res.status(400).send({error, msg: "Something went wrong!"})
   }
}