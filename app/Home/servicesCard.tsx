"use client";
import "./Styles/service.css";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import pharma from "../images/pharma.jpeg";
import recep from "../images/recep.jpeg";
import opd from "../images/opd.jpeg";
export default function ServicesCard(){

    const [seeMoreExpand, setSeeMoreExpand] = useState({
        display: "none",
        height: "0px",
      });
    
      const [hideButton, setHideButton] = useState({
        display: "flex",
      });
    
      const handleExpand = () => {
        setSeeMoreExpand({
          display: "flex",
          height: "fit-content",
        });
    
        setHideButton({
          display: "none",
        });
      };
    
    return(<> {/* service card */}
    <section id="service-section">
      <div>
        <h3 className="service-offered"> Services Offered</h3>
      </div>
      <div id="access2">
        <div className="appointment">
          <Image  className="service-image"  src={recep} alt="" width={348} height={200} />
          <h3 className="reception-head">RECEPTION</h3>
          <p className="reception-state">
            Reception is the entry point of all the services.The reception is
            managed by team of well trained receptionist who manages our
            clients. The reception links clients to doctor, pharmacist and any
            other staff
          </p>
        </div>
        <div className="appointment1">
          <Image className="service-image"  src={pharma} alt="" width={348} height={200} />
          <h3 className="reception-head">PHARMARCY</h3>
          <p className="reception-state">
            Phamarcy is responsible for storing medicine, selling medicine,
            Provide pharmacetical support to clients. it is managed by well
            trained pharmacists
          </p>
        </div>
        <div className="appointment2">
          <Image className="service-image" src={opd} alt="" width={348} height={200} />
          <h3 className="reception-head">OPD</h3>
          <p className="reception-state">
            This is the doctors office each and ever client is warmly Welcome
            to this office and every client is helped accordingly. get any
            medical help from this office
          </p>
        </div>
        
      </div>
      <button
        className="more-button"
        onClick={handleExpand}
        style={hideButton}
      >
        More Services
      </button>
    </section>
    <div style={seeMoreExpand}>
      <section id="service-section">
        
        <div id="access2">
         <div className="appointment1">
            <Image src={recep} alt="" width={348} height={200} />
            <h3 className="reception-head">RECEPTION</h3>
            <p className="reception-state">
              Reception is the entry point of all the services.The reception
              is managed by team of well trained receptionist who manages our
              clients. The reception links clients to doctor, pharmacist and
              any other staff
            </p>
          </div> 
          <div className="appointment1">
            <Image src={pharma} alt="" width={348} height={200} />
            <h3 className="reception-head">PHARMARCY</h3>
            <p className="reception-state">
              Phamarcy is responsible for storing medicine, selling medicine,
              Provide pharmacetical support to clients. it is managed by well
              trained pharmacists
            </p>
          </div>
          <div className="appointment2">
            <Image src={opd} alt="" width={348} height={200} />
            <h3 className="reception-head">OPD</h3>
            <p className="reception-state">
              This is the doctors office each and ever client is warmly
              Welcome to this office and every client is helped accordingly.
              get any medical help from this office
            </p>
          </div>
          <div className="appointmen">
            <Image src={opd} alt="" width={348} height={200} />
            <h3 className="reception-head">OPD</h3>
            <p className="reception-state">
              This is the doctors office each and ever client is warmly
              Welcome to this office and every client is helped accordingly.
              get any medical help from this office
            </p>
          </div>
        </div>
        <button className="more-button" onClick={handleExpand}>
          Less Services
        </button>
      </section>
    </div></>)
}