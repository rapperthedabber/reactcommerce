import Image from 'next/image'
import Dashie from '../images/Dashie.jpg'
export default function Jacket(){
  const jacketStuff = [{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUe1LG8DxkgruWZVlPWcss_Sdr8u4zUK3ag&usqp=CAU',
    description: 'This jacket was inspired by Seven Deadly Sins',
    price: '1022.99'

  },{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnKcBf9mpivTpblEQ0uUgpZsiHe4GaOMvKA&usqp=CAU',
    description: 'From the character Naruto Uzumaki from Naruto',
    price: '1022.99'

  },{
    url: 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99'
  },
  {
    url: 'https://ae01.alicdn.com/kf/Seff165c5ad1f4be8b79a42952ba9f1c1t/Re-Zero-kara-Hajimeru-Isekai-Seikatsu-Hoodies-Jackets-Anime-Cosplay-Re-Life-in-a-different-world.jpg_Q90.jpg_.webp',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99'
  },{
    url: 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99'
  },{
    url: 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg',
    description: 'This is a shoe inspired by Tezuka Osamu Astroboy',
    price: '1022.99'
  }]
    return(
      <div className='jacketItem'>
        {jacketStuff.map((jacket)=>(
          <div className='jacketStuff'>
            <img id = 'jacketPicture'src ={jacket.url}></img>
            <h2 id = 'jacketDescription'>{jacket.description}</h2>
            <h3 id = 'jacketPrice'>{jacket.price}</h3>
            </div>
        ))}
      </div>

        
    )
}