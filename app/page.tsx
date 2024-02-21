'use client'
import React, {useState, useEffect, useRef} from "react";
import Slider from 'react-slick'
import Image, { StaticImageData } from "next/image";
import './globals.css'
import"slick-carousel/slick/slick.css";
import"slick-carousel/slick/slick-theme.css";
import icon from'./images/icon.png'
import location from './images/location.png'
import phone from './images/phone.png'
import time from './images/time.png'
import image from './images/image.jpeg'
import image1 from './images/image1.jpeg'
import image2 from './images/image2.png'
import image3 from './images/image3.webp'
import pharma from './images/pharma.jpeg'
import recep from './images/recep.jpeg'
import lab from './images/lab.jpeg'
import mom from './images/mom.jpeg'
import theatre from './images/theatre.webp'
import ray from './images/ray.webp'
import opd from './images/opd.jpeg'
import dental from './images/dental.webp'
import talk from './images/talk.webp'
import './globals.css'
import { TypeAnimation } from "react-type-animation";
import appo from './images/appo.jpeg'
import ambulance from './images/ambulance.webp'
import team from './images/team.jpeg'
import heart from './images/heart.png'



export default function Home() {
  const Images = [image, image2, image1,image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const slideNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    };
    const interval = setInterval(slideNext, 3000);
    return () => clearInterval(interval);
  }, [Images.length]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const setting ={
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
  }
 
  
  return (
   <div>
    <div className="head" >
      <header className="header-container">
        <div className="header-content">
        <Image className="icon"
        src={icon}
        alt="icon"
        width={100}
        height={100}
        />
        </div>
      </header>
      <h1 className="head1">Liwonde Private Hospital</h1>
      <div className="details">
      <Image className="phone"
      src={phone}
      alt="phone"
      width={20}
      height={20}
      />
      <p className="numbers">Phone Numbers</p>
       <div>
        <p className="num">+265889900000</p>
       </div>
    </div>
    <div className="details">
      <Image className="phone"
      src={time}
      alt="phone"
      width={20}
      height={20}
      />
      <p className="open"> Opening Hours</p>
      <div>
        <p className="num">Everyday 7AM-9PM</p>
       </div>
    </div>
    <div className="details">
      <Image className="phone"
      src={location}
      alt="phone"
      width={20}
      height={20}
      />
      <p className="location">Location</p>
      <div>
        <p className="num">Liwonde, Near <br/> Filling Station</p>
       </div>
    </div>   
    </div>


    <div className="navigation">
    <nav className="header"
    >
            <ul className="services">
                <li className="clicks"><a className="link" href="">Home</a></li>
                <li className="clicks"><a  className="link"href="">Services</a>
                <div  className="dropdown-menu">
                    <ul className="list">
                        <li className="ref"><a className="drop" href="pharmacy">Reception Services</a></li>
                        <li className="ref"><a className="drop" href="pharmacy1">Pharmarcy Services</a></li>
                        <li className="ref"><a  className="drop" href="">Dental Services </a></li>
                        <li className="ref" ><a className="drop" href="">Ambulance Services</a></li>
                        <li className="ref" ><a className="drop" href="">OPD services</a></li>
                        <li className="ref" ><a className="drop" href="">X-Ray services</a></li>
                        <li className="ref" ><a className="drop" href="">Laboratory services</a></li>
                        <li className="ref" ><a className="drop" href="">Martenity services</a></li>
                        <li className="ref" ><a className="drop" href=""></a></li>
                    </ul>
                </div>
                </li>
                <li className="clicks"><a className="link"  href="#">Request Appointment</a></li>
                <li className="clicks"><a className="link" href="">Doctors</a></li>
                <li className="clicks"><a className="link" href="Staff">Staff</a></li>
                <li className="clicks"><a className="link"  href="">Department</a>
                <div  className="dropdown-menu">
                    <ul className="list">
                        <li className="ref"><a className="drop" href="">Dental Department</a></li>
                        <li className="ref"><a className="drop" href="">X-ray and Scanning Departmen</a></li>
                        <li className="ref"><a  className="drop" href="">Laboratory Department </a></li>
                        <li className="ref" ><a className="drop" href="">Ambulance Services</a></li>
                        <li className="ref" ><a className="drop" href="">Pharmacy Department</a></li>
                        <li className="ref" ><a className="drop" href="">Finance Department</a></li>
                    </ul>
                </div>
                </li>
            </ul>
            <div className="button" >
                <a className="bt1" href="#">
                <button className="button " type="submit"> Book Appointment</button>
                </a>
            </div>
        </nav>      
    </div>


    <div className="slider">
    <Slider {...settings} className="slide">
      
        {Images.map((image, index) => (
          <div key={index} >
            <Image className="slide-img"
              src={image}
              alt={`Slider Image ${index + 1}`}
              
              width={1680}
              height={600}  
            />
          </div>
        ))}
      </Slider>
      <h1>Welcome To Liwonde Private Hospital</h1>
      <div className="anime">
        <TypeAnimation 
          sequence={[
            'A Great Place to Recieve Care',
            1000,
            'We Treat, God Heals',
            1000,
            'High quality Services offered'
          ]}
          speed={10}
          style={{fontSize: '2em'}}
          repeat={Infinity}
        />

     <div className="card-wrapper">
     <Slider {...setting} > 
    
    <div className="card">
      <Image
        src={recep}
        alt="avata"
        width={300}
        height={200}
        className="image"
      />
      <h1 className="name1">Reception</h1>
      <div className="desc">
        <p>Reception is the entry point of all the
          services.The reception is managed by team of well 
          trained receptionist who manages our clients. The reception links
          clients to doctor, pharmacist and any other staff
        </p>
      </div>
    </div>
    <div className="card">
      <Image
        src={pharma}
        alt="avata"
        width={300}
        height={200}
        className="image"
      />
      <h1 className="name1">Pharmacy</h1>
      <div className="desc">
        <p>Phamarcy is responsible for storing medicine, selling
          medicine, Provide pharmacetical support to clients. it is
          managed by well trained pharmacists
        </p>
      </div>
    </div>
    <div className="card">
      <Image
        src={theatre}
        alt="avata"
        width={300}
        height={200}
        className="image"
      />
      <h1 className="name1">Theatre</h1>
      <div className="desc">
        <p>The operating theatre has a team of well trained surgeons, 
          doctors and nurses who apply medical expertise to help patients
        </p>
      </div>
    </div>
    <div className="card">
      <Image
        src={mom}
        alt="avata"
        width={300}
        height={200}
        className="image"
      />
      <h1 className="name1">Martenity</h1>
      <div className="desc">
        <p>Recieve well services at the liwonde private hospital
          .Hospital has morden Martenity room with well trained 
          team of mid wives
        </p>
      </div>
    </div>
    <div className="card">
      <Image
        src={lab}
        alt="avata"
        width={300}
        height={200}
        className="image"
      />
      <h1 className="name1">Lab</h1>
      <div className="desc">
        <p>Liwonde private hospital provide the following services,
          full blood count,body fluid diagonosis, Malaria diagonosis
          and many more
        </p>
      </div>
    </div>
    <div className="card">
      <Image
        src={ray}
        alt="avata"
        width={300}
        height={200}
        className="image"
      />
      <h1 className="name1">X-RAY</h1>
      <div className="desc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
          Vitae reprehenderit est accusamus tempore hic, perspiciatis culpa <br /> 
          similique ipsum itaque aspernatur dolorum maxime harum nihil aliquam <br /> 
          tempora consequuntur magni maiores unde.</p>
      </div>
    </div>
    <div className="card">
      <Image
        src={opd}
        alt="avata"
        width={300}
        height={200}
        className="image"
      />
      <h1 className="name1">OPD</h1>
      <div className="desc">
        <p>This is the doctors office each and ever client is warmly Welcome
          to this office and every client is helped accordingly. get any medical
          help from this office
        </p>
      </div>
    </div>
  
</Slider>
      </div>      
   
  


      </div>
      <div>
       
      </div>
    </div>
    <div className="mission">
    <div className="mission-list">
    <h1 className="part">A passion for putting patients first</h1>
    <h3 className="vision">VISION</h3>
      <p className="vis">To be a centre of excellence in the provision of high quality
         heath services in Malawi
      </p>
      <h3 className="vision1">MISSION STATEMENT</h3>
      <p className="vis">We are fully committed to deliver effective, preventive,
         promotive, currative and rehabilitative health services to
         all citizens
      </p>
      <h3 className="vision1">CORE VALUES</h3>
      <ul>
        <li  className="vis1">Commitment</li>
        <li className="vis1">Respect</li>
        <li className="vis1">Hardwork</li>
        <li className="vis1">Integrity</li>
      </ul> 
  </div>
  <div className="mission-picture">
     <Image
      src={talk}
      alt="talking"
      width={600}
      height={445}
      style={{borderRadius:'10px'}}
      className="copy"
     />
  </div> 
    </div>
    <div className="quick">
      <h4 className="quick1">Quick Services</h4>
      <h6 className="quick1">Get fast and reliable quick services
        from Liwonde private hospital
      </h6>
      <section className="section">
      <div className="card">
        <Image
          src={appo}
          alt="avata"
          width={300}
          height={200}
          className="image"
        />
        <h1 className="name1">Quick Appointment</h1>
        <div className="desc">
        <p>Pentients  and clients can quickly request 
            medical in a single click of button and then
            follow easy steps instruction</p>
            <a href="#" className="ambu">
                  <button className="ambulance" type="submit">Book appointment</button>
                 </a>
        </div>
      </div>
      <div className="card">
        <Image
          src={ambulance}
          alt="avata"
          width={300}
          height={200}
          className="image"
        />
        <h1 className="name1">Call Ambulace</h1>
        <div className="desc">
                  <p>
                    Request ambulance services here click the button
                    below  
                  </p>
                  <a href="Ambulance" className="ambu">
                    <button className="ambulance" type="submit">Call Ambulance</button>
                  </a>
        </div> 
      </div>
      <div className="card">
        <Image
          src={team}
          alt="avata"
          width={300}
          height={200}
          className="image"
        />
        <h1 className="name1">Connect With the Team</h1>
        <div className="desc">
              <p>
                Get latest update and news from the 
                various departments of the hospital and
                sign up for medical check ups 
                </p>
                <a href="Signup" className="ambu">
                  <button className="ambulance" type="submit">SignUp</button>
                 </a>
        </div>
      </div>
      </section>
    </div>
    <h4 className="quick1">Trust Our Team Of Medical Specialists</h4>
    <section className="section">
    
    <div className="card">
        <Image
          src={appo}
          alt="avata"
          width={300}
          height={200}
          className="image"
        />
        <h1 className="name1">Mike Wezi</h1>
        <div className="desc">
        <p>Nurse With 10 years Experience</p>
            
        </div>
      </div>
      <div className="card">
        <Image
          src={appo}
          alt="avata"
          width={300}
          height={200}
          className="image"
        />
        <h1 className="name1">Gonjetso Chenjeran</h1>
        <div className="desc">
          <p>Surgeon With 16 years Experience</p>
            
        </div>
      </div>
      <div className="card">
        <Image
          src={appo}
          alt="avata"
          width={300}
          height={200}
          className="image"
        />
        <h1 className="name1">Charles Banda</h1>
        <div className="desc">
         <p>Dentist with 7  years Experience</p>
            
        </div>
      </div>
   </section>
    <div className="img">
    <Image
                  className="reception"
                  src={heart}
                  alt="recept"
                  width={1400}
                  height={250}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    animation: 'slideRight 50s linear infinite',
                  }}
                />
    </div>
    <h1>We Treat, God Heals</h1>
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
    
  );
}
