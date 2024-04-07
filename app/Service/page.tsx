'use client'

import "./style.css";
import Header from "@/componets/navbar";


import { motion, useInView, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function Herosection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <Header/>
      {/* sliding images */}
      <section id="welcome-section">
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
            className=""
          >
            <h1 className="hospital-name">
                Explore wide range of services <br />
                offered at liwonde Medical clinic
            </h1>
            
          </motion.div>
        </div>
      </section>
      <div className="our-services">
      <h3 className='questions'>Our Key Services
   </h3>
      <div id='cards'>
      <div id='faq-cards'>

          <p className='payment'>Pharmacy</p>
          <p className='answer'>
          </p>
      </div>
      <div id='faq-cards'>

          <p className='payment'>ART</p>
          <p className='answer'> 
          </p>
      </div>
      <div id='faq-cards'>

          <p className='payment'>OPD</p>
          <p className='answer'> 
          </p>
      </div>

  </div>      
     </div>
    </>
  );
}
