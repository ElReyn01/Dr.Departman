import React from 'react'
import Image from 'next/image';
// import Slider from '../components/Slider'
import Slider1 from './Slider1';
const Location = () => {
    return (
<div>
    <div className='flex flex-col -z-10 px-32 md:px-[10%] sm:px-[13%]'>




    {/* slider......................... */}
        <div >
            <div className='  md:space-y-10 md:space-x-0 space-x-28 sm:space-x-0 py-6 w-full flex md:flex-col sm:flex-col justify-center items-center'>

                <div className='w-96 md:w-ful felx  justify-center item-center  '>
                <Slider1/>
                </div>
                {/* // img1='/images/s1.jpg' img2='/images/s1.jpg' img3='/images/s1.jpg' img4='/images/s1.jpg' img5='/images/s1.jpg' img6='/images/s1.jpg' */}
                {/* // img7='/images/s1.jpg' img8='/images/s1.jpg' img9='/images/s1.jpg' img10='/images/s1.jpg' /> */}
        



    {/* location.............................. */}
        <div className='  flex  justify-center items-center '>
            <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!12!1m3!1d387.9585538483273!2d45.075308101618724!3d37.53135813739353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400553e9a50d4db9%3A0xd560db1a9059ff21!2z2LTYsdqp2Kog2K_Yp9mG2LQg2KjZhtuM2KfZhiDZhdiv24zYsSDYotmG2YTYp9uM2YY!5e0!3m2!1sen!2s!4v1690730044629!5m2!1sen!2s" 
                 width="300" height="200" className="sm:px-[7%] sm:h-40 md:h-56    h-72 " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>

        </div>

    </div>


    {/* neveshte zire slider.............................. */}
        <div className=' flex flex-col    h-full w-full'>
            <p className='text-center md:text-xs  sm:text-xs h-20   text-gray-300'>تجربه نوشدارویی از چشمه خرد و تکامل در ساختمانی که در قلب خودبه سوی این مقصود
            رهایی از بیماری حرکت میکند</p>
                
        
            </div>
        </div>



   
</div>

    )
}
export default Location;