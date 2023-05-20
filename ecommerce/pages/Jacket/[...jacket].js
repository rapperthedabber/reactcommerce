import Jacket from '@/components/Jacket'
import Nav from '@/components/nav'
import {useRouter} from 'next/router'
// import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
export default  function renderJacket(){


 
    return(
      <>
      <div>
      <Nav/>
      <div className ={' w-screen h-screen flex flex items-row space-x-2'} >
      
      <Jacket />
      </div>
    <div>
    </div>
    <div className={'text-center w-full'}>
    
    </div>
    </div>
    </>
    )
  }
   