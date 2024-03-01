import React from "react";
import './style.css'
import Image from "next/image";

import icon from '../images/icon.png'
import phone from '../images/phone.png'
import time from '../images/time.png'
import location from '../images/location.png'
import amb from '../images/amb.jpeg'
import speed from '../images/speed.webp'
import Navbar from "@/componets/navbar";


export default function Ambulance(){
    return(
        <div>
              
          <Navbar/>
          <section id="sector">
            
            <h1 id="lance">Ambulance <br/> services</h1>
            
            
           <p className="ambul">Request fast and reliable ambulance services from Liwonde private 
               hospital. <br />The ambulance is available any time within reach</p>

        <h1 id="lan">Ambulance Contact Details</h1>
            <p className="ambula">follow simple instructions to call ambulance from liwonde
                private hospital
            </p>
            <p className="ambula">follow simple instructions to call ambulance from liwonde
                private hospital
            </p>
            <p className="ambula">follow simple instructions to call ambulance from liwonde
                private hospital
            </p>
            
          </section>
          <h1 id="lane">Compassionate Care, Reliably & Efficiently Delivered</h1>
          <p className="ambulan">Our goal at liwonde private clinic in terms of ambulance services
             is to provide maximun, timely transport care to each and every 
             patient. It managed by team with significant experience in the 
             ambulance and heath care field. the aim is to provide first rate
             services to all the patients under our care and uphold our values
             by delivering expert medical assistance with Compassion in every case.
             Driven by our highly trained and considarate staff, we strive to
             exception services that lead to positive outcomes for our patients
          </p>
          <div className="categories">
           
         
            <div className="category">
               <Image
               className="ambulance1"
               src={amb}
               alt="ambulance"
               width={300}
               height={150}
               />
               <div className="category1">
                <h1>Non-Emergency Medical Transport</h1>
               </div>
               <div className="category2">
                Liwonde ambulance services to health care or Treatment
                facilities, hospital transfers and patients discharge
               </div>
            </div>
            <div className="category3">
               <Image
               className="ambulance1"
               src={speed}
               alt="ambulance"
               width={300}
               height={150}
               />
               <div className="category1">
                <h1>Emergency Medical Transport</h1>
               </div>
               <div className="category2">
                Liwonde ambulance services is always prepared with Emergency
                Ambulances for individuals who require very fast and emergency
                Treatment
               </div>
            </div>
            

          </div>
         
           
          <div className="circle">
          <h1>Steps to follow</h1>
          <div className="steps">
          <div className="step"><span>1</span></div>
                <div className="line"></div>
                <div className="step1"><span>2</span></div>
                <div className="line1"></div>
                <div className="step2"><span>3</span></div>
          </div>
          <div className="container">
          <div className="step-content">
          <h1 className="content1">Contacts</h1>
          <div  className="content">
          Call the driver of the Ambulance using <br />
          the following numbers <br/>
          </div>
          <div className="content">
          <Image className="phone"
                    src={phone}
                    alt="phone"
                    width={20}
                    height={20}
                    /> 0888597087 <br/>
           <Image className="phone"
                    src={phone}
                    alt="phone"
                    width={20}
                    height={20}
                    /> 09999408663
          </div> 
         </div>
         <div className="step-content1">
          <h1 className="content1">Location</h1>
          <div  className="content">
          Provide location details where 
          the ambulance services is 
          required. if possible estimate the distance
          </div>
         
         </div>
         <div className="step-content2">
          <h1 className="content1">Response</h1>
          <div  className="content">
          Exchange feedback with the driver, know his where abouts
          estmated time travel towards your location
           <br/>
          </div> 
         </div>
          </div>
          </div>
            
            <h1 className="part1">We Treat, God Heals</h1>
                 <div className="footer">
                    <div className="container">
                        <div className="row">
                        <div className="footer-col">
                        <Image className="icon1"
                                src={icon}
                                alt="icon"
                                width={150}
                                height={150}
                                style={{ marginRight:'10px'}}
                                />
                            </div>
                            <div className="footer-col">
                                <h4>Important Links</h4>
                                <ul>
                                <li>
                                        <a href="#"  id="ttt">Book Appointment</a>
                                    </li>
                                    <li>
                                        <a href="#"  id="ttt">Team of Developers</a>
                                    </li>
                                    <li>
                                        <a href="#" id="ttt">Location</a>
                                    </li>
                                    <li>
                                        <a href="#" id="ttt">About Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <p id="ttt1">Call: 0998052417</p>
                                    </li>
                                    <li>
                                      <p id="ttt1">Email: LiwondePvthospital@gmail.com</p> 
                                    </li>
                                    <li>
                                        <p id="ttt1">Physical Address</p>
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Map</h4>
                                <iframe
                                    title="Google Map"
                                    width="300"
                                    height="200"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                >

                                </iframe>
                                
                            </div>
                        </div>
                    </div>
                    <div >
                        <p id="private">@Liwonde Private Hospital 2024</p>
                    </div>
                 </div>
        </div>
    )
}