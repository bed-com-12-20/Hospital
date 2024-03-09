'use client'

import React, { useState } from "react";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';

interface LabItem {
    ID: number;
    firstName: string;
    LastName: string;
    Paymethod: string;
    TestOrder: string;
    Date: string;
}

export default function Lab() {
    const [lab, setLab] = useState<LabItem[]>([
        { ID: 1, firstName: '', LastName: '', Paymethod: '', TestOrder: '', Date: '' }
    ]);

    const addRow = () => {
        const newRow: LabItem = {
            ID: lab.length + 1,
            firstName: '',
            LastName: '',
            Paymethod: '',
            TestOrder: '',
            Date: ''
        };
        setLab(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setLab(prevData => prevData.filter((row, i) => i !== index));
    }

    const updateRow = (index: number, newData: Partial<LabItem>) => {
        const updatedData = [...lab];
        updatedData[index] = { ...updatedData[index], ...newData };
        setLab(updatedData);
    }

    return (
        <div>
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
                        <div className="table-cell">
                            <p>ID</p>
                        </div>
                        <div className="table-cell">
                            <p>FirstName</p>
                        </div>
                        <div className="table-cell">
                            <p>LastName</p>
                        </div>
                        <div className="table-cell">
                            <p>Payment Method</p>
                        </div>
                        <div className="table-cell">
                            <p>Test Orderd</p>
                        </div>
                        <div className="table-cell">
                            <p>Date</p>
                        </div>
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                    </div>
                </div>
                {lab.map((row, index) => (
                    <div className="table-row" key={index}>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="e.g 1"
                                value={row.ID}
                                onChange={(event) => updateRow(index, { ...row, ID: parseInt(event.target.value) })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder=" e.g damascus"
                                value={row.firstName}
                                onChange={(event) => updateRow(index, { ...row, firstName: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="multiplug"
                                value={row.LastName}
                                onChange={(event) => updateRow(index, { ...row, LastName: event.target.value })}
                            />
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
