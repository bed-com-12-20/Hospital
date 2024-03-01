
import Image, { StaticImageData } from "next/image";
import female from "../images/female.jpeg";
import female2 from "../images/female2.webp";
import doctor from "../images/doctor1.webp";
import doctor2 from "../images/doctor2.webp";

import './Styles/doctorSection.css'

export default function DoctorsSection(){
    return (<><section id="doctors-section">
    <div>
      <h3 className="Quick-services">Medical Staff Team</h3>
    </div>

    <div id="staff">
      <div className="staff-team">
        <Image
          src={female}
          alt=""
          width={200}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Wezi Maseko</h3>
        <p className="staff-role">
          Make an appointment with the liwonde private hospital. Click the
          button and follow instructions
        </p>
      </div>
      <div className="staff-team">
        <Image
          src={doctor}
          alt=""
          width={208}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Limbikani Kwambiri</h3>
        <p className="staff-role">
          Request fast and reliable ambulance services from liwonde private
          hospital. click the button to view more details
        </p>
      </div>

      <div className="staff-team">
        <Image
          src={doctor2}
          alt=""
          width={208}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Tafadzwa Gambiza</h3>
        <p className="staff-role">
          Liwonde private hospital is located along M3 Road near, puma
          filling station
        </p>
      </div>
      <div className="staff-team">
        <Image
          src={female2}
          alt=""
          width={208}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Trinity Chimntengo</h3>
        <p className="staff-role">
          Liwonde private hospital is located along M3 Road near, puma
          filling station
        </p>
      </div>
    </div>
  </section>
  </>)
}