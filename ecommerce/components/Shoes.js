import Image from 'next/image'
import Astroboy from '../images/Astroboy.jpg'
import Pochita from '../images/Pochita.jpg'
import Naruto from '../images/Naruto.jpg'
export default function Shoes(){
    return(
      
       
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white " >
  <Image className={"w-200 h-200"} src={Astroboy} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Astroboy Shoes</div>
    <p class="text-gray-700 text-base">
        Inspired by Osama Tezuka, this shoe design is inspired by Tezuka's cultural phenomenon 'Astro Boy'
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">59.99</span>

  </div>
<div className={' flex flex items-row'}></div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white  "  >
        <Image className={"w-200 h-200"} src= {Pochita} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">79.99</span>
        </div>
      </div>
      </div>
      
    
    
       
    )
}