import {useRouter} from 'next/router'
import Link from 'next/link'
import FirstNav from '@/components/firstNav'
import axios from 'axios'
import { useState } from 'react'
export default function renderNav(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   async function postUser(){

    const data = {username, password};
    await axios.post('/api/Login', data)
   }

   async function postNewUser(event){
    event.preventDefault()
    const data = {username, password}
    await axios.post('/api/signUp' , data)
   }
    return(
        <>
        <FirstNav />
        <div className='loginCard'>
            <span id = 'userName'>Username</span>
            <input placeholder='username' value = {username} onChange={ (event)=>setUsername(event.target.value)}></input>
            <span id = 'passWord'>Password</span>
            <input placeholder='password' value = {password} onChange = {(event)=>setPassword(event.target.value)}></input>
            <button  id = 'LoginButton'type='submit' onClick={postUser}>Login</button>
            <button id = 'SignUp'type = 'submit' onClick={postNewUser}>SignUp</button>
        </div>
        </>
    )
}