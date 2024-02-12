'use client'
import React,{useState} from "react"
import './style.css'
import Image from "next/image";
import icon from '../../images/icon.png'

export default function Vitals(){
   const[Vitals, setVitals]=useState([
      {ID:1, FirstName:'', LastName:'',Temperature:'', Weight:'',BloodPressure:'', Date:''}
   ]);
   const addRow=()=>{
      const newRow={
         ID:Vitals.length + 1, 
         FirstName:'',
         LastName:'',
         Temperature:'', 
         Weight:'',
         BloodPressure:'', 
         Date:''
      };
      setVitals(prevData=>[...prevData, newRow]);
     }
     const deleteRow=(index:number)=>{
      setVitals(prevData=>prevData.filter((row, i)=>i !==index));
  }
  const updateRow=(index, newData)=>{
    const updatedData = [...Vitals];
    updatedData[index] = {...newData};
    setVitals(updatedData);
  } 
   
     
    return(
        <div>
             <div id="dash">
                <header>Vitals</header>
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
                    <h1 id="pharma-head">Body Tests</h1>
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
                   <p>Temperature</p>
                </div>
                <div  className="table-cell">
                   <p>Weight</p>
                </div>
                <div  className="table-cell">
                   <p>Blood Pressure</p>
                </div>
                <div  className="table-cell">
                   <p>Date</p>
                </div>
              </div>

                 </div>
                 {Vitals.map((row, index)=>(
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
                             type="textr"
                              id="label"
                              placeholder="in degress"/>
                     </div>
                     <div className="table-cell">
                        <input
                             type="textr"
                              id="label"
                              placeholder="in kilograms"/>
                     </div>
                     <div className="table-cell">
                        <input
                             type="text"
                              id="label"
                           />
                     </div>
                     <div className="table-cell">
                        <input
                             type="date"
                              id="label"
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