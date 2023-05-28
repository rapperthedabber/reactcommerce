
import connect from '@/lib/mongodb'
import jacket from '../../models/Jacket'

export default async function getJacket(req,res){
    await connect()
    try{
       const Jacket= await jacket.create(req.body);
       if(Jacket){
            res.json({"code": 'User Created!'})
       }else{
           res.json({"code": "User not Created"})
       }
   
   
    }catch (error){
       res.status(400).json({status: 'not able to create jacket'})
   
    }

}