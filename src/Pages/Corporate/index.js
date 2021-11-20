import React from 'react'
import './corporate.css';
import Image3 from "./assets/3.jpg";
import Image4 from "./assets/4.jpg";
import Image5 from "./assets/5.jpg";

export default function Corporate() {
  return (
    <>
      <div class="landing">
        <h1 class="heading">OUR SERVICES TO  CORPORATE</h1>
      </div>
    <div class="container-fluid" style={{padding: "20px 20px",display: "flex",flexDirection: "column",alignItems: "center"}}>
      <div class="row row1">
          <div class="col">
              <br />
              <div class="container-fluid">
                  <h2 class="d-flex font-weight-normal cpara">
                      We never know when an emergency may arise irrespective of place and time. We take care of these emergencies by quickly responding to them by providing our fully equipped ambulances along with the required professional care. You can always depend on us for all your medical emergencies and leave the rest to us. We also provide ambulances for all the events, seminars and conferences  organized by your companies, where our medical team will be able to handle all kinds of medical emergency.
                  </h2>
              </div>
          </div>
          <div class="col">
              <div class="d-flex">
                  <img class="ml-auto mt-3 cimg" src={Image4} alt="img" />
              </div>
          </div>
      </div>
      <div class="row row1">
        <div class="col">
            <div class="d-flex">
                <img class="mb-3 cimg" src={Image5} alt="img" />
            </div>
        </div>
        <div class="col">
            <h2 class="d-flex font-weight-normal cpara">At Artha Ambulance Services, we serve companies by providing a fully equipped ambulance along with a professional driver and a nurse who shall always be stationed at the company's site to immediately attend to emergencies. In times of such emergencies, we shall swiftly take the patient to the foretold hospital or to the nearest one. We always have the best professional drivers, doctors, nurses and top of the class equipped ambulances to attend to emergencies.</h2>
        </div>
        </div>
    </div>

    <div class="p-3 mb-3 text-white banner">
        <h2 class="text-center font-weight-normal mt-2" style={{fontFamily: "'Raleway', sans-serif", fontSize: "40px"}}>If you are planning to get a standby ambulance at your company to help
            your employees in case of emergencies, please fill out the below form to get in touch with us.
        </h2>
    </div>

<div class="container-fluid">
    <div class="row">
        <div class="col ambulancetext">
            <h1 class="font-weight-bold text-danger" >GET IN TOUCH!</h1>
            <div class="form-div">
                <form action="/corporate" method="post" onsubmit="alert('Thanks for contacting us, we will respond to you soon')" style={{marginLeft: "10px"}}>
                    <div class="form-group font-weight-normal text-dark" style={{fontFamily: "Coda, cursive"}}>
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" name="name" id="name" required="required" /> 
                    </div>
                    <div class="form-group font-weight-normal text-dark" style={{fontFamily: "'Coda', cursive"}}>
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" name="email" id="email" required="required" />
                    </div>
                    <div class="form-group font-weight-normal text-dark" style={{fontFamily: "'Coda', cursive"}}>
                        <label for="phone">Phone:</label>
                        <input type="number" class="form-control" name="number" id="phone" required="required" />
                    </div>
                    <div class="form-group font-weight-normal text-dark" style={{fontFamily: "'Coda', cursive"}}>
                        <label for="company">Company:</label>
                        <input type="text" class="form-control" name="company" id="company" required="required" />
                    </div>
                    <div class="form-group font-weight-normal text-dark" style={{fontFamily: "'Coda', cursive"}}>
                        <label for="position">Position:</label>
                        <input type="text" class="form-control" name="position" id="position" required="required" />
                    </div>
                    <div class="form-group font-weight-normal text-dark" style={{fontFamily: "'Coda', cursive"}}>
                        <label for="requirement details">Requirement Details:</label>
                        <textarea type="text" class="form-control" name="details" id="require" required="required"></textarea>
                       
                    </div>

                    <div class="form-group">
                        <input type="submit" name="submit" value="Submit" class=" btn btn-danger btn-lg btn-block" style={{fontFamily: "'Coda', cursive"}} />
                    </div>
                </form>
            </div>
        </div>
        <div class="col ambulanceimg">
            <div class="d-flex">
                <img class="ml-auto" src={Image3} alt="img" style={{height: "750px" , width: "700px"}} />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
