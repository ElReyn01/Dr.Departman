
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
//JA Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCards } from 'swiper/modules';

// src={this.props.img4}
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function Slider1() {
  return (
    <div className="   md:p-0  sm:px-[12%] overflow-hidden">
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
    
        <SwiperSlide>
        <div>2
            <div className="flex w-full justify-center    ">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center sm:h-56 h-80 p-4 md:h-5 " src='/images/g5.jpg' />
            </div>
             
          </div>
  
        </SwiperSlide>
        
        <SwiperSlide>
        <div>
            <div className="flex w-full justify-center h-full   ">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center sm:h-56 h-80 p-4 md:h-60 " src='/images/g2.jpg' />
            </div>
             
          </div>
  
        </SwiperSlide>
        
        <SwiperSlide>
          <div>
            <div className="flex w-full justify-center   ">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center sm:h-56 h-80 md:h-60  p-4 "src='/images/g3.jpg' />
            </div>
             
          </div>

        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="flex w-full justify-center  ">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center sm:h-56 h-80 p-4 md:h-60 " src='/images/g4.jpg' />
            </div>
             
          </div>

        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="flex w-full justify-center  ">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center p-4 h-80 sm:h-56 md:h-60 "src='/images/g5.jpg' />
            </div>
             
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
}
