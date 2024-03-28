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
          ><h1>We Treat, God Heals</h1>
             <section id="social-media">
          <h1 className="doctor">Stay Connected</h1>
  
          <p className="contact">
            follow Liwonde private hospital on social media platforms <br /> and
            get latest, news and updates
          </p>
          <div className="social-icon">
            <a href="">
            <Image
              
               src={facebook}
               alt=""
               width={40}
               height={40}
              />
            </a>
            <a href="">
            <Image

               src={Twitter}
               alt=""
               width={40}
               height={40}
               className="twitter"
              />
            </a>
            <a href="">
            <Image

               src={whatsapp}
               alt=""
               width={40}
               height={40}
               className="twitter"
              />
            </a>
            <a href="">
            <Image
               src={linkedin}
               alt=""
               width={40}
               height={40}
               className="twitter"
              />
            </a>
            <a href="">
            <Image
               src={instagram}
               alt=""
               width={40}
               height={40}
               className="twitter"
              />
            </a>
          </div>
        </section></motion.div></div>
       
  </>)
}