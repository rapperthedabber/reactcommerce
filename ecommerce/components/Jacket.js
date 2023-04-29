import Image from 'next/image'
import Dashie from '../images/Dashie.jpg'
export default function Jacket(){
    return(
     
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <Image className={"w-200 h-200"} src={Dashie} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Super Mario Jacket</div>
    <p class="text-gray-700 text-base">
        This is a Super Mario Jacket.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">59.99</span>

  </div>
</div>
        
    )
}