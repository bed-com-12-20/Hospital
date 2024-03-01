// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import Image, { StaticImageData } from "next/image";
// import "../globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import icon from "../images/icon.png";
// import location from "../images/location.png";
// import phone from "../images/phone.png";
// import time from "../images/time.png";
// import image from "../images/image.jpeg";
// import image1 from "../images/image1.jpeg";
// import image2 from "../images/image2.png";
// import image3 from "../images/image3.webp";
// import pharma from "../images/pharma.jpeg";
// import recep from "../images/recep.jpeg";
// import opd from "../images/opd.jpeg";
// // import './globals.css'
// import { TypeAnimation } from "react-type-animation";
// import ambulance from "../images/ambulance.webp";
// import heart from "../images/heart.png";
// import old from "../images/old.webp";
// import make from "../images/make.png";
// import map from "../images/map.jpeg";
// import female from "../images/Ambulance.png";
// import female2 from "../images/female2.webp";
// import doctor from "../images/doctor1.webp";
// import doctor2 from "../images/doctor2.webp";
// import liwonde from "../images/liwonde.jpeg";

// export default function Home() {
//   const [seeMoreExpand, setSeeMoreExpand] = useState({
//     display: "none",
//     height: "0px",
//   });

//   const [hideButton, setHideButton] = useState({
//     display: "flex",
//   });

//   const handleExpand = () => {
//     setSeeMoreExpand({
//       display: "flex",
//       height: "fit-content",
//     });

//     setHideButton({
//       display: "none",
//     });
//   };

//   // slider for images and the card

//   const Images = [image, image2, image1, image3];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     const slideNext = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
//     };
//     const interval = setInterval(slideNext, 3000);
//     return () => clearInterval(interval);
//   }, [Images.length]);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 7000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div>
//       {/* head container logo, phone contacts, etc*/}
//       <div className="head">
//         <header className="header-container">
//           <div className="header-content">
//             <Image
//               className="icon"
//               src={icon}
//               alt="icon"
//               width={100}
//               height={100}
//             />
//           </div>
//         </header>
//         <h1 className="head1">Liwonde Private Hospital</h1>
//         <div className="details">
//           <Image
//             className="phone"
//             src={phone}
//             alt="phone"
//             width={20}
//             height={20}
//           />
//           <p className="numbers">Phone Numbers</p>
//           <div>
//             <p className="num">+265889900000</p>
//           </div>
//         </div>
//         <div className="details">
//           <Image
//             className="phone"
//             src={time}
//             alt="phone"
//             width={20}
//             height={20}
//           />
//           <p className="open"> Opening Hours</p>
//           <div>
//             <p className="num">Everyday 7AM-9PM</p>
//           </div>
//         </div>
//         <div className="details">
//           <Image
//             className="phone"
//             src={location}
//             alt="phone"
//             width={20}
//             height={20}
//           />
//           <p className="location">Location</p>
//           <div>
//             <p className="num">
//               Liwonde, Near <br /> Filling Station
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* navigation bar */}
//       <div className="navigation">
//         <nav className="header">
//           <ul className="services">
//             <li className="clicks">
//               <a className="link" href="">
//                 Home
//               </a>
//             </li>
//             <li className="clicks">
//               <a className="link" href="">
//                 Services
//               </a>
//               <div className="dropdown-menu">
//                 <ul className="list">
//                   <li className="ref">
//                     <a className="drop" href="pharmacy">
//                       Reception Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="pharmacy1">
//                       Pharmarcy Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Dental Services{" "}
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Ambulance Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       OPD services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       X-Ray services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Laboratory services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Martenity services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href=""></a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li className="clicks">
//               <a className="link" href="#">
//                 Request Appointment
//               </a>
//             </li>
//             <li className="clicks">
//               <a className="link" href="">
//                 Doctors
//               </a>
//             </li>
//             <li className="clicks">
//               <a className="link" href="Staff">
//                 Staff
//               </a>
//             </li>
//             <li className="clicks">
//               <a className="link" href="">
//                 Department
//               </a>
//               <div className="dropdown-menu">
//                 <ul className="list">
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Dental Department
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       X-ray and Scanning Departmen
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Laboratory Department{" "}
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Ambulance Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Pharmacy Department
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Finance Department
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//           <div className="button">
//             <a className="bt1" href="#">
//               <button className="button " type="submit">
//                 {" "}
//                 Book Appointment
//               </button>
//             </a>
//           </div>
//         </nav>
//       </div>

