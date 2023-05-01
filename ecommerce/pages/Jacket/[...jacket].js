import Jacket from '@/components/Jacket'
import Nav from '@/components/nav'
import {useRouter} from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
export default  function renderJacket(){

  const { data: session } = useSession()
  if(session)
  {
    return(
      <>
      <div>
      <Nav/>
      <div className ={'bg-red-900 w-screen h-screen flex flex items-row space-x-2'} >
      
      <Jacket />
      </div>
    <div>
    </div>
    <div className={'text-center w-full'}>
    <button className ={'bg-red p-2'}onClick={()=>signOut()}>Sign Out</button>
    <h1>logged in as {session.user.email}</h1>
    
    </div>
    </div>
    </>
    )
  }
   }