import React, { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Drawer from '../Drawer';
import Image from 'next/image';
import {GiBeastEye} from  'react-icons/gi';
import {GiBrain} from  'react-icons/gi';
import {GiHeartOrgan} from  'react-icons/gi';
import {BsFillLungsFill} from  'react-icons/bs';
import Tabage1 from '../page2/Tabage1'


export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
    };
    const handleClose = () => {
      setIsOpen(false);
    };
  return (

<div>
    
   {/* Aks background.........     */}
        <div className='fixed top-0 -z-30'>
             <Image className='fixed top-0 w-full min-h-screen object-cover' 
             width='1200' height='1200'alt='online ceo'src='/images/s5.jpg'/>
        </div>

<div className='bg-[#0b0c12e1] fixed w-full z-30 '>
    
    {/*Header .......................  */} 
    <div className='flex justify-between h-12 border-b-2 border-gray-600 bg-[#0b0c12e1] w-full items-center px-[2%]'>
        <div className='flex space-x-2  items-center'>
            <Image className='w-10 object-contain ' width='100' height='100'  alt='online ceo'
             src='/images/logo.png'/>
            <p className='text-xl font-bold sm:text-sm md:text-md text-gray-300'>Dr.Departman</p>
        </div>
    
       {/* drawer........................ */}
        <button onClick={handleOpen}>
         <RiMenuUnfoldFill className='text-white text-2xl mx-4'/>
        </button>
           <Drawer isOpen={isOpen} onClose={handleClose} />
    </div>




    <div className='px-12 md:px-6 sm:px-3 bg-[#0b0c12e1] flex flex-col  '>
   
    {/* search.......... */}
        <div className='w-full pt-5 pb-3  md:pb-2 sm:pb-2 space-x-2  flex justify-end '>

            <input type='text'   className=' w-full h-8 md:h-6 sm:h-6  bg-[#0b0c12e1] text-gray-200 text-right sm:text-xs md:text-md p-2 pt-1 sm:pt-1
             rounded-md border-2 border-gray-300' placeholder='جستجو' >
            </input>
              
            <div className='w-[50%]  h-8 md:h-6 sm:h-6  flex justify-end items-center px-2 border-2 border-gray-300  rounded-md'>
               <p className='md:w-52 sm:w-40 flex justify-end  text-white text-sm sm:text-xs md:text-xs'>   مشاهده طبقات ساختمان </p>
            </div>

        </div>


        
    
    {/* menu aval.......................... */}
        
        <div className="flex h-12 justify-center items-center w-full overflow-x-auto space-x-2  sm:pb-2  ">
    
            <div className=' h-8 sm:h-7 rounded-md text-white text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'> تهیه نسخه  </p> 
            </div>
    
            <div className=' h-8 sm:h-7  rounded-md text-white text-xs flex   border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'> ویزیت در منزل </p>
            </div>
    
            <div className=' h-8 sm:h-7  rounded-md text-white text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'> تزریقات در منزل </p>    
            </div>
    
            <div className=' h-8 sm:h-7  rounded-md text-white text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'>  پرستاری در منزل </p>
            </div>
    
            <div className=' h-8 sm:h-7  rounded-md text-white text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'> ارتوپدی در منزل </p>
            </div>
    
            <div className=' h-8 sm:h-7  rounded-md text-white text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'>  ازمایش در منزل </p>
            </div>
    
            <div className=' h-8 sm:h-7  rounded-md text-white text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'>  تجهیزات در منزل</p>
            </div>
    
            <div className=' h-8 sm:h-7  rounded-md text-white text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center'>  معاینه در منزل  </p>
            </div>
     
        </div>    
        
        
    
                       
    

    {/* menu dovom................................. */}
        <div className="flex h-12 justify-center items-center w-full overflow-x-auto space-x-2  sm:pb-3 ">

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4  rounded-sm text-black  text-sm text-bold flex justify-around items-center sm:text-sm   bg-yellow-600'>
            <GiBeastEye /> <h1>چشم</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4   rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-gray-300'>
             <GiHeartOrgan /> <h1>قلب</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4    rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-yellow-600'>
            <GiBrain /> <h1>مغز</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-5  rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-gray-300'>
            <BsFillLungsFill /> <h1>ریه</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4  rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-yellow-600'>
             <GiHeartOrgan /> <h1>قلب</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-5   rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-gray-300'>
            <BsFillLungsFill /> <h1>ریه</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4   rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-yellow-600'>
            <GiHeartOrgan /> <h1>قلب</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4   rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-gray-300'>
            <GiBeastEye /> <h1>چشم</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4  rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-yellow-600'>
            <GiBeastEye /> <h1>چشم</h1>
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4 rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-gray-300'>
            <GiBrain /> <h1>مغز</h1> 
          </div>

          <div className=' h-8 md:h-7 sm:h-7 w-36 space-x-4 rounded-sm text-black p-2 text-sm text-bold flex justify-around items-center sm:text-sm   bg-yellow-600'>
            <GiBeastEye /> <h1>چشم</h1> 
          </div>

        </div>
        
    </div>
    </div>
   
   
    
    

</div>
  )
}
export default Menu;