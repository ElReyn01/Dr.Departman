import React from 'react'
import Image from 'next/image';
import Header from '../Header'
import {FiSearch} from 'react-icons/fi';


export const Header2 = () => {
  return (
<div>
{/* Aks bachground.........     */}
<div className='fixed top-0 -z-10'>
<Image className='fixed top-0 w-full min-h-screen object-cover' 
width='1200' height='1200'alt='online ceo'src='/images/s5.jpg'/>
</div>

{/* Haeder aval........   */}
<div className='w-full h-32 sm:h-28 flex flex-col  '>

<div className='w-full h-1/2'>
<Header/>
</div>      
{/* ndcnsdv */}
{/* search.......... */}
<div className='w-full h-1/2 px-6 py-3  space-x-2  flex justify-between item-center '>


<input type='text'   className='bg-[#0e113452] w-full text-white text-right sm:text-xs md:text-md p-2 pt-1 sm:pt-1 sm:h-6 h-8 rounded-xl border-2
 border-gray-400' placeholder='جستجو' ></input>  
<div className='w-[35%] rounded-xl  h-8 sm:h-6 flex item-center justify-center border-2 border-gray-400 bg-[#0e113452]'>
<p className='sm:text-xs text-sm flex justify-center items-center text-white'>SeeDepartman</p>
</div>

</div>

</div>
</div>
  )
}

export default Header2;
