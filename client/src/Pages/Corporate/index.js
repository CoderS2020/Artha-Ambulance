import React, { useState } from 'react';
import './corporate.css';
import Image3 from './assets/3.jpg';
import Image4 from './assets/4.jpg';
import Image5 from './assets/5.jpg';

export default function Corporate() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    requirement: '',
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    // console.log(user);
    e.preventDefault();
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, phone, company, position, requirement } = user;
    const res = await fetch('/corporatedetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        position,
        requirement,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || res.status === 400 || !data) {
      window.alert('Please fill all the fields...');
    } else {
      window.alert(
        'We got your response,we will connect with you very soon...'
      );
      setUser({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        requirement: '',
      });
    }
  };

  return (
    <>
      <div className="landing">
        <h1 className="heading">OUR SERVICES TO CORPORATE</h1>
      </div>
      <div
        className="container-fluid"
        style={{
          padding: '20px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="row row1">
          <div className="col">
            <br />
            <div className="container-fluid">
              <h2 className="d-flex font-weight-normal cpara">
                We never know when an emergency may arise irrespective of place
                and time. We take care of these emergencies by quickly
                responding to them by providing our fully equipped ambulances
                along with the required professional care. You can always depend
                on us for all your medical emergencies and leave the rest to us.
                We also provide ambulances for all the events, seminars and
                conferences organized by your companies, where our medical team
                will be able to handle all kinds of medical emergency.
              </h2>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <img className="ml-auto mt-3 cimg" src={Image4} alt="img" />
            </div>
          </div>
        </div>
        <div className="row row1">
          <div className="col">
            <div className="d-flex">
              <img className="mb-3 cimg" src={Image5} alt="img" />
            </div>
          </div>
          <div className="col">
            <h2 className="d-flex font-weight-normal cpara">
              At Artha Ambulance Services, we serve companies by providing a
              fully equipped ambulance along with a professional driver and a
              nurse who shall always be stationed at the company's site to
              immediately attend to emergencies. In times of such emergencies,
              we shall swiftly take the patient to the foretold hospital or to
              the nearest one. We always have the best professional drivers,
              doctors, nurses and top of the className equipped ambulances to
              attend to emergencies.
            </h2>
          </div>
        </div>
      </div>

      <div className="p-3 mb-3 text-white banner">
        <h2
          className="text-center font-weight-normal mt-2"
          style={{ fontFamily: "'Raleway', sans-serif", fontSize: '40px' }}
        >
          If you are planning to get a standby ambulance at your company to help
          your employees in case of emergencies, please fill out the below form
          to get in touch with us.
        </h2>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col ambulancetext">
            <h1 className="font-weight-bold text-danger">GET IN TOUCH!</h1>
            <div className="form-div">
              <form
                action="/corporate"
                method="post"
                onsubmit="alert('Thanks for contacting us, we will respond to you soon')"
                style={{ marginLeft: '10px' }}
              >
                <div
                  className="form-group font-weight-normal text-dark"
                  style={{ fontFamily: 'Coda, cursive' }}
                >
                  <label for="name">Name:</label>
                  <input
                    type="name"
                    className="form-control"
                    name="name"
                    id="name"
                    required="required"
                    value={user.name}
                    onChange={handleInput}
                  />
                </div>
                <div
                  className="form-group font-weight-normal text-dark"
                  style={{ fontFamily: "'Coda', cursive" }}
                >
                  <label for="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required="required"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div
                  className="form-group font-weight-normal text-dark"
                  style={{ fontFamily: "'Coda', cursive" }}
                >
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    required="required"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div
                  className="form-group font-weight-normal text-dark"
                  style={{ fontFamily: "'Coda', cursive" }}
                >
                  <label for="company">Company:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    id="company"
                    required="required"
                    value={user.company}
                    onChange={handleInput}
                  />
                </div>
                <div
                  className="form-group font-weight-normal text-dark"
                  style={{ fontFamily: "'Coda', cursive" }}
                >
                  <label for="position">Position:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="position"
                    id="position"
                    required="required"
                    value={user.position}
                    onChange={handleInput}
                  />
                </div>
                <div
                  className="form-group font-weight-normal text-dark"
                  style={{ fontFamily: "'Coda', cursive" }}
                >
                  <label for="requirement details">Requirement Details:</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="requirement"
                    id="require"
                    required="required"
                    value={user.requirement}
                    onChange={handleInput}
                  ></textarea>
                </div>

                <div className="form-group">
                  <button
                    className=" btn btn-danger btn-lg btn-block"
                    style={{ fontFamily: "'Coda', cursive" }}
                    onClick={submitData}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col ambulanceimg">
            <div className="d-flex">
              <img
                className="ml-auto"
                src={Image3}
                alt="img"
                style={{ height: '750px', width: '700px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
