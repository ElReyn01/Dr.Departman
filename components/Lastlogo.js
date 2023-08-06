import React from 'react'
import Image from 'next/image';


const Lastlogo = () => {
    return (

// logo akhar........................
<div>
<div className='  w-full h-32 flex flex-col py-7 items-center z-20 '>
<Image className='w-14 sm:w-10 object-contain ' width='100' height='100' alt='online ceo' 
src='/images/logo.png'/>
<div className='flex space-x-2'>
<p className='text-white sm:text-xs flex  '>power by</p>
<p className='text-sky-500 sm:text-xs'>ONLINE CEO</p>
</div>
</div>   
</div>
  )
 }
 export default Lastlogo;