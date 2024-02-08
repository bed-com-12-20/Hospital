import React from "react";
import './style.css'
import icon from '../../images/icon.png'
import Image from "next/image";


export default function Finance(){
    return(
        <div>
             <div id="dash">
                <header>Accounts</header>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Records</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
            <div id="table">
            <div>
                    <Image
                    src={icon}
                    alt="alt"
                    width={100}
                    height={100}
                    />
                    <div>
                        <h1 id="pharma-head">Financial Records</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}