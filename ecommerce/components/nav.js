import {useRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import getJacket from '../pages/api/JacketaAPI'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Nav(){
    

    const router = useRouter()
    const handleJacket = ()=>{
        router.push('/Jacket/jacket')
    }
    const handleProduct = () =>{
        router.push('/Products/product')
    }
    const handleShoe= () =>{
        router.push('/Shoes/shoe')
    }
    const Profile =()=>{
        router.push('/Profile/Profile')
    }
    const {pathname} = router;
    return(
    <div className= 'navBar'>
        <div className={'flex float-right'}>
        <svg  id = "tokyoIcon"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
<span id ='Tokyo'>Tokyo Commerce</span>
</div>
        <button  id = 'Shoes' onClick ={()=>handleShoe()}>Shoes</button>
        <button id = "Jacket" onClick ={()=>handleJacket()}>Jacket</button>
        <button id='Products' onClick ={()=> handleProduct()}>Products</button>
        <button  id = "Profile" onClick = {()=> Profile()}>Profile</button>
        <Link href = {'/cart'}>Cart</Link>
        
    </div>
    )}


    
    
    