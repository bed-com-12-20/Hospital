'use client'

import './Styles/faq.css'

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";



export default function FAQ(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
    return (<>
      <div  ref={ref} style={{ position: "relative", overflow: "hidden" }}>
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

<section id='asked-section'>
  <div>
  <h1 className='faq'>Freqeuntly Asked Questions</h1>
   <h3 className='questions'>Get all the satistifactory answers about all the Questions that 
    you have in mind
   </h3>
  </div>
  <div id='cards'>
      <div id='faq-cards'>
          <p>How do you pay at Liwonde Medical clinic?</p>
      </div>
      <div id='faq-cards'>
        
      </div>
      <div id='faq-cards'>
        
      </div>

  </div>
  
</section>
</motion.div>
            </div>
   </>)
}