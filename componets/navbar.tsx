"use client";
import './nav.css'
import icon from'../app/images/icon.png'
import phone from '../app/images/phone.png'
import location from '../app/images/location.png'
import time from '../app/images/time.png'
import Image from "next/image";

function Navbar() {
  return (
    <>
      {" "}
      <div className="head">
        <header className="header-container">
          <div className="header-content">
            <Image
              className="icon"
              src={icon}
              alt="icon"
              width={100}
              height={100}
            />
          </div>
        </header>
        <h1 className="head1">Liwonde Private Hospital</h1>
        <div className="details">
          <Image
            className="phone"
            src={phone}
            alt="phone"
            width={20}
            height={20}
          />
          <p className="numbers">Phone Numbers</p>
          <div>
            <p className="num">+265889900000</p>
          </div>
        </div>
        <div className="details">
          <Image
            className="phone"
            src={time}
            alt="phone"
            width={20}
            height={20}
          />
          <p className="open"> Opening Hours</p>
          <div>
            <p className="num">Everyday 7AM-9PM</p>
          </div>
        </div>
        <div className="details">
          <Image
            className="phone"
            src={location}
            alt="phone"
            width={20}
            height={20}
          />
          <p className="location">Location</p>
          <div>
            <p className="num">
              Liwonde, Near <br /> Filling Station
            </p>
          </div>
        </div>
      </div>
      {/* navigation bar */}
      <div className="navigation">
        <nav className="header">
          <ul className="services">
            <li className="clicks">
              <a className="link" href="">
                Home
              </a>
            </li>
            <li className="clicks">
              <a className="link" href="">
                Services
              </a>
              <div className="dropdown-menu">
                <ul className="list">
                  <li className="ref">
                    <a className="drop" href="pharmacy">
                      Reception Services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="pharmacy1">
                      Pharmarcy Services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Dental Services{" "}
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Ambulance Services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      OPD services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      X-Ray services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Laboratory services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Martenity services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href=""></a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="clicks">
              <a className="link" href="#">
                Request Appointment
              </a>
            </li>
            <li className="clicks">
              <a className="link" href="">
                Doctors
              </a>
            </li>
            <li className="clicks">
              <a className="link" href="Staff">
                Staff
              </a>
            </li>
            <li className="clicks">
              <a className="link" href="">
                Department
              </a>
              <div className="dropdown-menu">
                <ul className="list">
                  <li className="ref">
                    <a className="drop" href="">
                      Dental Department
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      X-ray and Scanning Departmen
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Laboratory Department{" "}
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Ambulance Services
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Pharmacy Department
                    </a>
                  </li>
                  <li className="ref">
                    <a className="drop" href="">
                      Finance Department
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="button">
            <a className="bt1" href="#">
              <button className="button " type="submit">
                Book Appointment
              </button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
