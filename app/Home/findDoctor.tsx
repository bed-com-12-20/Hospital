import './Styles/find.css'

export default function FindDoctorSection(){
    return(<> {/* find doctor */}

    <section id="find-doctor">
      <h1 className="doctor">Find A Doctor</h1>

      <p className="contact">
        We have experts specializing in a wide range of medical practices.{" "}
        <br />
        Our experts at Liwonde Private hospital are here to provide you with{" "}
        <br />
        care you need
      </p>

      <a href="#">
        <button className="contact-doctor">
          Contact Doctor<span className="arrow">&#8594;</span>
        </button>
      </a>
    </section></>)
}
