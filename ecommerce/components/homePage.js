import { useSession, signOut } from "next-auth/react"
import React from "react"


import Nav from "./nav"
import Jacket from "./Jacket"
import Shoes from "./Shoes"
export default function homePage(){
    return(
        <div>
        <Nav/>
        <div >
        
        <Jacket />
        <Shoes/>
        </div>
      <div>
      </div>
      <div className={'bg-white w-screen text-center w-full'}>
      <button className ={' p-2'}onClick={()=>signOut()}>Sign Out</button>
      {/* <h1>logged in as {session.user.email}</h1> */}
      
      </div>
      </div>
    )
}