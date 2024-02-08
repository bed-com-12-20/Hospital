'use client'

import React, { useState } from "react";
import './style.css'
import icon from '../../images/icon.png'
import Image from "next/image";


export default function Finance(){
   const[xray, setXray]=useState([
    {ID:1, FirstName:'', LastName:'',Treatment:'', Amount:'',Date:''}
   ]);
     const addRow=()=>{
        const newRow={
            ID:xray.length +1,
            FirstName:'',
            LastName:'',
            Treatment:'',
            Amount:'',
            Date:''
        };
        setXray(prevData =>[...prevData, newRow]);
     }

    return(
        <div>
             <div id="dash">
                <header>X-Ray</header>
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
                        <h1 id="pharma-head">X-ray</h1>
                    </div>
                </div>
               <div  className="table-box">
                <div className="table-row">
                <div className="table-cell">
                        <p>ID</p>
                    </div>
                    <div className="table-cell">
                        <p>FirstName</p>
                    </div> <div className="table-cell">
                        <p>LastName</p>
                    </div>
                    <div className="table-cell">
                        <p>Treatment</p>
                    </div>
                    <div className="table-cell">
                        <p>Amount</p>
                    </div>
                    <div className="table-cell">
                        <p> Date</p>
                    </div>
                </div>
                 {xray.map((row, index)=>(
                    <div className="table-row" key={index}>
                    <div className="table-cell">
                        <input 
                        type="number" 
                        id="label" 
                        placeholder={'e.g 1'}
                        
                        />
                    </div>
                    <div className="table-cell">
                        <input
                         type="text" 
                         id="label"
                          placeholder={'e.g Sam'}
                          value={row.FirstName}
                          onChange={(e)=>handleInputChange(e, index, 'FirstName')}
                          />
                    </div>
                    <div className="table-cell">
                        <input 
                        type="text" 
                        id="label" 
                        placeholder={'e.g Zarila'}
                        value={row.LastName}
                        onChange={(e)=>handleInputChange(e, index, 'LastName')}
                        />
                    </div>
                    <div className="table-cell">
                        <input 
                        type="number" 
                        id="label" 
                        placeholder={'amount paid'}
                        value={row.Amount}
                        onChange={(e)=>handleInputChange(e, index, 'Amount')}
                        />
                    </div>
                    <div className="table-cell">
                        <input 
                        type="date" 
                        id="label" 
                        placeholder={'e.g 1'}
                        value={row.Date}
                        onChange={(e)=>handleInputChange(e, index, 'Date')}
                        />
                    </div>
                    </div>
                 ))}
                  <button onClick={addRow} className="button">Add Row</button>
                  <button className="button1">Save</button>
               </div>
            </div>
        </div>
    );
    function handleInputChange(e, index, fieldName){
        const newData =[...xray];
        newData[index][fieldName] = e.target.value;
        setXray(newData);
    }
}