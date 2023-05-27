
import connect from '@/lib/mongodb'
import { jacket } from '@/models/Jacket'
import JacketData from '../../data/jacket.json'

export default async function getJacket(req,res){
const user = jacket.create(JacketData)
res.status(200).json({user})


}