//       {/* sliding images */}
//       <section id="welcome-section">
//         <h1 className="hospital-name">
//           <span className="span">|</span>Welcome Liwonde Private <br />
//           Hospital
//         </h1>
//         <div>
//           <button className="first-button">
//             Book Appointment <span className="arrow">&#8594;</span>
//           </button>
//         </div>
//       </section>

//       <div className="anime">
//         <TypeAnimation
//           sequence={[
//             "A Great Place to Recieve Care",
//             1000,
//             "We Treat, God Heals",
//             1000,
//             "High quality Services offered",
//           ]}
//           speed={10}
//           style={{ fontSize: "2em" }}
//           repeat={Infinity}
//         />
//       </div>
//       <section id="begin">
//         <div className="working-hours">
//           <h3 className="hours">Working Hours</h3>
//           <p className="hours-message">
//             Liwonde private hospital is open <br /> to its Services 24 hours
//             Everyday,
//             <br /> feel free to visit our hospital any time
//           </p>
//         </div>
//         <div className="contact-us">
//           <h3 className="hours">Contact Us</h3>
//           <p className="hours-message">
//             Contact staff and officials of <br />
//             private hospital through the following numbers
//             <ul>
//               <li>0886262527</li>
//               <li>0994566128</li>
//             </ul>
//           </p>
//           <ul>
//             <li></li>
//           </ul>
//         </div>
//         <div className="locations">
//           <h3 className="hours">Location</h3>
//           <p className="hours-message">
//             Liwonde private hospital is located along M3 Road near, puma filling
//             station
//           </p>
//         </div>
//       </section>

//       {/* type animation and heading */}

//       {/* service card */}
//       <section id="service-section">
//         <div>
//           <h3 className="service-offered"> Services Offered</h3>
//         </div>
//         <div id="access2">
//           <div className="appointment1">
//             <Image src={recep} alt="" width={348} height={200} />
//             <h3 className="reception-head">RECEPTION</h3>
//             <p className="reception-state">
//               Reception is the entry point of all the services.The reception is
//               managed by team of well trained receptionist who manages our
//               clients. The reception links clients to doctor, pharmacist and any
//               other staff
//             </p>
//           </div>
//           <div className="appointment1">
//             <Image src={pharma} alt="" width={348} height={200} />
//             <h3 className="reception-head">PHARMARCY</h3>
//             <p className="reception-state">
//               Phamarcy is responsible for storing medicine, selling medicine,
//               Provide pharmacetical support to clients. it is managed by well
//               trained pharmacists
//             </p>
//           </div>
//           <div className="appointment1">
//             <Image src={opd} alt="" width={348} height={200} />
//             <h3 className="reception-head">OPD</h3>
//             <p className="reception-state">
//               This is the doctors office each and ever client is warmly Welcome
//               to this office and every client is helped accordingly. get any
//               medical help from this office
//             </p>
//           </div>
//         </div>
//         <button
//           className="more-button"
//           onClick={handleExpand}
//           style={hideButton}
//         >
//           More Services
//         </button>
//       </section>
//       <div style={seeMoreExpand}>
//         <section id="service-section">
//           <div></div>
//           <div id="access2">
//             <div className="appointment1">
//               <Image src={recep} alt="" width={348} height={200} />
//               <h3 className="reception-head">RECEPTION</h3>
//               <p className="reception-state">
//                 Reception is the entry point of all the services.The reception
//                 is managed by team of well trained receptionist who manages our
//                 clients. The reception links clients to doctor, pharmacist and
//                 any other staff
//               </p>
//             </div>
//             <div className="appointment1">
//               <Image src={pharma} alt="" width={348} height={200} />
//               <h3 className="reception-head">PHARMARCY</h3>
//               <p className="reception-state">
//                 Phamarcy is responsible for storing medicine, selling medicine,
//                 Provide pharmacetical support to clients. it is managed by well
//                 trained pharmacists
//               </p>
//             </div>
//             <div className="appointment1">
//               <Image src={opd} alt="" width={348} height={200} />
//               <h3 className="reception-head">OPD</h3>
//               <p className="reception-state">
//                 This is the doctors office each and ever client is warmly
//                 Welcome to this office and every client is helped accordingly.
//                 get any medical help from this office
//               </p>
//             </div>
//           </div>
//           <button className="more-button" onClick={handleExpand}>
//             Less Services
//           </button>
//         </section>
//       </div>

