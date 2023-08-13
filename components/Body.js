import React from 'react'
import Image from 'next/image';
// import Test from '@/components/page1/Test';
import Link from 'next/link'
import {BsArrowRightShort} from 'react-icons/bs';
import Slider1 from './Slider1';


const Body = () => {
  return (
<div>

      <div>
    {/* background asli..................................................................... */}
          <div className='fixed top-0 -z-10'>
            <Image className='fixed top-0 w-full min-h-screen object-cover' 
            width='1200' height='1200'alt='online ceo'src='/images/s5.jpg'/>
          </div>


    {/* box vorod........................................................................ */}
        <div className='flex w-full  pt-96 pb-36 justify-center items-center '>
              <Link href='/dr_page2' >
              <button type="button" className='flex z-10 justify-between items-center outline outline-1 outline-cyan-500 bg-[#0e113452]  px-3 w-60 rounded-md ' >

              <p className='text-xl  font-bold text-gray-300' >Enter </p>

              <Image className='w-10 object-contain ' width='100' alt='online ceo'
              height='100' src='/images/icon.gif'/> 
              </button>
              </Link>
        </div>          
      </div>



  
    <div className='flex flex-col -z-10 px-[10%] '>     
    <div className=' w-full flex justify-between md:justify-around items-center py-8 sm:flex-col sm:space-y-8'>
    {/* slider............................................................................... */}

            <div className='w-2/3 sm:w-full felx  justify-center items-center outline outline-1 outline-cyan-500 rounded-md    '>
              <Slider1/>
            </div>
            {/* // img1='/images/s1.jpg' img2='/images/s1.jpg' img3='/images/s1.jpg' img4='/images/s1.jpg' img5='/images/s1.jpg' img6='/images/s1.jpg' */}
            {/* // img7='/images/s1.jpg' img8='/images/s1.jpg' img9='/images/s1.jpg' img10='/images/s1.jpg' /> */}




    {/* location.............................................................................. */}

            <div className='  flex justify-end items-center rounded-md'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!12!1m3!1d387.9585538483273!2d45.075308101618724!3d37.53135813739353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400553e9a50d4db9%3A0xd560db1a9059ff21!2z2LTYsdqp2Kog2K_Yp9mG2LQg2KjZhtuM2KfZhiDZhdiv24zYsSDYotmG2YTYp9uM2YY!5e0!3m2!1sen!2s!4v1690730044629!5m2!1sen!2s" 
              width="300" height="200" className=" outline outline-1 outline-cyan-500  w-[80%] sm:w-full 
              sm:h-44 md:h-72 h-96 brightness-50 hover:brightness-100 rounded-md delay-150  " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

      </div>
      </div>


    {/* neveshte zire slider.................................................................. */}
    
            <div className=' py-3  px-[10%] h-full w-full'>
              <p className='text-right md:text-sm  sm:text-xs h-20  text-lg text-gray-300'>تجربه نوشدارویی از چشمه خرد و تکامل در ساختمانی که در قلب خودبه سوی این مقصود
              رهایی از بیماری حرکت میکند</p>
            </div>




   


  

</div>
  )
}

export default Body