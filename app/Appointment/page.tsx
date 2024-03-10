"use client";

import React, { useState } from "react";
import "./Appointment.css";
import axios from "axios";

function Page() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [kin, setKin] = useState("");
  const [relationship, setRelationship] = useState("");
  const [kinPhone, setKinPhone] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // const handelSubmition = async (e: any) => {
  //   e.preventDefault();

  //   const formData = {
  //     name,
  //     gender,
  //     dob,
  //     address,
  //     email,
  //     phone,
  //     kin,
  //     relationship,
  //     kinPhone,
  //     reason,
  //     date,
  //     time,
  //   };

  //   try {
  //     const response = await fetch("/api/sendEmail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log("Email sent successfully");
  //     } else {
  //       console.error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };

  const handelSubmition = async (values: any) => {
    try {
      const response = await axios.post("/api/sendEmail", { data: values });
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error fetching:", error);
      
    }
    console.log("Form values:", values);
  };  
  return (
    <div>
      <div className="container">
        <img
          src="https://avatars.mds.yandex.net/i?id=ec92a0aa2511ef7c39d5196bb1b67eb991a19876-9025500-images-thumbs&n=13"
          alt="Medical"
          className="image"
        />
        <form className="form">
          <div className="section">
            <h3>PATIENT INFORMATION</h3>
            <label>Name</label>
            <input
              type="text"
              id="gtx"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Gender</label>
            <select
              id="ingtx"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label>Date of Birth</label>
            <input
              type="date"
              id="gtx"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <label>Address</label>
            <input
              type="text"
              id="gtx"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label>Email</label>
            <input
              type="email"
              id="gtx"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              id="gtx"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="section">
            <h3>KIN INFORMATION</h3>
            <label>Next of Kin</label>
            <input
              type="text"
              id="gtx"
              name="kin"
              value={kin}
              onChange={(e) => setKin(e.target.value)}
              required
            />
            <label>Relationship</label>
            <input
              type="text"
              id="gtx"
              name="relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              id="gtx"
              name="kinPhone"
              value={kinPhone}
              onChange={(e) => setKinPhone(e.target.value)}
              required
            />
            <label>Reason for Visit</label>
            <textarea
              id="reason"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div className="section">
            <h3>APPOINTMENT TIME/DATE</h3>
            <label>Date</label>
            <input
              type="date"
              id="gtx"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label>Approximate Time</label>
            <input
              type="time"
              id="gtx"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <button id="apsb" type="submit" onClick={handelSubmition}>
            Send Request
          </button>
        </form>
        <p>We Treat and God Heals</p>
      </div>
    </div>
  );
}

export default Page;