//       {/* mission and Vision section */}
//       <section id="mission-section">
//         <div className="footer-coll">
//           <h4>Mission Statement</h4>
//           <p>
//             we are fully committed to deliver effective,
//             <br />
//             preventive,promotive, currative and
//             <br />
//             rehabilitative health services to all citizens
//           </p>
//           <h4>Core Policies</h4>
//           <ul>
//             <li>Commitment</li>
//             <li>Respect</li>
//             <li>Hardwork</li>
//             <li>Integrity</li>
//           </ul>
//         </div>
//         <div className="footer-colll">
//           <h4>Vision Statement</h4>
//           <p>
//             To be a centre of excellence in
//             <br /> the provision of high quality heath <br /> services in Malawi
//           </p>
//           <h4>Core Policies</h4>
//           <ul className="policy">
//             <li>Commitment</li>
//             <li>Respect</li>
//             <li>Hardwork</li>
//             <li>Integrity</li>
//           </ul>
//         </div>
//         <div className="footer-colll">
//           <Image className="old" src={old} alt="" width={450} height={300} />
//         </div>
//       </section>
//       {/* quick service section */}
//       <section id="quick-service">
//         <div>
//           <h3 className="Quick-services">Quick Services</h3>
//         </div>

//         <div id="access">
//           <div className="appointment">
//             <Image src={make} alt="" width={258} height={200} />
//             <h3 className="book">Book Appointment</h3>
//             <p className="make">
//               Make an appointment with the liwonde private hospital. Click the
//               button and follow instructions
//             </p>
//             <a href="#" className="book-appointment">
//               <button className="booking">Book Appointment</button>
//             </a>
//           </div>
//           <div className="appointment">
//             <Image src={ambulance} alt="" width={258} height={200} />
//             <h3 className="book">Call Ambulance</h3>
//             <p className="make">
//               Request fast and reliable ambulance services from liwonde private
//               hospital. click the button to view more details
//             </p>
//             <a href="Ambulance" className="book-appointment">
//               <button className="booking">Call Ambulance</button>
//             </a>
//           </div>

