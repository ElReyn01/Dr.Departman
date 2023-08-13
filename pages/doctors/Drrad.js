import React, { useState } from 'react'
import Image from 'next/image';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Drawer from '../../components/Drawer';
import Link from 'next/link'



const Drrad = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
<div>    
    
    <div className=' flex justify-between items-center h-16  z-50 top-0  bg-gray-900 w-full px-[2%]'>
    <Image className='w-12 object-contain ' width='100' height='100'  alt='online ceo'
             src='/images/logo.png'/>


     

        {/*Header-drawer............................................................................*/}
           <div className='flex items-center space-x-5'>
              <input type='text'   className='border-2 border-gray-500 w-96 sm:w-52 h-9 md:h-8 sm:h-7  bg-[#0b0c12e1] text-gray-200 text-right sm:text-xs md:text-md p-2 pt-1
                rounded-md ' placeholder='جستجو' >
               </input>
            
               <button onClick={handleOpen}>
                <RiMenuUnfoldFill className='text-gray-300 text-4xl sm:text-3xl '/>
               </button>
                  <Drawer isOpen={isOpen} onClose={handleClose} />
           </div>


    </div>





    <div className=' w-full min-h-screen flex flex-col py-10 md:py-5 px-[15%] md:px-[10%] sm:px-[6%] bg-gray-900 '>
  {/*Aks doctor.......................................................................................*/}

      <div className=' w-full h-96 md:h-72 sm:h-52 flex bg-indigo-900 rounded-md '>
          <Image className='w-full h-full' src='/images/drpng3.png' width='400' height='600' alt='OnlineCeo'/>
      {/*.............................................................................................*/}
           <div className=' h-full  w-full'>

              <div className=' flex h-2/5 justify-end  items-center space-x-5 px-3'>
                  <Image className='w-16 h-16 md:w-12 md:h-12 sm:w-8 sm:h-8  ' src='/images/heart1.gif' width='200' height='200' alt='OnlineCeo'/>
                  <p className='text-2xl md:text-2xl sm:text-sm text-right text-gray-300 text-bold'>دکتر علی راد</p>
           
              </div>
              <div className=' flex h-1/5 justify-end  items-center space-x-5 px-3'>
               <p className='text-xl md:text-l sm:text-xs text-white text-bold'>4.9</p>


              </div>
              <div className='flex flex-col justify-start items-end py-3 space-y-2 px-3 h-2/5 '>
                <p className='text-l md:text-sm sm:text-xs text-right text-gray-300 text-bold' >فلوشیپ اقدامات مداخله ای قلب و عروق </p>
                <p className='text-l md:text-sm sm:text-xs text-right text-gray-300 text-bold' > متخصص قلب و عروق </p>
              </div>
           </div>
      </div>

  {/*tedad bimar - sabege ............................................................................*/}     
      <div className='flex justify-arounded py-4 space-x-7 w-full h-28 md:h-24'>
        <div  className='flex flex-col justify-center items-center bg-green-400 w-full h-full rounded-md'>
          <p className='text-xl md:text-l sm:text-sm text-red-700 text-bold' >+5000</p>
          <p className='text-xl md:text-l sm:text-sm text-gray-700 text-bold' >بیمار</p>     
        </div>
        <div className='flex flex-col justify-center items-center bg-pink-400 w-full h-full rounded-md'>
          <p className='text-xl md:text-l sm:text-sm text-red-700 text-bold' >+6</p>
          <p className='text-xl md:text-l sm:text-sm text-gray-700 text-bold' >سال سابقه</p>    
        </div>
      </div>



  {/*Bio grafi............................................................................*/}
         
      <div className='flex flex-col justify-start items-end space-y-7 w-full py-2 h-52'>
        <p className='text-2xl md:text-xl sm:text-md text-cyan-500 text-bold' >بیوگرافی </p>
        <p className='text-l md:text-sm sm:text-xs text-right text-gray-300 text-bold' > فارغ تحصیل رشته اینترونشنال کاردیولوزی در سال ۱۳۹۱ از دانشگاه علوم پزشکی دانشگاه شهید بهشتی دورانپزشکی عمومی در دانشگاه شهید بهشتی و دوره دستیاری در دانشگاه علوم پزشکی اصفهان گذرانده ام وی در حال حاضر بیمارستان های غرضی و مرکز شهر سعدی مشغول به کار و ارایه خدمات می باشد </p>
      </div> 



  {/*daryaft nobat............................................................................*/}

    <Link href='/doctors/DrRadNobat' >     
      <button className='flex justify-center items-center bg-cyan-600 h-20 sm:h-16 md:h-16  w-full rounded-md'>
        <p className='text-2xl md:text-xl sm:text-sm text-gray-300 text-bold'>دریافت نوبت</p>
      </button>
    </Link>
   
    </div> 
    




  

    
</div>  
   
   
   
   
   
   
   
   )
   
   
   
}

export default Drrad;