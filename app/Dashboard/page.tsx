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
                    <li><a href="#">Verification</a></li>
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
            </div>
        </div>
    )
}
