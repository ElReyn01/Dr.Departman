
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCards } from 'swiper/modules';

// src={this.props.img4}
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function S() {
  return (
    <div className=" p-8 justify-center   items-center overflow-hidden">
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
    
        <SwiperSlide>
        <div>
            <div className="flex w-full justify-center   sm:w-full md:w-2/3">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center  p-4 " src='/images/s3.jpg' />
            </div>
             
          </div>
  
        </SwiperSlide>
        
        <SwiperSlide>
        <div>
            <div className="flex w-full justify-center h-full  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center  p-4 " src='/images/bgg.jpg' />
            </div>
             
          </div>
  
        </SwiperSlide>
        
        <SwiperSlide>
          <div>
            <div className="flex w-full justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center  p-4 "src='/images/s3.jpg' />
            </div>
             
          </div>

        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="flex w-full justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center  p-4 " src='/images/s2.jpg' />
            </div>
             
          </div>

        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="flex w-full justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center  p-4 "src='/images/s1.jpg' />
            </div>
             
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
}
