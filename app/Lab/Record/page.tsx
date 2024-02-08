'use client'
import React,{useState} from "react"
import './style.css'
import Image from "next/image";
import icon from '../../images/icon.png'

export default function Lab(){
    const[lab , setLab]=useState([
        {ID:1, firstName:'', LastName:'', Paymethod:'', TestOrder:'', Date:''}
    ]);

    const addRow=()=>{
      const newRow={
         ID:lab.length + 1,
         firstName:'',
         LastName:'',
         Paymethod:'',
         TestOrder:'',
         Date:''

      }
      setLab(prevData=>[...prevData, newRow]);
    }
   
     
    return(
        <div>
             <div id="dash">
                <header>Lab Doctor</header>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Records</a></li>
                    <li><a href="Sale">Sales</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
            <div id="table">
                 <Image
                 src={icon}
                 alt=""
                 width={100}
                 height={100}
                 />
                 <div>
                    <h1 id="pharma-head">Laboratory</h1>
                 </div>
                 <div className="table-box">
                 <div className="table-row">
                <div  className="table-cell">
                   <p>ID</p>
                </div>
                <div  className="table-cell">
                   <p>FirstName</p>
                </div>
                <div  className="table-cell">
                   <p>LastName</p>
                </div>
                <div  className="table-cell">
                   <p>Payment Method</p>
                </div>
                <div  className="table-cell">
                   <p>Test Orderd</p>
                </div>
                <div  className="table-cell">
                   <p>Date</p>
                </div>
              </div>

                 </div>
                 {lab.map((row, index)=>(
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
                            <select name="" id="type" required>
                             <option value="">Cash</option>
                             <option value="">Airtel Money</option>
                             <option value="">Mpamba</option>
                             <option value="">Bank</option>

                            </select>
                        </div>
                        <div className="table-cell">
                            <select name="" id="type" required>
                             <option value="">BP</option>
                             <option value="">TB</option>
                             <option value="">Cancer</option>
                             <option value="">Malaria</option>

                            </select>
                        </div>
                  </div>
                 ))}
              
              <button onClick={addRow} className="button">Add Row</button>
              <button className="button1">Save</button>
            </div>
                
        </div>
    );
  
}