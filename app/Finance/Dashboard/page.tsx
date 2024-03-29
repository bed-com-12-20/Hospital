'use client'

import React, {useState} from "react";
import './style.css'
import icon from '../../images/icon.png'
import Image from "next/image";
import search from '../images/search.png'
import { Search } from "react-bootstrap-icons";


export default function Finance(){
    
    return(
        <div>
            <div id="dash">
                <header>Finance</header>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Records</a></li>
                    <li><a href="Sale">Sales</a></li>
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
          </div>
            <div id="searchbar">
              <span> <Search/></span>  <input type="text"  id="searchbar"placeholder="search for drugs..."
            />
            

            </div>
            <div className="button-container">
                <div>
                    <button className="button">View Table</button>
                </div>
                <div>
                    <a href="Record">
                    <button className="button2">Create Table</button>
                    </a>
                  
                </div>
            </div>  
            </div>
        </div>
    )
    

}