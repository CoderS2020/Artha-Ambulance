import React from 'react';
import './home.css';
import cardImage from './assets/One.jpg';
import cardImage2 from './assets/Two.jpg';
import TwentyFourHrs from './assets/24Hours.jpg';
import Equipped from './assets/Equipped.jpg';
import Quality from './assets/Quality.jpg';
import Swift from './assets/Swift.jpg';

const Home = () => {
  return (
    <>
      <div class="bg-dark text-white homeland">
        <img class="img-fluid top" src={cardImage} alt=" " />
        <div class="card-img-overlay pad " style={{ padding: '10vw 5vw' }}>
          <div class="row" style={{ textAlign: 'left' }}>
            <div class="col">
              <h1
                class="font-weight-normal heading"
                style={{
                  fontFamily: 'Raleway',
                  textAlign: 'left',
                  // fontSize: '80px',
                  display:"block",
                  color: 'red',
                }}
              >
                ARTHA AMBULANCE
              </h1>
              <h3
                class="font-weight-normal text-dark caption"
                style={{ fontFamily: 'Raleway', marginTop: '-15px' }}
              >
                Never Lose Hope!
              </h3>
              <h4
                class="text-dark smalltext"
                style={{ fontFamily: 'Poppins,sans-serif' }}
              >
                We are just a phone call away
              </h4>
              <button
                type="button"
                class="btn font-weight-bold button"
                style={{
                  height: 'auto',
                  width: 'auto',
                  fontFamily: 'Coda',
                  fontWeight: 'bold',
                }}
              >
                <a
                  href="tel:9108282102"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Call Us +91 9108282102
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3 mb-2 text-white banner12">
        <h2 class="font-weight-normal">SEE WHAT WE CAN DO FOR YOU</h2>
      </div>
      <div class="container-fluid ">
        <div class="row">
          <div class="col">
            <br />
            <p
              class="d-flex font-weight-normal para"
              style={{ width: '100%', textAlign: 'left' }}
            >
              A team you can trust.
              <br />
              <br />
              At Artha Ambulance Services, we take utmost precautions while
              transferring a patient from one place to another. Our team works
              around the clock to give timely service and ensure that quality is
              not compromised.
              <br />
              <br />
              We understand that technology and medical care is the best way to
              handle any emergency. Our medically equipped ambulances deliver
              you the best in class healthcare you need when time demands. YOU
              can depend on us during your emergencies and leave the rest to us.
              We make sure that you are pleased with the service that we
              provide.
            </p>
          </div>

          <div class="col displaynone">
            <div class="d-flex" style={{ width: '100%' }}>
              <img class="p-6 mt-2" src={cardImage2} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div class="p-3 mb-2 mt-3 bg-danger text-white banner12">
        <h2 class="text-center font-weight-normal "> WHAT WE PROVIDE</h2>
      </div>
      <div class="container-fluid">
        <div class="container-fluid" style={{ marginTop: '80px' }}>
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              {/* <a href="/assets/24 Hours.jpg"></a> */}
              <img
                style={{ width: '95px', height: '100px' }}
                alt="AltText"
                src={TwentyFourHrs}
                class="img-responsive mx-auto d-block imglogo"
              />
              <div
                class="container"
                style={{ marginTop: '30px', flexDirection: 'column' }}
              >
                <h4 class="font-weight-normal text-dark text-left logohead">
                  24 Hour Service - When seconds count, we make difference
                </h4>
                <br />
                <p class="font-weight-normal text-left logotext">
                  We provide our services round the clock and assist patients
                  during their emergencies irrespective of time and place.
                </p>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
              {/* <a href="LinkToImage"></a> */}
              <img
                style={{ width: '75px', height: '105px' }}
                alt="AltText"
                src={Quality}
                class="img-responsive mx-auto d-block imglogo"
              />
              <div
                class="container"
                style={{ marginTop: '30px', flexDirection: 'column' }}
              >
                <h4 class="font-weight-normal text-dark text-left logohead">
                  Quality - Trust Us! We are doctors on wheels
                </h4>
                <br />
                <br />
                <p class="font-weight-normal text-left logotext">
                  With our professional drivers, medical staff and leading edge
                  medical equipments, we deliver the highest quality service to
                  all our patients.
                </p>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
              {/* <a href="LinkToImage"></a> */}
              <img
                style={{ width: '65px', height: '105px' }}
                alt="AltTexts"
                src={Swift}
                class="img-responsive mx-auto d-block imglogo"
              />
              <div
                class="container"
                style={{ marginTop: '30px', flexDirection: 'column' }}
              >
                <h4 class="font-weight-normal text-dark text-left logohead">
                  Swift & affordable - Exceptional service with quick response
                </h4>
                <br />
                <p class="font-weight-normal text-left logotext">
                  In case of emergencies, our ambulances shall try to reach the
                  patient's place within 15 to 30 minutes. If required, we also
                  provide a professional medical staff to assist.
                </p>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
              {/* <a href="LinkToImage"></a> */}
              <img
                style={{ width: '100px', height: '105px' }}
                alt="Alt Text"
                src={Equipped}
                class="img-responsive mx-auto d-block imglogo"
              />
              <div
                class="container"
                style={{ marginTop: '30px', flexDirection: 'column' }}
              >
                <h4 class="font-weight-normal text-dark text-left logohead">
                  Equipped Ambulance – We always dare to fight the extreme
                </h4>
                <br />
                <p class="font-weight-normal text-left logotext">
                  Our ambulances are always equipped with the required medical
                  equipment to treat the patients and help them to reach the
                  hospital safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
