import React from 'react'
import Image from 'next/image';
// import Test from '@/components/page1/Test';
import Link from 'next/link'


const Body = () => {
  return (
  <div>
    {/* background asli..................... */}
      <div className='fixed top-0 -z-10'>
        <Image className='fixed top-0 w-full min-h-screen object-cover' 
        width='1200' height='1200'alt='online ceo'src='/images/s5.jpg'/>
      </div>


       {/* box vorod............................. */}
       <div className='flex w-full  pt-96 pb-20 justify-center items-center'>
      <Link href='/dr_page2' >
      <button type="button" className='flex z-10 justify-around items-center bg-gradient-to-r from-blue-800 to-indigo-500 hover:from-pink-500 hover:to-indigo-900
           w-56 rounded-md space-x-6' >
        
        <p className='text-xl  font-bold text-black' >Enter </p>
        
        <Image className='w-10 object-contain ' width='100' alt='online ceo'
        height='100' src='/images/icon.gif'/> 
      </button>
      </Link>

      </div>
   

      
          
  </div>
  )
}

export default Body