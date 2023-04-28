import Link from 'next/link'

export default function Nav(){
    return(
    <div className={'bg-white-900'}>
        <select name = 'products' id="products-select"className={'flex-row space-y-4'}>
          
        <option value="" ><Link href={'/Products'}>Products</Link></option>
    <option value="Jacket"><Link href = {'/Jacket'}>Jacket</Link></option>
    <option value="Shoe" href = '/Shoe'> <Link href = {'Shoe'}>Shoe</Link></option>
    <option value="Pants" href = '/Pants'><Link href = {'/Pants'}>Pants</Link></option>
    </select>
        <a href = '#' className={'flex-row space-y-4'}> Cart</a>
        
    </div>
    )
    
}