'use client'

import './Styles/faq.css'
import money from '../images/money.jpeg'
import heath from '../images/heath2.png'
import place from '../images/place.png'

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from 'next/image';



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
       <Image src={money} alt='' width={70} height={70} className='money'/>
          <p className='payment'>How do you pay at Liwonde Medical clinic?</p>
          <p className='answer'>liwonde medical clinic  offers wide range 
             of payment methods including cash, digital payments such as Mpamba,
             Airtel Money, Banks and organisation
          </p>
      </div>
      <div id='faq-cards'>
      <Image src={heath} alt='' width={90} height={90} className='money'/>
          <p className='payment'>Where to access services of liwonde medical clinic?</p>
          <p className='answer'> You can access services of the liwonde medical clinic
             by directly visiting us in liwonde township of by booking appointment
             via the links provided throughout the website
          </p>
      </div>
      <div id='faq-cards'>
      <Image src={place} alt='' width={70} height={70} className='money'/>
          <p className='payment'>Where is  Liwonde Medical clinic located?</p>
          <p className='answer'> follow the map in the quick service section
             to get the precise location of the liwonde medical clinic
          </p>
      </div>

  </div>
  
</section>
</motion.div>
            </div>
   </>)
}