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
        <div className="desc">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
             Vitae reprehenderit est accusamus tempore hic, perspiciatis culpa <br /> 
             similique ipsum itaque aspernatur dolorum maxime harum nihil aliquam <br /> 
             tempora 
             consequuntur magni maiores unde.</p>
        </div>
        <button className="btn">Login</button>
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
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
             Vitae reprehenderit est accusamus tempore hic, perspiciatis culpa <br /> 
             similique ipsum itaque aspernatur dolorum maxime harum nihil aliquam <br /> 
             tempora 
             consequuntur magni maiores unde.</p>
        </div>
        <a href="Login">
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
        <div className="desc">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
             Vitae reprehenderit est accusamus tempore hic, perspiciatis culpa <br /> 
             similique ipsum itaque aspernatur dolorum maxime harum nihil aliquam <br /> 
             tempora 
             consequuntur magni maiores unde.</p>
        </div>
        <a href="Login">
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
        <div className="desc">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
             Vitae reprehenderit est accusamus tempore hic, perspiciatis culpa <br /> 
             similique ipsum itaque aspernatur dolorum maxime harum nihil aliquam <br /> 
             tempora 
             consequuntur magni maiores unde.</p>
        </div>
        <a href="Login">
        <button className="btn">Login</button>
        </a>
        
      </div>
    </div>
  )
 }