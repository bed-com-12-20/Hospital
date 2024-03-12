"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Appointment.css";
import icon from "../images/icon.png";
import Image from "next/image";
import Navbar from "@/componets/navbar";
import { useScroll } from "framer-motion";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_02b734q";
    const templateId = "template_obb37u6";
    const publicKey = "B0GeSrdcYghC96Jeo";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "liwondepvthospital",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div>
      <section id="box">
        <Image className="Logo" alt="" src={icon} height={230} width={230} />
      </section>
      <div className="box">
        <form action="" className="email-form" onSubmit={handleSubmit}>
          <h2>Book Appointment</h2>
          <div className="inputBox">
            <input
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name"
              required
            />
            <span className="span">Name</span>
            <i className="span-name"></i>
          </div>
          <div className="inputBox">
            <input
              className="name"
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="span">Email</span>
            <i className="span-name"></i>
          </div>
          <div className="inputBox">
            <textarea
              placeholder="please this text filled include ..phone number..and fullname"
              id="text-area"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="email-button" type="submit">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