//           <div className="appointment">
//             <Image src={map} alt="" width={258} height={200} />
//             <h3 className="book">Maps and Directions</h3>
//             <p className="make1">
//               Liwonde private hospital is located along M3 Road near, puma
//               filling station
//             </p>
//             <a href="Map" className="book-appointment">
//               <button className="booking">View Map</button>
//             </a>
//           </div>
//           <div className="appointment">
//             <Image src={map} alt="" width={258} height={200} />
//             <h3 className="book">News and Updates</h3>
//           </div>
//         </div>
//       </section>
//       {/* brief history */}
//       <section id="Brief-history">
//         <div className="footer-colo">
//           <h4>Brief History of LPH</h4>
//           <p>
//             Liwonde Private Hospital is a private health facility <br />
//             based in Malawi, registered with medical council of Malawi
//             <br />
//             under the act cap 46: 02 and registration number 47668
//             <br />
//             .It was opened in 1999 and it is located in Machinga <br />
//             District, Liwonde Township along Balaka-Zomba road in the
//             <br />
//             Southern region of Malawi
//           </p>
//         </div>
//         <div className="footer-colo">
//           <Image
//             src={liwonde}
//             alt=""
//             width={500}
//             height={400}
//             className="brief-image"
//           />
//         </div>
//       </section>
//       {/* connect section */}
//       <section id="team">
//         <div className="connect">
//           <Image
//             src={icon}
//             alt=""
//             width={100}
//             height={100}
//             className="connect-image"
//           />
//           <div className="connect-slide">
//             <TypeAnimation
//               sequence={[
//                 "A Patient First Strategy",
//                 1000,
//                 "We Treat, God Heals",
//                 1000,
//                 "you are All Welcome",
//               ]}
//               speed={10}
//               style={{ fontSize: "2em" }}
//               repeat={Infinity}
//             />
//           </div>
//           <p className="comma"> "</p>

//           <p className="italic">
//             <i>
//               We strive provide best medical support <br />
//               to each and every in Malawi. we work so tireslessly to provide
//               maximum medical expertise. we are so friendly to every patient ,
//               to make sure you have great medical experience.
//             </i>
//           </p>
//           <p className="comma1"> "</p>
//         </div>
//         <div>{/* <p className="strength">Our Strength is you</p> */}</div>

//         {/* <a href="#">
//             <button className="connect-button">Connect</button>
//           </a> */}
//       </section>
//       {/* find doctor */}

//       <section id="find-doctor">
//         <h1 className="doctor">Find A Doctor</h1>

//         <p className="contact">
//           We have experts specializing in a wide range of medical practices.{" "}
//           <br />
//           Our experts at Liwonde Private hospital are here to provide you with{" "}
//           <br />
//           care you need
//         </p>

//         <a href="#">
//           <button className="contact-doctor">
//             Contact Doctor<span className="arrow">&#8594;</span>
//           </button>
//         </a>
//       </section>

//       <section id="asked-question">
//         <h1 className="asked-head">Our Strenth is you</h1>
//         <div className="question-card">
//           <h2 className="faq">Frequently Asked Question(FAQ)</h2>
//           <ul className="services">
//             <li className="clicks">
//               <a className="que">how do you pay at liwonde private hospital?</a>
//               <div className="dropdown-menu">
//                 {/* <ul className="list"> */}
//                 <li className="ref">
//                   {" "}
//                   <div className="faq-card"></div>
//                 </li>
//                 {/* </ul> */}
//               </div>
//             </li>
//           </ul>
//           <ul className="services">
//             <li className="clicks">
//               <a className="que">where to pay at liwonde private hospital?</a>
//               <div className="dropdown-menu">
//                 {/* <ul className="list"> */}
//                 <li className="ref">
//                   {" "}
//                   <div className="faq-card"></div>
//                 </li>

//                 {/* </ul> */}
//               </div>
//             </li>
//           </ul>
//           <ul className="services">
//             <li className="clicks">
//               <a className="que">where is liwonde private hospital located?</a>
//               <div className="dropdown-menu">
//                 {/* <ul className="list"> */}
//                 <li className="ref">
//                   {" "}
//                   <div className="faq-card"></div>
//                 </li>

//                 {/* </ul> */}
//               </div>
//             </li>
//           </ul>
//           <h3 className="help-line">Help line</h3>
//           <ul className="help-numbers">
//             <li>0999925436</li>
//             <li>088878675</li>
//           </ul>
//         </div>
//       </section>

//       <section id="doctors-section">
//         <div>
//           <h3 className="Quick-services">Medical Staff Team</h3>
//         </div>

