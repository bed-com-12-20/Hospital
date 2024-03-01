'use client'

import React, {useState} from "react"
import './style.css'
import Image from "next/image"
import pharma from '../images/pharma.jpeg'
import icon from '../images/icon.png'
import location from '../images/location.png'
import phone from '../images/phone.png'
import time from '../images/time.png'
import Navbar from "@/componets/navbar"
import Footer from "@/componets/footer"

export default function Pharmacy(){
    // usestates
    return(
        <div>
           <Navbar/>
      <div>
        <Image
         src={pharma}
         alt="pharma"
         width={1680}
        height={600}  
        />
      </div>
      <div className="mission">
      <div className="mission-picture">
                <Image
                src={icon}
                alt="talking"
                width={370}
                height={450}
                style={{borderRadius:'10px'}}
                />
            </div> 
           
        <div className="mission-list">
            <h1 className="part">Pharmacy Service</h1>

            <h3 className="vision">Liwonde hospital Pharmacy</h3>
            <h3 className="vision">Core Services</h3>
            <p className="vis">recieve great medical guidance from well trained pharmacist of
                Liwonde hospital our pharmacy services include, selling medicine
                from the store or you can buy directly buy filling form below, medical
                prescription, medical nutrition guidance and medical check ups
            </p>
            <h3 className="vision1">Vision Statement</h3>
            
            
            <h3 className="vision1">Order Medicine Online</h3>
            <p className="vis">please follow the instruction below to order medicine you will 
                    receive an email or sms confirming your and together with price.
                    you can come and collect at the reception</p>
        </div>
            </div>
            
                <h1 className="part1">We Treat, God Heals</h1>
               <Footer/>

        </div>
    )
}