import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider1() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       
       
       <SwiperSlide>
            <div className="flex w-full justify-center    ">
            <Image height='400' width='400' alt="online ceo"  className="flex w-full justify-center sm:h-44 h-96  md:h-72 rounded-md " src='/images/g5.jpg' />
            </div>
             

  
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="flex w-full justify-center  ">
            <Image height='400' width='400' alt="online ceo"  className="flex w-full justify-center sm:h-44 h-96  md:h-72 rounded-md" src='/images/g2.jpg' />
            </div>
             

  
        </SwiperSlide>
        
        <SwiperSlide>

            <div className="flex w-full justify-center   ">
            <Image height='400' width='400' alt="online ceo"  className="flex w-full justify-center sm:h-44 h-96 md:h-72  rounded-md "src='/images/g3.jpg' />
            </div>
             


        </SwiperSlide>
        <SwiperSlide>

            <div className="flex w-full justify-center  ">
            <Image height='400' width='400' alt="online ceo"  className="flex w-full justify-center sm:h-44 h-96  md:h-72 rounded-md " src='/images/g4.jpg' />
            </div>
      


        </SwiperSlide>
        <SwiperSlide>
            <div className="flex w-full justify-center  ">
            <Image height='400' width='400' alt="online ceo"  className="flex w-full justify-center  h-96 sm:h-44 md:h-72 rounded-md"src='/images/g5.jpg' />
            </div>
             


        </SwiperSlide>
 
       
       
       
       
       
       
      </Swiper>
    </>
  );
}
