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
    product: 'Seven Deadly Sin Jacket'

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
    description: 'From One Piece and his friends!',
    price: '1022.99',
    category: 'jacket',
    product: 'One Piece Jacket'
  },
  {
    id:4,
    url: 'https://ae01.alicdn.com/kf/Seff165c5ad1f4be8b79a42952ba9f1c1t/Re-Zero-kara-Hajimeru-Isekai-Seikatsu-Hoodies-Jackets-Anime-Cosplay-Re-Life-in-a-different-world.jpg_Q90.jpg_.webp',
    description: 'From our favorite Re:Zero show',
    price: '1022.99',
    category: 'jacket',
    product: 'Re:Zero Jacket'
  },{
    id:5,
    url: 'https://s7d1.scene7.com/is/image/zumiez/360550',
    description: 'Inspired by My Hero Academia!',
    price: '883.00',
    category: 'jacket',
    product: 'Hero Jacket'
  },{
    id:6,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsp8aCTk3UOxYNM2BtkqrRW-77owfEd6OmQ&usqp=CAU',
    description: 'Our legendary Goku jacket inspired by Dragon Ball',
    price: '1722.99',
    category: 'jacket',
    product: 'Goku Jacket'
  }]
 
// function postJacket(){
//   axios.post('/api/getJacket').then((res)=>{
//     console.log(res.data)
//   })}

const [editAdd, setEditAdd] = useState('add')

  const postJacket = (id,url,description,price,category,product)=>{
  
    console.log(id, url, description, price, category, product)
    alert('you added ' + product + " to your")
   setEditAdd('ADD')
     axios.post('/api/postJacket', {
      id: id,
      url: url,
      description: description,
      price: price,
      category: category,
      product: product
     }).then((res)=>{
      console.log(res)
    })
  }

    return(
      <div className='jacketItem'>
        {jacketStuff.map((jacket)=>(
          
          <div className='jacketStuff'> 
            <img value = {jacket.url} key={jacket.id} name = 'url' id = 'jacketPicture'src ={jacket.url} ></img>
            <h2 value = {jacket.id} key={jacket.id} name = 'description' id = 'jacketDescription'>{jacket.description}</h2>
            <h3 value = {jacket.id} key={jacket.id} name = 'product'>{jacket.product}</h3>
            <h3  value = {jacket.id} key={jacket.id} name = 'price'id = 'jacketPrice'>{jacket.price}</h3>
          
           <button   type = 'submit'  onClick = {()=>postJacket(jacket.id, jacket.url,jacket.description, jacket.price, jacket.category,   jacket.product )}value= 'Register' ><Image  src = {Add} id = 'add'  /></button>

           
            
              
          
            </div>
           
        ))}
      </div>

        
    )
}