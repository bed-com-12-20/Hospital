'use client'
import React,{useState} from "react"
import './style.css'
import Image from "next/image";
import icon from '../images/icon.png'

export default function Record(){
    const[pharmacyRecords, setPharmacyRecoreds]=useState([
        {DrugId:1, DrugName:'',DrugType:'',Quantity:'', Datecreated:'',ExpiryDate:'' }
    ]);
     const addRow=()=>{
        const newRow={
            DrugID:pharmacyRecords.length +1,
            DrugName:'',
            DrugType:'',
            Qauntity:'',
            DateCreated:'',
            ExpiryDate:''
        };
        setPharmacyRecoreds(prevData =>[...prevData, newRow]);
     }
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
                 <Image
                 src={icon}
                 alt=""
                 width={100}
                 height={100}
                 />
                 <div>
                    <h1 id="pharma-head">Pharmacy Records</h1>
                 </div>
                 <div className="table-box">
                 <div className="table-row">
                <div  className="table-cell">
                   <p>DrugID</p>
                </div>
                <div  className="table-cell">
                   <p>DrugName</p>
                </div>
                <div  className="table-cell">
                   <p>DrugType</p>
                </div>
                <div  className="table-cell">
                   <p>Qauntity</p>
                </div>
                <div  className="table-cell">
                   <p>DateCreated</p>
                </div>
                <div  className="table-cell">
                   <p>ExpiryDate</p>
                </div>
              </div>
                 </div>
              {pharmacyRecords.map((row, index)=>(
                <div className="table-row" key={index}>
                    <div className="table-cell">
                        <input type="number" id="label" placeholder={'e.g 1'}/>
                    </div>
                    <div className="table-cell">
                        <input type="number" 
                        id="label" 
                        placeholder='e.g panado'
                        value={row.DrugName}
                        onChange={(e)=>handleInputChange(e, index, 'DrugName')}
                        />
                    </div>
                    <div className="table-cell">
                    <select name="" id="type" required value={row.DrugType} onChange={(e) => handleInputChange(e, index, 'DrugType')}>
                                    <option>Tablets</option>
                                    <option>Injections</option>
                                    <option>Syrup</option>
                                    <option>Suspensions</option>
                                    <option>Capsules</option>
                                    <option>Drops</option>
                                    <option>Oitments</option>
                        </select>
                    </div>
                    <div className="table-cell">
                        <input type="date" 
                        id="label" 
                        placeholder=''
                        value={row.Datecreated}
                        onChange={(e)=>handleInputChange(e, index, 'DateCreated')}
                        />
                    </div>
                    <div className="table-cell">
                        <input type="date" 
                        id="label" 
                        placeholder=''
                        value={row.ExpiryDate}
                        onChange={(e)=>handleInputChange(e, index, 'Date')}
                        />
                    </div>
                 
                </div>
              ))}
              <button onClick={addRow} className="button">Add Row</button>
                    <button className="button1">Save</button>
            </div>
                
        </div>
    );
    function handleInputChange(e, index, fieldName){
        const newData =[...pharmacyRecords];
        newData[index][fieldName] = e.target.value;
        setPharmacyRecoreds(newData);
    }
}