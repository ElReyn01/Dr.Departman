import React from 'react'
import Image from 'next/image';
// import Slider from '../components/Slider'
import S from './S';


const Location = () => {
    return (
<div>


<div className='flex flex-col -z-10'>

<div>
<div className='  md:space-y-4 py-8 w-full  flex md:flex-col p-36  sm:flex-col  justify-center items-center'>

{/* slider......................... */}
<div className='w-3/5 felx md:w-full sm:w-full  '>
<div className='flex justify-center items-center -z-40'>
<S/>
</div>
{/* // img1='/images/s1.jpg' img2='/images/s1.jpg' img3='/images/s1.jpg' img4='/images/s1.jpg' img5='/images/s1.jpg' img6='/images/s1.jpg' */}
{/* // img7='/images/s1.jpg' img8='/images/s1.jpg' img9='/images/s1.jpg' img10='/images/s1.jpg' /> */}
</div>
      



{/* location.............................. */}
<div className=' w-2/5 sm:w-2/3 md:w-2/5  h-60 flex justify-center items-center '>
<div className='bg-slate-500  w-4/5'>
<Image className='w-full h-full object-contain ' width='600' height='400' alt='online ceo'
src='/images/loc2.jpg'/>
</div>
</div>
    
</div>
</div>

<div className=' flex flex-col    h-full w-full'>
<p className='text-center md:text-sm  sm:text-sm h-20 py-4 p-6 text-gray-300'>تجربه نوشدارویی از چشمه خرد و تکامل در ساختمانی که در قلب خودبه سوی این مقصود
رهایی از بیماری حرکت میکند</p>

<p className='text-end h-20 py-4 sm:text-sm md:text-sm md:py-8 md:px-4 sm:py-9 sm:px-4 px-20 text-lg text-gray-200 '>پزشکان مجرب</p>
</div>
</div>



   
</div>

    )
}
export default Location;