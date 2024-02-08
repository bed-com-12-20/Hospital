'use client'

import React,{useState} from "react";
import './style.css'
import icon from '../../images/icon.png'
import Image from "next/image";


export default function Reception(){
    const[reception, setReception]=useState([
        {ID:1,FistName:'',LastName:'', PhoneNumber:'', PaymentMethod:'', Date:''}
    ]);
    const addRow=()=>{
        const newRow={
           ID:reception.length + 1,
           FistName:'',
           LastName:'',
           PhoneNumber:'',
           PaymentMethod:'',
           Date:''
        };
        setReception(prevData=>[...prevData, newRow]);
    }

    return(
        <div>
             <div id="dash">
                <header>Reception</header>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Appointments</a></li>
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
                        <h1 id="pharma-head">Receptionist</h1>
                    </div>
                </div>
                <div className="table-box">
                    <div className="table-row">
                        <div className="table-cell">
                            <p>ID</p>
                        </div>
                        <div className="table-cell">
                            <p>FirstName</p>
                        </div>
                        <div className="table-cell">
                            <p>LastName</p>
                        </div>
                        <div className="table-cell">
                            <p>PhoneNumber</p>
                        </div>
                        <div className="table-cell">
                            <p>Payment Method</p>

                        </div>
                        <div className="table-cell">
                            <p>Date</p>
                        </div>
                    </div>
                </div>
                {reception.map((row, index)=>(
                    <div className="table-row" key={index}>
                        <div className="table-cell">
                            <input
                             type="number"
                              id="label"
                               placeholder="e.g 1"/>
                        </div>
                        <div className="table-cell">
                            <input
                             type="text"
                              id="label"
                               placeholder=" e.g damascus"/>
                        </div> 
                        <div className="table-cell">
                            <input
                             type="textr"
                              id="label"
                               placeholder="multiplug"/>
                        </div>
                        <div className="table-cell">
                            <input
                             type="number"
                              id="label"
                               placeholder="e.g 08800000"/>
                        </div>
                        <div className="table-cell">
                            <select name="" id="type" required>
                             <option value="">Cash</option>
                             <option value="">Airtel Money</option>
                             <option value="">Mpamba</option>
                             <option value="">Bank</option>

                            </select>
                        </div>
                        <div className="table-cell">
                            <input
                             type="date"
                              id="label"
                              />
                        </div>    
                    </div>
                ))}
                <button onClick={addRow} className="button">Add Row</button>
               <button className="button1">Save</button>
            </div>

        </div>
    )
}