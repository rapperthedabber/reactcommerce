import Image from 'next/image'
import Nav from './nav'
import Jacket from '@/components/Jacket'
import Shoes from './Shoes'
import { Inter } from 'next/font/google'


import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout() {
  const { data: session } = useSession()
  if(!session){
    return(
      <>
      <Nav />
    <div class = "background" >
    <div className={'text-center w-full'}>
    <button className={'bg-white p-2 rounded-lg items-center '} onClick={()=>signIn('google')}>Login to Google</button>
    </div>
  </div>
  </>
    );
  }

  return (
    <div>
      <Nav/>
      <div className ={' flex flex items-row space-x-2'} >
      
      <Jacket />
      <Shoes/>
      </div>
    <div>
    </div>
    <div className={'bg-white w-screen text-center w-full'}>
    <button className ={' p-2'}onClick={()=>signOut()}>Sign Out</button>
    <h1>logged in as {session.user.email}</h1>
    
    </div>
    </div>

  )
}