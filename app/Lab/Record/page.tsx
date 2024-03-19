"use client";

import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import icon from "../../images/icon.png";

const API_URL = "https://lph-backend.onrender.com/laboratory";

// interface LabItem {
//   ID: number;
//   FirstName: string;
//   LastName: string;
//   PaymentMethod: string;
//   TestOrdered: string;
//   Date: string;
// }

export default function Lab() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PaymentMethod, setPaymentMethod] = useState("");
  const [TestOrdered, setTestOrdered] = useState("");

  const [lab, setLab] = useState<LabItem[]>([
    {
      ID: 1,
      FirstName: "",
      LastName: "",
      PaymentMethod: "",
      TestOrdered: "",
      Date: "",
    },
  ]);
  const postData = async (
    url: string | URL | Request,
    data: {
      FirstName: string;
      LastName: string;
      PaymentMethod: string;
      TestOrdered: string;
    }
  ) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Error: Table not added, try again");
      }
    } catch (error) {
      throw new Error("Server data fetching error: " + "");
    }
  };

  const handleSubmit = async () => {
    try {
      const apiUrl = "https://lph-backend.onrender.com/laboratory";
      const data = {
        FirstName,
        LastName,
        PaymentMethod,
        TestOrdered,
      };

      const apiResponse = await postData(apiUrl, data);
      console.log("Table added", apiResponse);
    } catch (error) {
      console.log("Errror connecting to server");
    }
  };

  const addRow = () => {
    const newRow: LabItem = {
      ID: lab.length + 1,
      FirstName: "",
      LastName: "",
      PaymentMethod: "",
      TestOrdered: "",
      Date: "",
    };
    setLab((prevData) => [...prevData, newRow]);
  };

  const deleteRow = (index: number) => {
    setLab((prevData) => prevData.filter((row, i) => i !== index));
  };

  const updateRow = (index: number, newData: Partial<LabItem>) => {
    const updatedData = [...lab];
    updatedData[index] = { ...updatedData[index], ...newData };
    setLab(updatedData);
  };

  //   const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, row: LabItem, setLastName: { (value: React.SetStateAction<string>): void; (arg0: any): void; }, updateRow: { (index: number, newData: Partial<LabItem>): void; (arg0: any, arg1: any): void; }) => {
  //     const newValue = e.target.value;
  //     setLastName(newValue); // Update locally

  //     // Update in the row object if updateRow function is provided
  //     if (updateRow) {
  //         updateRow(index, { ...row, LastName: newValue });
  //     }
  // };

  // const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, row: LabItem, setFirstName: { (value: React.SetStateAction<string>): void; (arg0: any): void; }, updateRow: { (index: number, newData: Partial<LabItem>): void; (arg0: any, arg1: any): void; }) => {
  //   const newValue = e.target.value;
  //   setFirstName(newValue); // Update locally
  //   // Update in the row object if updateRow function is provided
  //   if (updateRow) {
  //       updateRow(index, { ...row, FirstName: newValue });
  //   }
  // };

  // const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number, row: LabItem, setPaymentMethod: { (value: React.SetStateAction<string>): void; (arg0: any): void; }, updateRow: { (index: number, newData: Partial<LabItem>): void; (arg0: any, arg1: any): void; }) => {
  //   const newValue = e.target.value;
  //   setPaymentMethod(newValue); // Update locally

  //   // Update in the row object if updateRow function is provided
  //   if (updateRow) {
  //       updateRow(index, { ...row, PaymentMethod: newValue });
  //   }
  // };
  // const handleTestOrderedChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number, row: LabItem, setTestOrdered: { (value: React.SetStateAction<string>): void; (arg0: any): void; }, updateRow: { (index: number, newData: Partial<LabItem>): void; (arg0: any, arg1: any): void; }) => {
  //   const newValue = e.target.value;
  //   setTestOrdered(newValue); // Update locally

  //   // Update in the row object if updateRow function is provided
  //   if (updateRow) {
  //       updateRow(index, { ...row, TestOrdered: newValue });
  //   }
  // };

  type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

  interface LabItem {
    ID: number;
    FirstName: string;
    LastName: string;
    PaymentMethod: string;
    TestOrdered: string;
    Date: string;
  }

  type UpdateRowFunction = (index: number, newData: Partial<LabItem>) => void;

  const handleFieldChange = <T extends string>(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    row: LabItem,
    setter: SetStateAction<T>,
    updateRow: UpdateRowFunction,
    fieldToUpdate: keyof LabItem
  ) => {
    const newValue = e.target.value;
    setter(newValue as unknown as T); // Type assertion here

    // Update in the row object if updateRow function is provided
    if (updateRow) {
      updateRow(index, { ...row, [fieldToUpdate]: newValue });
    }
  };

  // Usage examples:
  const handleLastNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    row: LabItem,
    setLastName: SetStateAction<string>,
    updateRow: UpdateRowFunction
  ) => {
    handleFieldChange(e, index, row, setLastName, updateRow, "LastName");
  };

  const handleFirstNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    row: LabItem,
    setFirstName: SetStateAction<string>,
    updateRow: UpdateRowFunction
  ) => {
    handleFieldChange(e, index, row, setFirstName, updateRow, "FirstName");
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number,
    row: LabItem,
    setPaymentMethod: SetStateAction<string>,
    updateRow: UpdateRowFunction
  ) => {
    handleFieldChange(e, index, row, setPaymentMethod, updateRow, "PaymentMethod");
  };

  const handleTestOrderedChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number,
    row: LabItem,
    setTestOrdered: SetStateAction<string>,
    updateRow: UpdateRowFunction
  ) => {
    handleFieldChange(e, index, row, setTestOrdered, updateRow, "TestOrdered");
  };

  return (
    <div>
      <div id="table">
        <Image src={icon} alt="" width={100} height={100} />
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
                onChange={(event) =>
                  updateRow(index, { ...row, ID: parseInt(event.target.value) })
                }
              />
            </div>
            <div className="table-cell">
              <input
                type="text"
                id="label"
                placeholder=" e.g damascus"
                value={row.FirstName}
                //  onChange={(e) => setFirstName(e.target.value)}
                //  onChange={(event) => updateRow(index, { ...row, FirstName: event.target.value })}

                onChange={(e) =>
                  handleFirstNameChange(e, index, row, setFirstName, updateRow)
                }
              />
            </div>
            <div className="table-cell">
              <input
                type="text"
                id="label"
                placeholder="multiplug"
                value={row.LastName}
                onChange={(e) =>
                  handleLastNameChange(e, index, row, setLastName, updateRow)
                }
                //  onChange={(e) => setLastName(e.target.value)}
                // onChange={(event) => updateRow(index, { ...row, LastName: event.target.value })}
              />
            </div>
            <div className="table-cell">
              <select
                name=""
                id="type"
                required
                // onChange={(e) => handlePaymentMethodChange(e, index, row, setPaymentMethod, updateRow)}

                onChange={(e) =>
                  handlePaymentMethodChange(
                    e,
                    index,
                    row,
                    setPaymentMethod,
                    updateRow
                  )
                }
                // onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Cash</option>
                <option value="">Airtel Money</option>
                <option value="">Mpamba</option>
                <option value="">Bank</option>
              </select>
            </div>
            <div className="table-cell">
              <select
                name=""
                id="type"
                required
                // onChange={(e) => setTestorde(e.target.value)}

                onChange={(e) =>
                  handleTestOrderedChange(e, index, row, setTestOrdered, updateRow)
                }
              >
                <option value="">BP</option>
                <option value="">TB</option>
                <option value="">Cancer</option>
                <option value="">Malaria</option>
              </select>
            </div>
            <div className="table-cell">
              <button className="delete1" onClick={() => updateRow(index, row)}>
                Update
              </button>
            </div>
            <div className="table-cell">
              <button className="delete" onClick={() => deleteRow(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
        <button onClick={addRow} className="button">
          Add Row
        </button>
        <button onClick={handleSubmit} className="button1">
          Save
        </button>
      </div>
    </div>
  );
}
