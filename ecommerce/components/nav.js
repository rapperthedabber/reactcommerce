import Link from 'next/link'

export default function Nav(){
    return(
    <div className={'bg-white-900'}>
        <select name = 'products' id="products-select"className={'flex-row space-y-4'}>
          
        <option value="Products" ><Link href={'/Products'}>Products</Link></option>
    <option value="Jacket"><Link href = {'/Jacket'}>Jacket</Link></option>
    <option value="Shoe"> <Link href = {'/Shoe'}>Shoe</Link></option>
    <option value="Pants"><Link href = {'/Pants'}>Pants</Link></option>
    </select>
        <Link href = {'/cart'}>Cart</Link>
        
    </div>
    )
    
}