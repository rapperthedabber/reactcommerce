
import connect from '@/lib/mongodb'
import { jacket } from '@/models/Jacket'

export default async function getJacket(req,res){
const {method} = req.body
if(method === 'POST'){
    res.status(200).json({message: 'you did ittttt'})
}



}