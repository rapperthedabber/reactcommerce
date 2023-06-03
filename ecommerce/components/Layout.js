import Nav from './nav'
import Footer from './signOut'
import { useState } from 'react'
import Jacket from '@/components/Jacket'
import { useEffect } from 'react'
import Shoes from './Shoes'
import FirstNav from "./firstNav"
import Link from 'next/link'


// import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout() {
  const data =['https://www.urbanfashionstudio.com/wp-content/uploads/2021/08/Mens-Black-Leather-Jackets-USA.jpg', 
  'https://www.lussoleather.com/cdn/shop/articles/most-popular-leather-jacket-styles_1000x.jpg?v=1678940092', 'https://is-it-fake.com/wp-content/uploads/2018/10/cosplay-matsuri2-1-1024x576.png', 'https://store.crunchyroll.com/dw/image/v2/BDGC_PRD/on/demandware.static/-/Sites-CrunchyrollUS-Library/default/dw97721fb2/Home%20Page%20Assets/Mobile-Slider_Brand%20Of%20The%20Week%203_1000x500.jpg',
'https://cdn.shopify.com/s/files/1/0013/1930/5315/files/EC4B7C01-9CB7-4E0C-BFD5-6602F501AC40_1500x.jpg?v=1677517062']
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselInfiniteScroll = ()=>{
  if(currentIndex === data.length){
    return setCurrentIndex(0)
  }

 
return setCurrentIndex(currentIndex+1)}

useEffect(() =>{
  const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
  return () => clearInterval(interval)})




    return(
      <>
      <FirstNav />
     <div className='carouselContainer'>
   
      {data.map((item, index)=>{
        return <img src ={item} id = 'carouselItem' 
        style ={{transform: `translate(-${currentIndex * 100}%)`}}
        key = {index}/> 
      
      })}
      {/* <div id = 'carouselItem'>
        <img src = 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg'></img>
      </div >
      <div id = 'carouselItem'>
        <img src = 'https://ae01.alicdn.com/kf/Seff165c5ad1f4be8b79a42952ba9f1c1t/Re-Zero-kara-Hajimeru-Isekai-Seikatsu-Hoodies-Jackets-Anime-Cosplay-Re-Life-in-a-different-world.jpg_Q90.jpg_.webp'></img>
      </div>
      <div id = 'carouselItem'>
        <img src = 'https://teeholly.s3.us-west-1.amazonaws.com/2022/09/anime-friends-hoodie_1664183871.jpg'></img>
      </div> */}

     </div>
      
      <h1 id ='Welcome'>Welcome to Tokyo Commerce!</h1>
      <h5 id = 'Welcome2'>An e-commerce for anime fans</h5>
    <div class = "background" >
    <div className={'text-center w-full'}>
      <div>
      <button id = 'loginSignup'><Link href ={'/SignUp/SignUp'}>SignUp</Link></button>
      </div>
      <div>
      <button id = 'loginSignup'><Link href ={'/Login/Login'}>Login</Link></button>

      </div>
    </div>
  </div>
  <div className = 'aboutCard'>
    <h1 id = 'About'> Why Tokyo Commerce? </h1>
    <img  id = 'aboutImage' src = 'https://www.nagoyaisnotboring.com/wp-content/uploads/2020/09/manga_reading.jpg'/>
    <h2 id = 'aboutInfo'>With the demand of Japanese entertainment and the rise of otaku culture internationally, Tokyo Commerce
  is geared towards anime and tokusatsu fans that wants to buy japanese merchandise from their favorite show or movie. With the ever-expanding
  otaku culture, Tokyo Commerce is one of the few websites that tries to meet the demands of every-day otakus, like us, and creates this application 
  with the mind of the entire otaku community. </h2>
    <h1 id = 'About'> Features </h1>
    <h2 id ='aboutInfo'>Users are able to go to navigate such as jacket, shoes, and products to filter out products 
    they desire to see. </h2>

  </div>
  <footer>
  <h1 id = 'footer-intro'>Tokyo Commerce</h1>
            <h4 id ='footer-phrase'>An Otaku's paradise</h4>
  </footer>

  </>
    );
  }
  