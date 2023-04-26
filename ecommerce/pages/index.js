import Image from 'next/image'
import { Inter } from 'next/font/google'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return(
    <div className = {'bg-red-900 w-screen h-screen flex-items'}>
    <div className={'text-center w-full'}>
    <button className={'bg-white p-2 '} onClick={signIn('google')}>Login to Google</button>
    </div>
  </div>
    )
  }
  return (
    <h1>logged in</h1>
  )
}
