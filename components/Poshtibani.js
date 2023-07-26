import React from 'react'
import Image from 'next/image';



const Poshtibani = () => {
    return (
<div>
        <div className=' bg-slate-900 w-full h-14  px-6 flex sm:space-x-10 justify-between items-center'>
            <div className='flex items-center space-x-3'>
                <Image className='w-8 sm:w-4 'width='100'height='100' alt='online ceo' src='/images/ring1.gif' />
                <p className='text-l sm:text-xs text-gray-400'>09044262926</p>
            </div>

            <div className='flex items-center space-x-3'>
                <Image className='w-8 sm:w-4 'width='100'height='100' alt='online ceo' src='/images/email1.png' />
                <p className='text-l sm:text-xs text-gray-400'>@email.com</p>
            </div>

            <div className='flex  items-center space-x-3'>
                <p className='sm:text-xs text-gray-400'>مازندران - میذان ساری - خیابان فرهنگ</p>
            </div>

        </div>
          
</div>
     )
 }
export default Poshtibani;