
import Image from "next/image";
import './Styles/mission.css'

import old from "../images/old.webp";

export default function MissionSection(){
    return(<>{/* mission and Vision section */}
    <section id="mission-section">
      <div className="footer-coll">
        <h4>Mission Statement</h4>
        <p>
          we are fully committed to deliver effective,
          <br />
          preventive,promotive, currative and
          <br />
          rehabilitative health services to all citizens
        </p>
        <h4>Core Policies</h4>
        <ul>
          <li>Commitment</li>
          <li>Respect</li>
          <li>Hardwork</li>
          <li>Integrity</li>
        </ul>
      </div>
      <div className="footer-colll">
        <h4>Vision Statement</h4>
        <p>
          To be a centre of excellence in
          <br /> the provision of high quality heath <br /> services in Malawi
        </p>
        <h4>Core Policies</h4>
        <ul className="policy">
          <li>Commitment</li>
          <li>Respect</li>
          <li>Hardwork</li>
          <li>Integrity</li>
        </ul>
      </div>
      <div className="footer-colll">
        <Image className="old" src={old} alt="" width={450} height={300} />
      </div>
    </section></>)
}