import { TypeAnimation } from "react-type-animation";
import './Styles/HeroSection.css'
export default function Herosection() {
  return (
    <>
      {" "}
      {/* sliding images */}
      <section id="welcome-section">
        <h1 className="hospital-name">
          <span className="span">|</span>Welcome To Liwonde  Private <br />
          Hospital
        </h1>
        <div>
          <a href="Appointment">
          <button className="first-button">
            Book Appointment <span className="arrow">&#8594;</span>
          </button>
          </a>
         
        </div>
      </section>
    </>
  );
}
