'use client'
import { TypeAnimation } from 'react-type-animation';
import NumberAnimation from '../animation';
import icon from "../images/icon.png";
import './Styles/connect.css'
import Image, { StaticImageData } from 'next/image';
export default function ConnectSection(){
    return (<>
        {/* connect section */}
        <section id='team'>
          <div className='card-container'>
              <div className="card">
                <h1>Testimonies</h1>
              </div>
              <div className="connector"></div>
              <div className="card">
                <h1>Heals</h1>
                <div className="number-animation">
                        <NumberAnimation startValue={250} endValue={300} duration={5} />
                        
                    </div>
              </div>
              <div className="connector"></div>
              <div className="card">
                <h1>Ranking</h1>
              </div>
              
          </div>
          
          
        </section></>)
}