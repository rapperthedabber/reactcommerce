import Jacket from '@/components/Jacket'
import Nav from '@/components/nav'
import {useRouter} from 'next/router'
import Footer from '@/components/signOut'
// import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
export default  function renderJacket(){


 
    return(
      <>
      <div>
      <div>
      <Nav/>
      {/* <div className ={' w-screen h-screen flex flex items-row space-x-2'} > */}
      
      <Jacket />
      </div>
      <Footer />
    <div>
    </div>
    <div className={'text-center w-full'}>
    
    </div>
    </div>
    
    
    </>
    )
  }
   