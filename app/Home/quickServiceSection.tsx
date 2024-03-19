import Image, { StaticImageData } from "next/image";
import ambulance from "../images/ambulance.webp";
import make from "../images/make.png";
import './Styles/quickservice.css'
import map from "../images/map.jpeg";


export default function QuickServiceSection(){
    return(<><section id="quick-service">
    <div>
      <h3 className="Quick-services">Quick Services</h3>
    </div>

    <div id="access">
      
      <div className="appointment">
        <Image  className='image'
        src={make} alt="" width={258} height={200}  />
        <h3 className="book">Book Appointment</h3>
        <p className="make">
          Make an appointment with the liwonde private hospital. Click the
          button and follow instructions
        </p>
        <a href="Appointment" className="book-appointment">
          <button className="booking">Book Appointment</button>
        </a>
      </div>
      <div className="appointment">
        <Image className='image'  src={ambulance} alt="" width={258} height={200} />
        <h3 className="book">Call Ambulance</h3>
        <p className="make">
          Request fast and reliable ambulance services from liwonde private
          hospital. click the button to view more details
        </p>
        <a href="Ambulance" className="book-appointment">
          <button className="booking">Call Ambulance</button>
        </a>
      </div>

      <div className="appointment">
        <Image className='image'  src={map} alt="" width={258} height={200} />
        <h3 className="book">Maps and Directions</h3>
        <p className="make1">
          Liwonde private hospital is located along M3 Road near, puma
          filling station
        </p>
        <a href="Map" className="book-appointment">
          <button className="booking">View Map</button>
        </a>
      </div>
      <div className="appointment">
        <Image  className='image' src={map} alt="" width={258} height={200} />
        <h3 className="book">News and Updates</h3>
      </div>
    </div>
  </section></>)
}