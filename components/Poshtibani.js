import React from 'react'
import Image from 'next/image';



const Poshtibani = () => {
    return (
<div>
        <div className=' bg-slate-900 w-full h-14  px-3 flex   justify-between items-center'>
            <div className='flex items-center space-x-3'>
                <Image className='w-8 sm:w-4 'width='100'height='100' alt='online ceo' src='/images/ring1.gif' />
                <p className='text-l sm:text-xs text-gray-400'>09044262926</p>
            </div>

            <div className='flex items-center space-x-3'>
                <Image className='w-8 sm:w-4 'width='100'height='100' alt='online ceo' src='/images/email1.png' />
                <p className='text-l sm:text-xs text-gray-400'>@email.com</p>
            </div>

            <div className='flex flex-col  items-center '>
                <h1 className='sm:text-xs md:text-xs  text-gray-400'>مازندران - میذان ساری  </h1>
                <h2 className='sm:text-xs md:text-xs  text-gray-400'>خیابان فرهنگ</h2>
            </div>

        </div>
          
</div>
     )
 }
export default Poshtibani;