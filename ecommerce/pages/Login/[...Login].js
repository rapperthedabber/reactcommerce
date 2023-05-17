import {useRouter} from 'next/router'
import Link from 'next/link'
import FirstNav from '@/components/firstNav'

export default function renderNav(){
    return(
        <>
        <FirstNav />
        <div className='loginCard'>
            <span id = 'userName'>Username</span>
            <input placeholder='username'></input>
            <span id = 'passWord'>Password</span>
            <input placeholder='password'></input>
            <button  id = 'LoginButton'type='submit'>Login</button>
            <button id = 'SignUp'type = 'submit'>SignUp</button>
        </div>
        </>
    )
}