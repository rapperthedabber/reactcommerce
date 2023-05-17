import {useRouter} from 'next/router'
import Link from 'next/link'

export default function renderNav(){
    return(
        <div>
            <span>Username</span>
            <input placeholder='username'></input>
            <span>Password</span>
            <input placeholder='password'></input>
        </div>
    )
}