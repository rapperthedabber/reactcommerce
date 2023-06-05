import {useRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { useEffect } from 'react'

import getJacket from '../pages/api/postJacket'
import { useState } from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"


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
    const editProfile = () =>{
        router.push('/editProfile/editProfile')
    }
    const Cart = ( )=>{
        router.push('/cart/cart')
    }
    const {pathname} = router;
const [profile, setProfile] = useState()
    
    useEffect(() => {
        axios.get('/api/getUser').then((res) => {
            setProfile(res.data);
            console.log(res)
            const Name = (res.data.Name)
        });
    }, [])

    return(
    <div className= 'navBar'>
        <div className={'flex'}>
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
        <button id = "Cart" onClick = {()=> Cart()}>Cart</button>

        {profile?.map((data)=>(
            <>
            <img  id = 'circleProfile' src={data.url}></img>
            <h4 id = 'welcomeData'> welcome, {data.Name}</h4>
            </>
        ))}
        
        <button id = 'editProfile' onClick={()=> editProfile()}>Edit Profile</button>
        
    </div>
    )}


    
    
    