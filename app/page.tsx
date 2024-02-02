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
            <Image
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
        <section>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
            Vitae reprehenderit est accusamus tempore hic, perspiciatis culpa <br /> 
            similique ipsum itaque aspernatur dolorum maxime harum nihil aliquam <br /> 
            tempora consequuntur magni maiores unde.</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
            Vitae reprehenderit est accusamus tempore hic, perspiciatis culpa <br /> 
            similique ipsum itaque aspernatur dolorum maxime harum nihil aliquam <br /> 
            tempora consequuntur magni maiores unde.</p>
        </div>
      </div>
    
  </Slider>
</section>

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
          <div className="flexbox">
          <Image
                  className="reception"
                  src={appo}
                  alt="recept"
                  width={330}
                  height={150}
                  style={{ borderRadius:'10px', paddingTop:'10px'}}
                />
                <h5>Quick Appointment</h5>
                <p>Pentients  and clients can quickly request 
                    medical in a single click of button and then
                    follow easy steps instruction</p>
          </div>
          <div className="flexbox">
          <Image
                  className="reception"
                  src={ambulance}
                  alt="recept"
                  width={330}
                  height={150}
                  style={{ borderRadius:'10px', paddingTop:'10px'}}
                />
                <h5>Call Ambulance</h5>
                <p>
                   Request ambulance services here click the button
                   below  
                 </p>
                 <a href="#" className="ambu">
                  <button className="ambulance" type="submit">Call Ambulance</button>
                 </a>
          </div>
          <div className="flexbox">
          <Image
                  className="reception"
                  src={team}
                  alt="recept"
                  width={330}
                  height={150}
                  style={{ borderRadius:'10px', paddingTop:'10px'}}
                />
                <h5>Connect With The Team</h5>
                <p>
                Get latest update and news from the 
                various departments of the hospital and
                sign up for medical check ups 
                </p>
                <a href="#" className="ambu">
                  <button className="ambulance" type="submit">SignUp</button>
                 </a>
          </div>
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
     <section className="section1">
     <Image className="icon1"
        src={icon}
        alt="icon"
        width={150}
        height={150}
        style={{ marginRight:'10px'}}
        />
        <h1 className="footer">Important Links
          <div className="important">
            <ul>
              <li className="sam"><a href="#" className="sam">Team Of Developers</a></li>
              <li className="sam"><a href="#" className="sam">Book a Appointment</a></li>
              <li className="sam"><a href="#" className="sam"></a>Location Of Hospital</li>
              <li className="sam"><a href="#" className="sam">About The Hospital</a></li>
            </ul>
          </div> 
        </h1>
        <h1 className="footer">Contact Us
          <div className="important">
            <ul>
              <li className="sam">Call: 0990000000</li>
              <li className="sam">Email: liwonde@gmail.com</li>
              <li className="sam">Address: Liwonde, near pu</li>
              <li className="sam"></li>
            </ul> 
          </div> 
        </h1>
        <h1 className="footer1">Map
          <div className="important">
          <iframe
              title="Google Map"
              width="428"
              height="220"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </div> 
        </h1>
     </section>
   </div> 
    
  );
}
