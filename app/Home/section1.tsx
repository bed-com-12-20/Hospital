"use client";
import { TypeAnimation } from "react-type-animation";
import "./Styles/section1.css";
export default function Section1(){
    return(<>
        <div id="anime">
          <TypeAnimation
            sequence={[
              "A Great Place to Recieve Care",
              1000,
              "We Treat, God Heals",
              1000,
              "High quality Services offered",
            ]}
            speed={10}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <section id="begin">
          <div id="working-hours">
            <h3 id="hours">Working Hours</h3>
            <p id="hours-message">
              Liwonde private hospital is open <br /> to its Services 24 hours
              Everyday,
              <br /> feel free to visit our hospital any time
            </p>
          </div>
          <div id="contact-us">
            <h3 id="hours">Contact Us</h3>
            <p id="hours-message">
              Contact staff and officials of <br />
              private hospital through the following numbers
              <ul>
                <li>0886262527</li>
                <li>0994566128</li>
              </ul>
            </p>
            <ul>
              <li></li>
            </ul>
          </div>
          <div id="locations">
            <h3 id="hours">Location</h3>
            <p id="hours-message">
              Liwonde private hospital is located along M3 Road near, puma filling
              station
            </p>
          </div>
        </section>
  </>)
}