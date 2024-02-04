'use client'

import React, {useState} from "react";
import './style.css'
import icon from '../images/icon.png'
import Image from "next/image";


export default function Sale(){
    const[pharmacySales, setPharmacySales]=useState([
       {ID:1, FirstName:'', LastName:'',DrugName:'', Amount:'',MedicalScheme:'',Date:''}
    ]);
      const addRow=()=>{
           const newRow={
            ID:pharmacySales.length +1,
            FirstName:'',
            LastName:'injectables',
            Amount:'',
            DrugName:'',
            MedicalScheme:'',
            Date:''
           };
           setPharmacySales(prevData =>[...prevData, newRow]);
      };
    return(
        <div>
            <div id="dash">
                <header>Pharmacist</header>
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
                    <div>
                        <h1 id="pharma-head">Pharmacy sales</h1>
                    </div>
                </div>
                 
                <div className="table-box">
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
                        <p>Amount</p>
                    </div>
                    <div className="table-cell">
                        <p>DrugName</p>
                    </div>
                    <div className="table-cell">
                        <p>Medical Scheme</p>
                    </div>
                    <div className="table-cell">
                        <p> Date</p>
                    </div>
                </div>
                    {pharmacySales.map((row, index)=>(
                        <div className="table-row" key={index}>
                            <div className="table-cell">
                                <input type="text" id="label"  placeholder={'e.g ${row.ID}'}/>
                            </div>
                            <div className="table-cell">
                                <input type="text" 
                                id="label"  
                                placeholder='e.g sam '
                                 value={row.FirstName}
                                  onChange={(e) => handleInputChange(e,index, 'FirstName' )}/>
                            </div>  
                            <div className="table-cell">
                                <input type="text" 
                                id="label" 
                                placeholder="e.g zarila" 
                                value={row.LastName} 
                                onChange={(e) => handleInputChange(e, index, 'Lastname')} />
                            </div>
                            <div className="table-cell">
                                <input type="date" id="label" value={row.Amount} onChange={(e) => handleInputChange(e, index, 'dateCreated')} />
                            </div>
                            <div className="table-cell">
                                <input type="date" id="label" value={row.DrugName} onChange={(e) => handleInputChange(e, index, 'expiryDate')} />
                            </div>
                            <div className="table-cell">
                            <select name="" id="type" required value={row.MedicalScheme} onChange={(e) => handleInputChange(e, index, 'drugType')}>
                                    <option>MASM</option>
                                    <option>Medhealth</option>
                                    <option>National Bank</option>
                                    <option>Suspensions</option>
                                    <option>Liberty Health</option>
                                    <option>MRA</option>
                                    <option>ECM</option>
                                </select>
                                
                            </div>  
                            <div className="table-cell">
                                <input type="date" id="label" value={row.Date} onChange={(e) => handleInputChange(e, index, 'expiryDate')} />
                            </div>
                        </div>

                    ))}
                    <button onClick={addRow} className="button">Add Row</button>
                    <button className="button1">Record</button>
                </div>
            </div>
        </div>
    )
    function handleInputChange(e, index, fieldName){
        const newData = [...pharmacySales];
        newData[index][fieldName]= e.target.value;
        setPharmacySales(newData);
    }
}