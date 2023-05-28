import Image from 'next/image'
import Dashie from '../images/Dashie.jpg'
import Add from '../images/add.png'
import { useState } from 'react'
import axios from 'axios'
export default function Jacket(){

  const jacketStuff = [{
    id:1,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUe1LG8DxkgruWZVlPWcss_Sdr8u4zUK3ag&usqp=CAU',
    description: 'This jacket was inspired by Seven Deadly Sins',
    price: '1022.99',
    category: 'jacket',
    product: 'Ninja Jacket'

  },{
    id:2,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnKcBf9mpivTpblEQ0uUgpZsiHe4GaOMvKA&usqp=CAU',
    description: 'From the character Naruto Uzumaki from Naruto',
    price: '1022.99',
    category: 'jacket',
    product: 'Ninja Jacket'

  },{
    id:3,
    url: 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99',
    category: 'jacket',
    product: 'Ninja Jacket'
  },
  {
    id:4,
    url: 'https://ae01.alicdn.com/kf/Seff165c5ad1f4be8b79a42952ba9f1c1t/Re-Zero-kara-Hajimeru-Isekai-Seikatsu-Hoodies-Jackets-Anime-Cosplay-Re-Life-in-a-different-world.jpg_Q90.jpg_.webp',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99',
    category: 'jacket',
    product: 'Ninja Jacket'
  },{
    id:5,
    url: 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99',
    category: 'jacket',
    product: 'Ninja Jacket'
  },{
    id:6,
    url: 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99',
    category: 'jacket',
    product: 'Ninja Jacket'
  }]
 
// function postJacket(){
//   axios.post('/api/getJacket').then((res)=>{
//     console.log(res.data)
//   })}

const [description, setDescription] = useState()
const [url, setUrl] = useState()
const [price, setPrice] = useState()


  async function postJacket(){
  
    
    const data = { description, price, url}
    await axios.get('/api/postJacket').then((res)=>{
      res.status(200).json({message: 'Went through'})
    })
  }

    return(
      <div className='jacketItem'>
        {jacketStuff.map((jacket)=>(
          
          <form className='jacketStuff' action = '/api/postJacket' method='post'> 
            <img value = 'url' key={jacket.id} name = 'url' id = 'jacketPicture'src ={jacket.url} ></img>

            <h6>{jacket.category}</h6>
            <h2 value = 'description' key={jacket.id} name = 'description' id = 'jacketDescription'>{jacket.description}</h2>
            <h3  value = 'price' key={jacket.id} name = 'price'id = 'jacketPrice'>{jacket.price}</h3>
            <h3 value = 'product'>{jacket.product}</h3>
            <h3 value = 'id'>{jacket.id}</h3>
           <button  value= 'Register' ><Image  src = {Add} id = 'add'  /></button>

           
            
              
          
            </form>
           
        ))}
      </div>

        
    )
}