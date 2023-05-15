import Image from 'next/image'
import Astroboy from '../images/Astroboy.jpg'
import Pochita from '../images/Pochita.jpg'
import Naruto from '../images/Naruto.jpg'
export default function Shoes(){
  const Shoe = [{
    url: 'https://m.media-amazon.com/images/I/51Mu4mf8okL.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99'
  }
,{
  url: 'https://m.media-amazon.com/images/I/51cJUpo6KiL._AC_UY1000_.jpg',
  description: 'This shoe is from Chainsaw Man inspired by the character, Pochita',
  price: '200.00'
}, {
  url: 'https://www.reallgraphics.com/wp-content/uploads/2023/01/arthur-pendragon-skate-sneakers-seven-deadly-sins-custom-anime-shoes-1_sbyskn.jpg',
  description: 'This shoe is from Chainsaw Man inspired by the character, Pochita',
  price: '200.00'
  
},{
  url: 'https://www.reallgraphics.com/wp-content/uploads/2023/01/anime-shoes-ace-one-piece-1_gbmzfg.jpg',
  description: 'This shoe is from Chainsaw Man inspired by the character, Pochita',
  price: '200.00'
  
}]
    return(
      <div className ='shoeItems'>
{Shoe.map((shoes)=>(
<div className='shoeStuff'>
   <img  id ='shoeImage' src = {shoes.url}></img>
   <h2 id = 'shoeDescription'>{shoes.description}</h2>
   <h3 id ='shoePrice'>{shoes.price}</h3>
   </div>
))}
      </div>
  
      

    
       
    )
}