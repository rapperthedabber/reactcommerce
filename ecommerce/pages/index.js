import Image from 'next/image'
import Nav from '../components/nav'
import Layout from '@/components/Layout'
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
      <Nav/>
      <div className ={'bg-red-900 w-screen h-screen flex items-center'} >
      <Layout />
    </div>
    <div>
    </div>
    <div className={'text-center w-full'}>
    <button className ={'bg-red p-2'}onClick={()=>signOut()}>Sign Out</button>
    <h1>logged in as {session.user.email}</h1>
    
    </div>
    </div>
  )
}
