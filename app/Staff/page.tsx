import React from "react"
import './style.css'
import Image from "next/image"
import avatar from '../images/avatar.webp'
import { TypeAnimation } from "react-type-animation"

 export default function Staff(){
  return(
    <div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Sam Zarila</h1>
        <p className="title">Finance Manager</p>
        
        <a href="Finance/Login">
        <button className="btn">Login</button>
        </a>
       
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Rich ML</h1>
        <p className="title">OPD</p>
        <div className="desc">
             
        </div>
        <a href="OPD/Login">
        <button className="btn">Login</button>
        </a>
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Crossby</h1>
        <p className="title">Phamarcist</p>
       
        <a href="Pharmacy2/Login">
        <button className="btn">Login</button>
        </a>
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Gambit</h1>
        <p className="title">Martenity</p>
        
        <a href="Martenity/Login">
        <button className="btn">Login</button>
        </a>
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Gambit</h1>
        <p className="title">Receptionist</p>
        
        <a href="Reception/Login">
        <button className="btn">Login</button>
        </a>
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Gambit</h1>
        <p className="title">Radiographer</p>
        
        <a href="X-Ray/Login">
        <button className="btn">Login</button>
        </a>
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Gambit</h1>
        <p className="title">Lab Technician</p>
       
        <a href="Lab/Login">
        <button className="btn">Login</button>
        </a>
        
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Naphy</h1>
        <p className="title">Dentist</p>
        
        <a href="Dental/Login">
        <button className="btn">Login</button>
        </a>
        
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Backstore</h1>
       
       
        <a href="Backstore/Login">
        <button className="btn">Login</button>
        </a>
        
      </div>
      <div className="card">
        <Image
         src={avatar}
         alt="avata"
         width={132}
         height={128}
        className="image"
        />
        <h1 className="name1">Vitals</h1>
       
       
        <a href="Vitals/Login">
        <button className="btn">Login</button>
        </a>
        
      </div>
    </div>
  )
 }