import Image from "next/image"
import deletePicture from "../../images/delete.png"
import Nav from "@/components/nav"
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

const [deleted, setDeleted] = useState(true)
    return(
        <>
        <Nav />
        <div className="shoppingCart">
            <h1 id="yourCart">Your Cart: </h1>
            {cartItems.map((data)=>(
                <div className="flexCart">
                <img id = 'cartItems'src={data.img}></img>
                <h2>{data.price}</h2>
               <Image id ="cartImage" onClick = {()=>setDeleted(false)}src={deletePicture} alt='no Photo' />
                
                </div>
                
            ))}
            <div className="yourTotal">
                    <h1>Your Total: </h1>
                   
                   
                  
                    <h2>{`${parseInt(cartItems[1].price)  + parseInt(cartItems[1].price) }`}</h2>
                    </div>
                   
                    
        </div>
        </>
    )
}