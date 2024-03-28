'use client'

import Image, { StaticImageData } from "next/image";
import heart from "../images/heart.png";
import facebook from '../images/Rounded_Facebook.webp'
import Twitter from '../images/Twitter.webp'
import whatsapp from '../images/whatsaap.webp'
import linkedin from '../images/linkedIn.webp'
import instagram from '../images/instagram.webp'
import './Styles/bottomSection.css'
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const stats = [
  { id: 1, name: 'satisfied patients', value: '15,000+' },
  { id: 2, name: 'Succes rate', value: '98%' },
  { id: 3, name: 'Years In Services', value: '25,000+' },
]



export default function BottomSection(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  
    return (<>      
        
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            
           <h1 className="mt-10 text-1xl  text-center font-normal tracking-tight text-gray-900 sm:text-4xl mt-30">
            Liwonde Medical Clinic Statistics
           </h1>
           <h3 className="mt-4 text-xl  text-center text-gray-500"> Discover the impressive Statistics that showcase our <br />
             commitment to exllence and dedicattion to our patients
              

            
           </h3>
      <div className="bg-gray py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <div className="img">
          <Image
            className="reception"
            src={heart}
            alt="recept"
            width={1400}
            height={250}
            style={{
              padding: "10px",
              borderRadius: "10px",
              animation: 'slideRight 50s linear infinite',
            }}
          />
        </div>
        </motion.div></div>
       
  </>)
}