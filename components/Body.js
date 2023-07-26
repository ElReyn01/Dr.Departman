import React from 'react'
import Image from 'next/image';
// import Test from '@/components/page1/Test';
import Link from 'next/link'


const Hero = () => {
  return (
  <div>
      <div className='fixed top-0 -z-10'>
        <Image className='fixed top-0 w-full min-h-screen object-cover' 
        width='1200' height='1200'alt='online ceo'src='/images/s5.jpg'/>
      </div>

      <div className='flex w-full  pt-96 pb-20 justify-center items-center'>
      
     
      <div className='flex z-10 justify-around items-center bg-gradient-to-r
        from-indigo-800 to-transparent  w-56 border border-sky-500 rounded-md space-x-6' >
        
        <p className='text-xl  font-bold text-gray-400' >Enter </p>
        <Link href='/dr_page2' > 
        <Image className='w-10 object-contain ' width='100' alt='online ceo'
        height='100' src='/images/icon.gif'/> </Link>
      </div>
      

      </div>
          
  </div>
  )
}

export default Hero