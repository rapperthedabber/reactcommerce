import Image from 'next/image'
import Nav from '../components/nav'
import { Inter } from 'next/font/google'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return(
      <>
      <Nav />
    <div className = {'bg-red-900 w-screen h-screen flex items-center'}>
    <div className={'text-center w-full'}>
    <button className={'bg-white p-2 rounded-lg items-center '} onClick={()=>signIn('google')}>Login to Google</button>
    </div>
  </div>
  </>
    );
  }

  return (
    <div>
    <h1>logged in{session.user.email}</h1>
    <button className ={'bg-red p-2'}onClick={()=>signOut()}>Sign Out</button>
   
    </div>
  )
}
