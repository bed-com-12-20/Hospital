import React from "react";
import './style.css'
import icon from '../images/icon.png'
import Image from "next/image";

export default function Login(){
    return(
        <div>
            <div className="form">
                <div className="form-wrapper">
                    <div className="header1">
                        <div className="logo-container">
                        <Image className="center"
                            src={icon}
                            alt="talking"
                            width={100}
                            height={100}
                            style={{borderRadius:'10px'}}
                            />
                        </div>
                        <h1>Staff Login</h1>
                        <label className="name">Email:</label>
                        <input 
                        type="text" 
                        id="name"
                        placeholder="e.g Sam Zarila@gmail.com"
                        />
                        <label className="name">Password</label>
                        <input 
                        type="password" 
                        id="name"
                        placeholder="*******"
                        />
                        <a href="Dashboard">
                        <button className="button1" type="submit">Login</button> 
                        </a>
                        
                    </div>

                </div>
                
            </div>
        </div>
    )
}