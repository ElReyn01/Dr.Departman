import React, { useState } from 'react'
import Image from 'next/image';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Drawer from '../../components/Drawer';


export const DrRadNobat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
    };
    const handleClose = () => {
      setIsOpen(false);
    };
  return (

<div>
        
    {/* background asli..................................................................... */}
      <div className='fixed top-0 -z-10 '>
          <Image className='fixed top-0 w-full min-h-screen object-cover' 
          width='1200' height='1200'alt='online ceo'src='/images/s5.jpg'/>
      </div>



      <div className='fixed flex justify-between h-14 w-full left-0 top-0 z-50  bg-[#0e113452] items-center px-[2%]'>
          <div className='flex space-x-2  items-center'>
              <Image className='w-10 object-contain ' width='100' height='100'  alt='online ceo'
              src='/images/logo.png'/>
     
              <p className='text-xl font-bold sm:text-sm md:text-md text-gray-300'>Dr.Departman</p>
           </div>
    
      {/* drawer............................................................................*/}
        <button onClick={handleOpen}>
           <RiMenuUnfoldFill className='text-gray-300 text-3xl mx-2'/>
        </button>
           <Drawer isOpen={isOpen} onClose={handleClose} />
    </div>

  {/* .......................................................................................*/}

    <div className=' w-full space-y-4 min-h-screen flex flex-col py-20 md:py-16 sm:py-16 px-[15%] md:px-[10%] sm:px-[6%]  '>
      
      <div className=' w-full h-28 md:py-12 sm:py-12 flex justify-end items-center'> 
         <p className='text-xl md:text-sm sm:text-xs py-10  text-cyan-500 text-right  text-bold' >ساعت معاینه خود را انتخاب کنید </p>
      </div>
      
    {/* checkbox chakra.................................................................................*/}
      <div className='w-full h-16 bg-green-400 '>
      </div>
   
    {/* calender.................................................................................*/}  
      <div className=' w-full h-96 md:h-72 sm:h-52 flex  rounded-md px-[10%] '>
         <div className=' w-full h-full md:h-72 sm:h-52 flex bg-indigo-900'></div>
      </div>

    {/* checkbox 2 chakra.................................................................................*/}
      <div className='bg-[#0e113452]  w-full h-20 sm:h-16 md:h-16 roanded-md '>
        
      </div>
    
    {/* daryaft nobat.................................................................................*/}
      <button className='flex justify-center items-center  bg-cyan-600 h-20 sm:h-16 md:h-16 bg-blue-800 w-full h-20 rounded-md '>
        <p className='text-2xl md:text-xl sm:text-sm text-gray-300 text-bold'>دریافت نوبت</p>
      </button>
    
    </div>



</div>
  )
}
export default DrRadNobat;