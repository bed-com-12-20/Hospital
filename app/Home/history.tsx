import Image, { StaticImageData } from "next/image";
import './Styles/history.css'
import liwonde from "../images/liwonde.jpeg";

export default function BriefHistory(){
    return(<>
        {/* brief history */}
        <section id="Brief-history">
          <div className="footer-colo">
            <h4>Brief History of LPH</h4>
            <p>
              Liwonde Private Hospital is a private health facility <br />
              based in Malawi, registered with medical council of Malawi
              <br />
              under the act cap 46: 02 and registration number 47668
              <br />
              .It was opened in 1999 and it is located in Machinga <br />
              District, Liwonde Township along Balaka-Zomba road in the
              <br />
              Southern region of Malawi
            </p>
          </div>
          <div className="footer-colo">
            <Image
              src={liwonde}
              alt=""
              width={500}
              height={400}
              className="brief-image"
            />
          </div>
        </section></>)
}