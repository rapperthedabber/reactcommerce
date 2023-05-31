import Image from "next/image"
import deletePicture from "../../images/delete.png"
import Nav from "@/components/nav"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export default function cart(){
// const cartItems =[{
//     img: "https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg",
//     price: '1022.99'
// },{
//     img: "https://www.reallgraphics.com/wp-content/uploads/2023/01/anime-shoes-ace-one-piece-1_gbmzfg.jpg",
//     price:'1022.99'
// }]

// const priceItems=[{
//     price: 1022.99
// },{
//     price:1022.99
// }]

const [cart, setCart] = useState([])

useEffect(() => {
    axios.get('/api/getJacket').then((res) => {
        console.log(res)
        setCart(res.data);
       
        
    });
}, [])

const [shoe, setShoe] = useState([])
useEffect(() => {
    axios.get('/api/getShoe').then((res) => {
        console.log(res)
        setShoe(res.data);
       
        
    });
}, [])

const deleteJacket=(id)=>{
    console.log(id)
     axios.delete(`/api/deleteJacket/${id}`).then((res)=>{
        console.log(res)
        

    })
}

const jacketPrice = cart.map((data)=>(
   data.price
))

const shoePrice = shoe.map((shoe)=>(
    shoe.price
))

const [deleted, setDeleted] = useState(true)
    return(
        <>
        <Nav />
        <div className="shoppingCart">
            <h1 id="yourCart">Your Cart: </h1>
            {cart?.map((data)=>(
                <div className="flexCart">
                   

                <img id = 'cartItems'src={data.url}></img>
                <h2>{data.price}</h2>
              
               <button type = 'submit' key = {data.id} onClick ={()=>deleteJacket(data._id)}> <Image id ="cartImage" src={deletePicture} alt='no Photo' /></button>
                
                </div>
                
            ))}
            {shoe?.map((data)=>(
                <div className="flexCart">
                   

                <img id = 'cartItems'src={data.url}></img>
                <h2>{data.price}</h2>
              
               <button type = 'submit' key = {data.id} onClick ={()=>deleteJacket(data._id)}> <Image id ="cartImage" src={deletePicture} alt='no Photo' /></button>
                
                </div>
                
            ))}
            <div className="yourTotal">

                
                    <div>
                    <h1>Your Total: </h1>
                 
                  
                    <h2>{`${parseInt(jacketPrice) + parseInt(shoePrice)}`}</h2>
                    
                   </div>
                   
                
                    {/* <h1>Your Total: </h1>
                   
                   
                  
                    <h2>{`${parseInt(cart.price)  + parseInt(cart.price) }`}</h2> */}
                    </div>
                   
                    
        </div>
        </>
    )
}