//         <div id="staff">
//           <div className="staff-team">
//             <Image
//               src={female}
//               alt=""
//               width={200}
//               height={200}
//               style={{
//                 borderRadius: "200px",
//                 marginTop: "10px",
//                 marginRight: "10px",
//               }}
//               className="staff-image"
//             />
//             <h3 className="staff-names">Wezi Maseko</h3>
//             <p className="staff-role">
//               Make an appointment with the liwonde private hospital. Click the
//               button and follow instructions
//             </p>
//           </div>
//           <div className="staff-team">
//             <Image
//               src={doctor}
//               alt=""
//               width={208}
//               height={200}
//               style={{
//                 borderRadius: "200px",
//                 marginTop: "10px",
//                 marginRight: "10px",
//               }}
//               className="staff-image"
//             />
//             <h3 className="staff-names">Limbikani Kwambiri</h3>
//             <p className="staff-role">
//               Request fast and reliable ambulance services from liwonde private
//               hospital. click the button to view more details
//             </p>
//           </div>

//           <div className="staff-team">
//             <Image
//               src={doctor2}
//               alt=""
//               width={208}
//               height={200}
//               style={{
//                 borderRadius: "200px",
//                 marginTop: "10px",
//                 marginRight: "10px",
//               }}
//               className="staff-image"
//             />
//             <h3 className="staff-names">Tafadzwa Gambiza</h3>
//             <p className="staff-role">
//               Liwonde private hospital is located along M3 Road near, puma
//               filling station
//             </p>
//           </div>
//           <div className="staff-team">
//             <Image
//               src={female2}
//               alt=""
//               width={208}
//               height={200}
//               style={{
//                 borderRadius: "200px",
//                 marginTop: "10px",
//                 marginRight: "10px",
//               }}
//               className="staff-image"
//             />
//             <h3 className="staff-names">Trinity Chimntengo</h3>
//             <p className="staff-role">
//               Liwonde private hospital is located along M3 Road near, puma
//               filling station
//             </p>
//           </div>
//         </div>
//       </section>
      
//       <div className="img">
//         <Image
//           className="reception"
//           src={heart}
//           alt="recept"
//           width={1400}
//           height={250}
//           style={{
//             padding: "10px",
//             borderRadius: "10px",
//             // animation: 'slideRight 50s linear infinite',
//           }}
//         />
//       </div>
//       <h1>We Treat, God Heals</h1>
//       <section id="social-media">
//         <h1 className="doctor">Stay Connected</h1>

//         <p className="contact">
//           follow Liwonde private hospital on social media platforms <br /> and
//           get latest, news and updates
//         </p>
//       </section>

//       <div className="footer">
//         <div className="container">
//           <div className="row">
//             <div className="footer-col">
//               <Image
//                 className="icon1"
//                 src={icon}
//                 alt="icon"
//                 width={150}
//                 height={150}
//                 style={{ marginRight: "10px" }}
//               />
//             </div>
//             <div className="footer-col">
//               <h4>Important Links</h4>
//               <ul>
//                 <li>
//                   <a href="#" id="ttt">
//                     Book Appointment
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" id="ttt">
//                     Team of Developers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" id="ttt">
//                     Location
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" id="ttt">
//                     About Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Contact Us</h4>
//               <ul>
//                 <li>
//                   <p id="ttt1">Call: 0998052417</p>
//                 </li>
//                 <li>
//                   <p id="ttt1">Email: LiwondePvthospital@gmail.com</p>
//                 </li>
//                 <li>
//                   <p id="ttt1">Physical Address</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Map of the Hospital</h4>
//               <iframe
//                 title="Google Map"
//                 width="300"
//                 height="200"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//         <div>
//           <p id="private">@Liwonde Private Hospital 2024</p>
//         </div>
//       </div>
//     </div>
//   );
// }
