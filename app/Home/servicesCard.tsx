"use client";
//import { Button, Typography } from "@material-tailwind/react";
import "./Styles/service.css";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import health from "../images/heath.jpeg";

export default function ServicesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

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

  return (
    <>
      {/* service card */}

      <section id="service-section" className="">
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            {/* <Image src={health} alt="" width={100} height={100} className="service-image" /> */}
            <h1 className="service-offered">  <span className="drug-icon">|</span> SERVICES OFFERED</h1>
            <p className="explore">
              Explore our comprehensive range of medical services designed to
              meet your healthcare needs.
            </p>

            <div className="cards">
              <div className="service-card">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>Pharmacy Service
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    Phamarcy is responsible for storing medicine, selling medicine,
                    Provide pharmacetical support to clients. it is managed by well
                    trained pharmacists
                  </p>
                </div>
              </div>
              <div className="service-card1">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>Reception Service
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    Reception is the entry point of all the services.The reception is
                    managed by team of well trained receptionist who manages our
                    clients. The reception links clients to doctor, pharmacist and any
                    other staff
                  </p>
                </div>
              </div>
              <div className="service-card2">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>OPD
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    This is the doctors office each and ever client is warmly Welcome
                    to this office and every client is helped accordingly. get any
                    medical help from this office
                  </p>
                </div>
              </div>
              <div className="service-card3">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>Martenity Service
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias, dolore incidunt veritatis cumque ea ipsum a ullam
                    esse fugiat ex, quaerat sunt obcaecati totam nobis at earum
                    laboriosam quos similique.
                  </p>
                </div>
              </div>
            </div>
            <div className="more-button">
              <button onClick={handleExpand} style={hideButton}>
                See More
              </button>
            </div>
          </motion.div>
          {/* <motion.div
          variants={{
            hidden: { left:0 },
            visible: { left: '100%'},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.5, ease:'easeIn'
            
          }}
          style={{
             position:'absolute',
             top: 4,
             bottom:4,
             left:0,
             right:0,
             background: "var(--brand)",
             zIndex:20,

          }}
        >
          <div className="cards">
            <div className="service-card">
              <h3 className="service">
                {" "}
                <span className="drug-icon">|</span>Pharmacy Service
              </h3>
              <div className="pharmacy">
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias, dolore incidunt veritatis cumque ea ipsum a ullam esse
                  fugiat ex, quaerat sunt obcaecati totam nobis at earum
                  laboriosam quos similique.
                </p>
              </div>
            </div>
            <div className="service-card">
              <h3 className="service">
                {" "}
                <span className="drug-icon">|</span>Reception Service
              </h3>
              <div className="pharmacy">
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias, dolore incidunt veritatis cumque ea ipsum a ullam esse
                  fugiat ex, quaerat sunt obcaecati totam nobis at earum
                  laboriosam quos similique.
                </p>
              </div>
            </div>
            <div className="service-card">
              <h3 className="service">
                {" "}
                <span className="drug-icon">|</span>Laboratory Service
              </h3>
              <div className="pharmacy">
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias, dolore incidunt veritatis cumque ea ipsum a ullam esse
                  fugiat ex, quaerat sunt obcaecati totam nobis at earum
                  laboriosam quos similique.
                </p>
              </div>
            </div>
            <div className="service-card">
              <h3 className="service">
                {" "}
                <span className="drug-icon">|</span>Martenity Service
              </h3>
              <div className="pharmacy">
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias, dolore incidunt veritatis cumque ea ipsum a ullam esse
                  fugiat ex, quaerat sunt obcaecati totam nobis at earum
                  laboriosam quos similique.
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
        </div>
      </section>
      <div style={seeMoreExpand}>
        <section id="service-section">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <div className="cards">
              <div className="service-card">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>Pharmacy Service
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias, dolore incidunt veritatis cumque ea ipsum a ullam
                    esse fugiat ex, quaerat sunt obcaecati totam nobis at earum
                    laboriosam quos similique.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>Reception Service
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias, dolore incidunt veritatis cumque ea ipsum a ullam
                    esse fugiat ex, quaerat sunt obcaecati totam nobis at earum
                    laboriosam quos similique.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>Laboratory Service
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias, dolore incidunt veritatis cumque ea ipsum a ullam
                    esse fugiat ex, quaerat sunt obcaecati totam nobis at earum
                    laboriosam quos similique.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <h3 className="service">
                  {" "}
                  <span className="drug-icon">|</span>Martenity Service
                </h3>
                <div className="pharmacy">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias, dolore incidunt veritatis cumque ea ipsum a ullam
                    esse fugiat ex, quaerat sunt obcaecati totam nobis at earum
                    laboriosam quos similique.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>{" "}
        </section>
      </div>
    </>
  );
}
