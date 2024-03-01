import './Styles/faq.css'


export default function FAQ(){
    return (<><section id="asked-question">
    <h1 className="asked-head">Our Strenth is you</h1>
    <div className="question-card">
      <h2 className="faq">Frequently Asked Question(FAQ)</h2>
      <ul className="services">
        <li className="clicks">
          <a className="que">how do you pay at liwonde private hospital?</a>
          <div className="dropdown-menu">
            {/* <ul className="list"> */}
            <li className="ref">
              {" "}
              <div className="faq-card"></div>
            </li>
            {/* </ul> */}
          </div>
        </li>
      </ul>
      <ul className="services">
        <li className="clicks">
          <a className="que">where to pay at liwonde private hospital?</a>
          <div className="dropdown-menu">
            {/* <ul className="list"> */}
            <li className="ref">
              {" "}
              <div className="faq-card"></div>
            </li>

            {/* </ul> */}
          </div>
        </li>
      </ul>
      <ul className="services">
        <li className="clicks">
          <a className="que">where is liwonde private hospital located?</a>
          <div className="dropdown-menu">
            {/* <ul className="list"> */}
            <li className="ref">
              {" "}
              <div className="faq-card"></div>
            </li>

            {/* </ul> */}
          </div>
        </li>
      </ul>
      <h3 className="help-line">Help line</h3>
      <ul className="help-numbers">
        <li>0999925436</li>
        <li>088878675</li>
      </ul>
    </div>
  </section></>)
}