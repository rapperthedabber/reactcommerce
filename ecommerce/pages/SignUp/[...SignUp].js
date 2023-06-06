import {useRouter} from 'next/router'
import FirstNav from '@/components/firstNav'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
export default function renderNav(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   async function postUser(){

    const data = {username, password};
    await axios.post('/api/Login', data)
   }

   const router = useRouter()
   function homePage(){
    router.push('/homePage/homePage')
   }

//    async function postNewUser(event){
//     event.preventDefault()
//     const data = {username, password}
//     await axios.post('/api/signUp' , data)
//    }
    return(
        <>
        <FirstNav />
        <div >
            <form className='loginCard' action='/api/signUp' method='POST'>
            <span id = 'userName'>Username</span>
            <input type = "username"  placeholder='username' name = 'username' ></input>
            <span id = 'passWord'>Password</span>
            <input type = "password" placeholder='password' name = 'password'  ></input>
            {/* <button  id = 'LoginButton'type='submit' onClick={postUser}>Login</button> */}
            <button id = 'SignUp'type = 'submit'  value='Register' onClick={()=>homePage()}>SignUp</button>
            </form>
        </div>
        </>
    )
}