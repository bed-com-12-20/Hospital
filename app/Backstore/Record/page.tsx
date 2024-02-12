'use client'

import React, { useState } from "react";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';

export default function Backstore() {
    const [backstore, setBackstore] = useState([
        { DrugId: 1, DrugName: '', DrugType: '', Quantity: '', Datecreated: '', ExpiryDate: '' }
    ]);

    const addRow = () => {
        const newRow = {
            DrugID: backstore.length + 1,
            DrugName: '',
            DrugType: '',
            Quantity: '',
            DateCreated: '',
            ExpiryDate: ''
        };
        // setBackstore(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setBackstore(prevData => prevData.filter((row, i) => i !== index));
    }

    const updateRow = (index, newData) => {
        const updatedData = [...backstore];
        updatedData[index] = { ...newData };
        setBackstore(updatedData);
    }

    return (
        <div>
            <div id="dash">
                <header>Backstore</header>
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
                    <h1 id="pharma-head">Drug Store</h1>
                </div>
                <div className="table-box">
                    <div className="table-row">
                        <div className="table-cell">
                            <p>DrugID</p>
                        </div>
                        <div className="table-cell">
                            <p>DrugName</p>
                        </div>
                        <div className="table-cell">
                            <p>DrugType</p>
                        </div>
                        <div className="table-cell">
                            <p>Quantity</p>
                        </div>
                        <div className="table-cell">
                            <p>DateCreated</p>
                        </div>
                        <div className="table-cell">
                            <p>ExpiryDate</p>
                        </div>
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                    </div>
                    {backstore.map((row, index) => (
                        <div className="table-row" key={index}>
                            <div className="table-cell">
                                <input id="type" type="number" value={row.DrugId} onChange={(event) => updateRow(index, { ...row, DrugID: event.target.value })} />
                            </div>
                            <div className="table-cell">
                                <input id="type" type="text" value={row.DrugName} onChange={(event) => updateRow(index, { ...row, DrugName: event.target.value })} />
                            </div>
                            <div className="table-cell">
                            <select name="" id="type" required  >
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
                                <input id="type" type="text" value={row.Quantity} onChange={(event) => updateRow(index, { ...row, Quantity: event.target.value })} />
                            </div>
                            <div  className="table-cell">
                                <input id="type" type="date" value={row.Datecreated} onChange={(event) => updateRow(index, { ...row, DateCreated: event.target.value })} />
                            </div>
                            <div className="table-cell">
                                <input id="type" type="date" value={row.ExpiryDate} onChange={(event) => updateRow(index, { ...row, ExpiryDate: event.target.value })} />
                            </div>
                            <div className="table-cell">
                                <button className="delete1" onClick={() => updateRow(index, row)}>Update</button>
                            
                            </div>
                            <div className="table-cell">
                                
                                <button className="delete" onClick={() => deleteRow(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={addRow} className="button">Add Row</button>
                <button className="button1">Save</button>
            </div>
        </div>
    );
}
