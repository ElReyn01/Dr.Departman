//slider dg baraye test

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Image from 'next/image';
import Slider from "react-slick";


export default class X extends Component {

  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      
      <div className="w-4/6 justify-center  items-center overflow-hidden">
        <Slider {...settings}>
          <div >
            <div className="flex w-1/2 justify-center sm:w-full md:w-2/3 items-center ">
            </div>
          
          </div>
         
          <div>
            <div className="flex w-1/2 justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt="online ceo"  className="flex w-full justify-center  p-4 " src={this.props.img2} />
            </div>
             
          </div>

          <div>
            <div className="flex w-1/2 justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt='online ceo' className="flex w-full justify-center  p-4 " src={this.props.img3}  />
            </div>
         
          </div>

          <div>
            <div className="flex w-1/2 justify-center   sm:w-full md:w-2/3 ">
            <Image height='400' width='600' alt='online ceo' className="flex w-full justify-center p-4  " src={this.props.img4}  />
            </div>
             
          </div>

          
          <div>
            <div className="flex w-1/2 justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt='online ceo' className="flex w-full justify-center  p-4 " src={this.props.img5}  />
            </div>
        
          </div>
         
         
          <div>
            <div className="flex w-1/2 justify-center sm:w-full md:w-2/3 ">
            <Image height='400' width='600'  alt='online ceo' className="flex w-full justify-center  p-4 " src={this.props.img6}  />
            </div>
             
          </div>


          <div>
            <div className="flex w-1/2 justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt='online ceo'  className="flex  w-full justify-center  p-4 " src={this.props.img7}  />
            </div>

          </div>


          <div>
            <div className="flex w-1/2 justify-center  sm:w-full md:w-2/3">
            <Image height='400' width='600' alt='online ceo' className="flex w-full justify-center  p-4 " src={this.props.img8}  />
            </div>
             
          </div>

          <div>
            <div className="flex w-1/2 justify-center sm:w-full md:w-2/3 ">
            <Image height='400' width='600' alt='online ceo' className="flex w-full justify-center  p-4 " src={this.props.img9} />
            </div>
             
          </div>

          <div>
            <div className="flex w-1/2  justify-center sm:w-full md:w-2/3">
            <Image height='400' width='600' alt='online ceo' className="flex w-full justify-center  p-4 " src={this.props.img10}  />
            </div>
         
          </div>


        </Slider>
      </div>
      
    );
  }
}