import {useRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import getJacket from '../pages/api/Jacket'

export default function Nav(){
    const router = useRouter()
    const {pathname} = router;
    return(
    <div className={'bg-white-900 space-x-5'}>
        <div className={'flex float-right'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
<span>Tokyo Commerce</span>
</div>
        <select name = 'products' id="products-select"className={'flex-row space-y-4'}>
        <option value="Products" ><Link href={'api/Products'}>Products</Link></option>
    <option value="Jacket"onClick={
      ()=>getJacket()
    } ><Link href = {'/Jacket'} >Jacket</Link></option>
    <option value="Shoe"> <Link href = {'/Shoe'}>Shoe</Link></option>
    <option value="Pants"><Link href = {'/Pants'}>Pants</Link></option>
    </select>
        <Link href = {'/cart'}>Cart</Link>
        
    </div>
    )
    
}