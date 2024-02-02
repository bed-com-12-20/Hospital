import React from "react";
import './style.css'
import icon from '../images/icon.png'
import Image from "next/image";

export default function Dashboard() {
    return (
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
                </div>
                <div>
                    <h1 id="pharma-head">Pharmacy Table</h1>
                </div>
                <div className="table-box">
                <div className="table-row">
                    <div className="table-cell">
                        <p>DrugId</p>
                    </div>
                    <div className="table-cell">
                        <p>Drug Name</p>
                    </div> <div className="table-cell">
                        <p>Drug Type</p>
                    </div>
                    <div className="table-cell">
                        <p>Quantity</p>
                    </div>
                    <div className="table-cell">
                        <p>Date Created</p>
                    </div>
                    <div className="table-cell">
                        <p>Expiry Date</p>
                    </div>
                </div>
                
                 </div>
                 <div className="table-box">
                <div className="table-row">
                    <div className="table-cell">
                        <input type="text" id="label" placeholder="e.g 1"/>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g panado"/>
                    </div> 
                    <div className="table-cell">
                       <select name="" id="type"required>
                         <option >Injectables</option>
                         <option >Syrup</option>
                         <option >Tablets</option>
                         <option >Suspensions</option>
                         <option >Capsules</option>
                         <option >Drops</option>
                         <option >Ointments</option>

                       </select>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g in grams "/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                </div>
                 </div>
                 <div className="table-box">
                <div className="table-row">
                    <div className="table-cell">
                        <input type="text" id="label" placeholder="e.g 1"/>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g panado"/>
                    </div> 
                    <div className="table-cell">
                       <select name="" id="type"required>
                         <option >Injectables</option>
                         <option >Syrup</option>
                         <option >Tablets</option>
                         <option >Suspensions</option>
                         <option >Capsules</option>
                         <option >Drops</option>
                         <option >Ointments</option>

                       </select>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g in grams "/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                </div>
                 </div>
                 <div className="table-box">
                <div className="table-row">
                    <div className="table-cell">
                        <input type="text" id="label" placeholder="e.g 1"/>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g panado"/>
                    </div> 
                    <div className="table-cell">
                       <select name="" id="type"required>
                         <option >Injectables</option>
                         <option >Syrup</option>
                         <option >Tablets</option>
                         <option >Suspensions</option>
                         <option >Capsules</option>
                         <option >Drops</option>
                         <option >Ointments</option>

                       </select>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g in grams "/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                </div>
                
                 </div>
                 <div className="table-box">
                <div className="table-row">
                    <div className="table-cell">
                        <input type="text" id="label" placeholder="e.g 1"/>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g panado"/>
                    </div> 
                    <div className="table-cell">
                       <select name="" id="type"required>
                         <option >Injectables</option>
                         <option >Syrup</option>
                         <option >Tablets</option>
                         <option >Suspensions</option>
                         <option >Capsules</option>
                         <option >Drops</option>
                         <option >Ointments</option>

                       </select>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g in grams "/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                </div>
                
                 </div>
                 <div className="table-box">
                <div className="table-row">
                    <div className="table-cell">
                        <input type="text" id="label" placeholder="e.g 1"/>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g panado"/>
                    </div> 
                    <div className="table-cell">
                       <select name="" id="type"required>
                         <option >Injectables</option>
                         <option >Syrup</option>
                         <option >Tablets</option>
                         <option >Suspensions</option>
                         <option >Capsules</option>
                         <option >Drops</option>
                         <option >Ointments</option>

                       </select>
                    </div>
                    <div className="table-cell">
                    <input type="text" id="label" placeholder="e.g in grams "/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                    <div className="table-cell">
                    <input type="date" id="label"/>
                    </div>
                </div>
                
                 </div>
                 <button className="btn">Record</button>
            </div>
           
        </div>
    )
}
