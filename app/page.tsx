'use client'
import React, {useState, useEffect} from "react";

import Slider from 'react-slick'
import Image from "next/image";
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
    autoplaySpeed: 3000,
  };
  return (
   <div>
    <div className="head" 
         >
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
                        <li className="ref"><a className="drop" href="">Reception Services</a></li>
                        <li className="ref"><a className="drop" href="">Pharmarcy Services</a></li>
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
                <li className="clicks"><a className="link" href="">Staff</a></li>
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
    <Slider {...settings}>
      
        {Images.map((image, index) => (
          <div key={index} >
            <Image
              src={image}
              alt={`Slider Image ${index + 1}`}
              
              width={1920}
              height={400}  
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
          speed={50}
          style={{fontSize: '2em'}}
          repeat={Infinity}
        />
      </div>
      <div>
       <section className="section">
      <div className="box-container">
              <div className="top-row">
              <div className="flexbox">
              <Image
                  className="reception"
                  src={recep}
                  alt="recept"
                  width={330}
                  height={150}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>Reception</h5>
                <p>Reception is the entry  point of all 
                    the services. The reception is managed by 
                    team of well trained receptionis who manages 
                    our clients. The reception links clients to
                     doctor, phamarcist and any other staff

                </p>
              </div>
                <div className="flexbox">
                <Image
                  className="reception"
                  src={pharma}
                  alt="recept"
                  width={330}
                  height={150}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>Pharmacy</h5>
                <p>pharmacy  is responsibe for
                    storing medicine, selling medicine
                    provide pharmacetical support to 
                    clients. it is managed by well trained
                    pharmacist
               </p>
                </div>
                <div className="flexbox">
                <Image
                  className="reception"
                  src={mom}
                  alt="recept"
                  width={330}
                  height={140}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>Martenity</h5>
                <p>Receive well managed services at the 
                    Liwonde private hospital. Hospital 
                    has morden martenity
                    romm with well trained team of mid wives 
                </p>
                </div>
                <div className="flexbox">
                  <Image
                  className="reception"
                  src={opd}
                  alt="recept"
                  width={330}
                  height={140}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>OPD</h5>
                <p>This is doctors office each and every
                    client is warmly welcome to this office
                    and every client is helped accordingly.
                    get any medical help from this office
                 </p>
                </div>
              </div>

              <div className="bottom-row">
                <div className="flexbox"> <Image
                  className="reception"
                  src={theatre}
                  alt="recept"
                  width={330}
                  height={140}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>Theatre</h5>
                <p>The operating theatre has a team
                    of well trained surgeons, doctors and 
                    nurses who apply medical expertise to
                    help petients
                    </p>
                  </div>
                <div className="flexbox"> <Image
                  className="reception"
                  src={lab}
                  alt="recept"
                  width={330}
                  height={140}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>Labaratory</h5>
                <p>Liwonde private hospital provide the
                    following services, full blood count(
                    FBC) body fluid diogonisi malaria 
                    diogonosis
                   </p>
                 </div>
                <div className="flexbox"> <Image
                  className="reception"
                  src={ray}
                  alt="recept"
                  width={330}
                  height={140}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>X-Ray</h5>
                <p>Liwonde Private Hospital offers an essential X-ray medical service,
                   employing advanced technology to capture detailed images of internal 
                   structures for accurate diagnosis and monitoring 
                   of various medical conditions.</p></div>
                <div className="flexbox"> <Image
                  className="reception"
                  src={dental}
                  alt="recept"
                  width={330}
                  height={140}
                  style={{padding:'10px', borderRadius:'10px' }}
                />
                <h5>Dental</h5>
                <p>Liwonde private hosipital has high
                   skilled specialist in dental surgery
                   </p>
                   </div>
              </div>
</div>
      </section>
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
     
     />
  </div>
      
      
    </div>
    <div className="quick">
      <h4 className="quick1">Quick Services</h4>
      <h6 className="quick1">Get fast and reliable quick services
        from Liwonde private hospital
      </h6>
      <section className="section">
        <div className="box-container">
          <div className="flexbox">box1</div>
          <div className="flexbox">box2</div>
          <div className="flexbox">box3</div>
        </div>

      </section>
    </div>
    <div className="team">
    <h4 className="quick1">Trust Our Team Of Medical Specialists</h4>
    <div className="box-container">
          <div className="flexbox">box1</div>
          <div className="flexbox">box2</div>
          <div className="flexbox">box3</div>
        </div>
    </div>
    <div className="img">
     mtima
     
    </div>
    <div className="footer">
      phazi
    </div>

   </div>  
  );
}
