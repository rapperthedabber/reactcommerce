import Layout from '@/components/Layout'
import Nav from '@/components/nav'
import Jacket from '@/components/Jacket'
import Shoes from '@/components/Shoes'
export default function renderProducts(){
    return(
        <>
       
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
      </>
    )
    
   }