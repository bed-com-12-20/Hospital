'use client'
import React,{useState} from "react"
import './style.css'
import Image from "next/image";
import icon from '../../images/icon.png'

export default function Xray(){
    const[Xray , setXray]=useState([
        {ID:1, firstName:'', LastName:'', Treatment:'', Amount:'', MedicalScheme:'',Date:''}
    ]);

    const addRow=()=>{
      const newRow={
         ID:Xray.length + 1,
         firstName:'',
         LastName:'',
         Treatment:'',
         Amount:'',
         MedicalScheme:'',
         Date:''
      }
      setXray(prevData=>[...prevData, newRow]);
    }
    const deleteRow=(index:number)=>{
      setXray(prevData=>prevData.filter((row, i)=>i !==index));
  }
  const updateRow=(index:number, newData)=>{
    const updatedData = [...Xray];
    updatedData[index] = {...newData};
    setXray(updatedData);
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
                    <h1 id="pharma-head">X-Ray</h1>
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
                   <p>Treatment</p>
                </div>
                <div  className="table-cell">
                   <p>Amount</p>
                </div>
                <div  className="table-cell">
                   <p>Date</p>
                </div>
              </div>

                 </div>
                 {Xray.map((row, index)=>(
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
                             type="text"
                              id="label"
                               placeholder="scanning"/>
                        </div>
                        <div className="table-cell">
                        <input
                             type="text"
                              id="label"
                              placeholder="e.g k2000"
                              />
                        </div>
                        <div className="table-cell">
                            <input
                             type="date"
                              id="label"
                              placeholder=""
                              />
                        </div>
                        <div className="table-cell">
                                <button className="delete1" onClick={() => updateRow(index, row)}>Update</button>
                            
                            </div>
                            <div className="table-cell">
                                
                                <button className="delete" onClick={() => deleteRow(index)}>Delete</button>
                            </div>
                        
                  </div>
                 ))}
              
              <button onClick={addRow} className="button">Add Row</button>
              <button className="button1">Save</button>
            </div>
                
        </div>
    );
  
}