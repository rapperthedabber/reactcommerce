import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import Astroboy from '../images/Astroboy.jpg'
import Pochita from '../images/Pochita.jpg'
import Naruto from '../images/Naruto.jpg'
import Add from '../images/add.png'

export default function Shoes(){
  const Shoe = [{
    id: 1,
    category: 'Shoe',
    product: 'Astro Shoes',
    url: 'https://m.media-amazon.com/images/I/51Mu4mf8okL.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99'
  }
,{
  id: 2,
  category: 'Shoe',
  product: 'Pochita Shoes',
  url: 'https://m.media-amazon.com/images/I/51cJUpo6KiL._AC_UY1000_.jpg',
  description: 'This shoe is from Chainsaw Man inspired by the character, Pochita',
  price: '200.00'
}, {
  id: 3,
  category: 'Shoe',
  product: 'Pochita Shoes',
  url: 'https://www.reallgraphics.com/wp-content/uploads/2023/01/arthur-pendragon-skate-sneakers-seven-deadly-sins-custom-anime-shoes-1_sbyskn.jpg',
  description: 'This shoe is from Chainsaw Man inspired by the character, Pochita',
  price: '200.00'
  
},{
  id: 4,
  category: 'Shoe',
  product: 'Pochita Shoes',
  url: 'https://www.reallgraphics.com/wp-content/uploads/2023/01/anime-shoes-ace-one-piece-1_gbmzfg.jpg',
  description: 'This shoe is from Chainsaw Man inspired by the character, Pochita',
  price: '200.00'
  
}]

function postShoe(id, category, url, product, price, description){
  alert('you added ' + product + ' to your cart')
  axios.post('/api/postShoe',{
    id: id,
    category: category,
    url: url,
    product: product,
    price: price,
    description: description
  }).then((res)=>
  console.log(res)
  )
}
    return(
      <div className ='shoeItems'>
{Shoe.map((shoes)=>(
<div className='shoeStuff'>
   <img  id ='shoeImage' src = {shoes.url}></img>
   <h2 id = 'shoeDescription'>{shoes.description}</h2>
   <h3 value = {shoes.id} key={shoes.id} name = 'product'>{shoes.product}</h3>
   <h3 id ='shoePrice'>{shoes.price}</h3>
   <button key ={shoes.id} onClick={()=>postShoe(shoes.id, shoes.category, shoes.url, shoes.product, shoes.price, shoes.description)}><Image src = {Add}></Image></button>
   </div>
))}
      </div>
  
      

    
       
    )
}