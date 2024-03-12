'use client'
import { TypeAnimation } from 'react-type-animation';
import icon from "../images/icon.png";
import './Styles/connect.css'
import Image, { StaticImageData } from 'next/image';
export default function ConnectSection(){
    return (<>
        {/* connect section */}
        <section id='team'>
          <div className='connect'>
            <Image
              src={icon}
              alt=""
              width={100}
              height={100}
              className="connect-image"
            />
            <div className="connect-slide">
              <TypeAnimation
                sequence={[
                  "A Patient First Strategy",
                  1000,
                  "We Treat, God Heals",
                  1000,
                  "you are All Welcome",
                ]}
                speed={10}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </div>
           
  
            <p className="italic">
              <i>
                We strive provide best medical support <br />
                to each and every in Malawi. we work so tireslessly to provide
                maximum medical expertise. we are so friendly to every patient ,
                to make sure you have great medical experience.
              </i>
            </p>
           
          </div>
        </section></>)
}