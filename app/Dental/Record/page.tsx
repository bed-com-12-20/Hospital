'use client'
import React,{useState} from "react"
import './style.css'
import Image from "next/image";
import icon from '../../images/icon.png'

export default function Dental(){
    const[Dental, setDental]=useState([
      {ID:1, FirstName:'', LastName:'',PhoneNumber:'',Address:'', Diogonis:'',Amount:'',MedicalScheme:'',Treatment:'',Date:''}
    ]);
    const addRow=()=>{
      const newRow={
         ID:1, 
         FirstName:'', 
         LastName:'',
         PhoneNumber:'',
         Address:'', 
         Diogonis:'',
         Amount:'',
         MedicalScheme:'',
         Treatment:'',
         Date:''
      };
      setDental(prevData=>[...prevData, newRow]);
    }
     
    return(
        <div>
            
            <div id="table">
                 <Image
                 src={icon}
                 alt=""
                 width={100}
                 height={100}
                 />
                 <div>
                    <h1 id="pharma-head">Dental</h1>
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
                   <p>PhoneNumber</p>
                </div>
                <div  className="table-cell">
                   <p>Address</p>
                </div>
                <div  className="table-cell">
                   <p>Diagonisis</p>
                </div>
                <div  className="table-cell">
                   <p>Amount</p>
                </div>
                <div  className="table-cell">
                   <p>Medical Scheme</p>
                </div>
                <div  className="table-cell">
                   <p>Treatment</p>
                </div>
                <div  className="table-cell">
                   <p>Date</p>
                </div>
              </div>

                 </div>
                 {Dental.map((row, index)=>(
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
                               placeholder="0888009005"/>
                        </div>
                        <div className="table-cell">
                            <input
                             type="text"
                              id="label"
                               placeholder="p.o box liwonde"/>
                        </div>
                        <div className="table-cell">
                            <input
                             type="text"
                              id="label"
                               placeholder="bracelets"/>
                        </div>
                        <div className="table-cell">
                            <input
                             type="text"
                              id="label"
                               placeholder="k 1000"/>
                        </div>
                        <div className="table-cell">
                            <select name="" id="type" required>
                             <option value=""></option>
                             <option value="">MASM</option>
                             <option value="">MediHealth</option>
                             <option value="">National Bank</option>
                             <option value="">Liberty Health</option>
                             <option value="">MRA</option>
                             <option value="">ECM</option>
                            </select>
                        </div>
                        <div className="table-cell">
                            <input
                             type="text"
                              id="label"
                               placeholder="teath removal"/>
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
    );
  
}