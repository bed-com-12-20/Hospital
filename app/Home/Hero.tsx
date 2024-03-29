import Image from "next/image";
import React from 'react';
import Slider from 'react-slick';
import Slider1 from './Slider1.jpeg'
import Slider2 from './Slider2.webp'
import liwonde from './liwonde.jpeg'
import {Typography} from '@material-tailwind/react'
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";


type HeroProps ={ mobile?: boolean};

function Hero({mobile}: HeroProps){

    const sliderImages=[Slider1,Slider2,liwonde];
    const sliderTitles=[
        "Experience Exceptional Healthcare Today!",
        "Discover Our Specialized Medical Services!",
        "Your Path to Health and Wellness Starts Here!",
        "Join Us in Promoting a Healthier Community!",
    ];
    const NextArrow =(props: any)=>{
        const{onClick}=props;
        return(
            <div
            className="p-3 bg-slate-100 hover:text-green-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
            onClick={onClick}
            >
            <PiCaretLeftLight/>
            </div>
        );
    };
    const PrevArrow =(props:any)=>{
        const{onClick} =props;
        return(
            <div
            className="p-3 bg-slate-100 hover:text-green-600 hover-bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
            onClick={onClick}
            >
           <PiCaretRightLight />
            </div>
        );
    };
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 5500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      return(
        <>
        <div className="relative">
           <Slider {...settings}  className="min-h-screen w-full">
            {sliderImages.map((image, index)=>(
                <div 
                key={index}
                className="relative w-full h-full bg-cover bg-no-repeat"
                >
             <Image
               src={image}
               alt={`banner-${index + 1}`}
               className="w-full h-full relative"
                priority={index === 0}
             />
             <div
               className={`${
                mobile ? "text-center" : " pr-2"
              } absolute inset-0 flex items-center justify-center`}
             >
               <div>
               title={sliderTitles[index]}
               </div>
              
               

             </div>
            </div>
            ))}
           </Slider>
        </div>
        </>
      );
}
export default Hero;