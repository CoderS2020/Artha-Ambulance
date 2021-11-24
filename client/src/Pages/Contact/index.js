import React, { useState } from 'react';
import LandingPage from './images/Landing-Page.jpg';
import Banner from './images/Banner-3.jpg';
import ThankYou from './images/t.jpg';
import './contact-style.css';

function importAll(r) {
  return r.keys().map(r);
}

const LinkedInFeed = importAll(
  require.context(
    './images/Follow Us/Linkedin/',
    false,
    /\.(svg|png|jpe?g|svg|jpg)$/
  )
);
const FacebookFeed = importAll(
  require.context(
    './images/Follow Us/Facebook/',
    false,
    /\.(svg|png|jpe?g|svg|jpg)$/
  )
);
const InstagramFeed = importAll(
  require.context(
    './images/Follow Us/Instagram/',
    false,
    /\.(svg|png|jpe?g|svg|jpg)$/
  )
);

export default function Contact() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
    e.preventDefault();
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = user;
    const res = await fetch('/contactdetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
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
        message: '',
      });
    }
  };

  return (
    <>
      <section
        className="page-section bg-dark-alfa-50 bg-scroll"
        style={{ backgroundImage: `url(${LandingPage})` }}
      >
        <div className="containers relative">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <h1 className="hs-line-7 mb-20 mb-xs-10">GET IN TOUCH! </h1>
              </div>

              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 mb-20 mb-xs-0">
                  WE'D LOVE TO HEAR FROM YOU
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="select" style={{ backgroundImage: `url(${Banner})` }}>
        <h1>CONTACT US</h1>
      </div>

      <section className="page-section2">
        <div className="relative">
          <div className="row mb-60 mb-xs-40">
            <div className="col-md-12 offset-md-1" style={{paddingLeft:"0px"}}>
              <div className="row">
                <div className="col-sm-6 col-lg-4 pb-20">
                  <div
                    className="contact-item wow fadeScaleIn"
                    data-wow-delay="0"
                    data-wow-duration="1s"
                  >
                    <div className="ci-icon">
                      <i className="fa fa-phone"></i>
                    </div>

                    <div className="ci-title">Call Us</div>

                    <div className="ci-text">
                      +91 9108282102 <br />
                      +91 9108282105
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 pb-20">
                  <div
                    className="contact-item wow fadeScaleIn"
                    data-wow-delay=".1s"
                    data-wow-duration="1s"
                  >
                    <div className="ci-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>

                    <div className="ci-title">Address</div>

                    <div className="ci-text">
                      No - 110/332/5A, Muneshwara Layout, Hulimavu, B. G. Road,
                      Bengaluru - 76
                    </div>

                    <div className="ci-link">
                      <a
                        href="https://goo.gl/maps/zorjcmnB9yGuGqQC7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        See on the Map
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 pb-20">
                  <div
                    className="contact-item wow fadeScaleIn"
                    data-wow-delay=".2s"
                    data-wow-duration="1s"
                  >
                    <div className="ci-icon">
                      <i className="fa fa-envelope"></i>
                    </div>

                    <div className="ci-title">Email</div>

                    <div className="ci-text">
                      {/* <!-- <a href="https://rhythm.bestlooker.pro/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ec9f999c9c839e98ac8e899f9880838387899ec29c9e83">Arthaambulance@gmail.com</a> --> */}
                      <a href="mailto:info@arthaambulance.com">
                        info@arthaambulance.com
                      </a>
                    </div>

                    <div className="ci-link">
                      {/* <!-- <a href="https://rhythm.bestlooker.pro/cdn-cgi/l/email-protection#e0939590908f9294a0828593948c8f8f8b8592ce90928f">Say Hello</a> --> */}
                      <a href="mailto:info@arthaambulance.com">Say Hello</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="selecting" style={{ backgroundImage: `url(${Banner})` }}>
        <h1>FOLLOW US</h1>
      </div>

      <div className="follow">
        <div className="widget gallery-widget">
          <h1 className="header-widget">Instagram Feed</h1>

          <ul>
            {InstagramFeed.map((image) => {
              return (
                <li>
                  <a
                    href="https://www.instagram.com/artha_ambulance/"
                    className="gallery-widget-lightbox"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={image.default} alt="Instagram Image1" />
                    <div className="hover-link">
                      <span className="linea-arrows-plus"></span>
                    </div>
                  </a>
                </li>
              );
            })}
            {/* <li><a href="https://www.instagram.com/artha_ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Ambulance Sirens.jpg" alt="Instagram Image1" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Doc in Ambulance.jpg" alt="Instagram Image2" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Doc in OT.jpg" alt="Instagram Image3" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Heart on a book.jpg" alt="Instagram Image4" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Inside Ambulance.jpg" alt="Instagram Image5" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/IV Bag 2.jpg" alt="Instagram Image6" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li> */}
          </ul>
        </div>

        <div className="widget twitter-widget">
          <h1 className="header-widget">Twitter Feed</h1>
          <ul>
            <li>
              <a
                href="https://twitter.com/AmbulanceArtha"
                target="_blank"
                className="twitter"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
                <p>The best investment you will ever make is on your health</p>
              </a>
              {/* <!-- <p>5 Reasons You Should Take a Sabbatical from Creative Work  <span>- AUG 10</span></p> --> */}
            </li>

            <li>
              <a
                href="https://twitter.com/AmbulanceArtha"
                target="_blank"
                className="twitter"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
                <p>We are just a phone call away</p>
              </a>
              {/* <!-- <p>What is the enemy of  <span>- AUG 5</span></p> --> */}
            </li>
          </ul>
        </div>

        <div className="widget gallery-widget">
          <h1 className="header-widget">LinkedIn Feed</h1>

          <ul>
            {LinkedInFeed.map((image) => {
              return (
                <li>
                  <a
                    href="https://www.linkedin.com/company/artha-ambulance/"
                    className="gallery-widget-lightbox"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={image.default} alt="linkedin" />
                    <div className="hover-link">
                      <span className="linea-arrows-plus"></span>
                    </div>
                  </a>
                </li>
              );
            })}
            {/* <li><a href="https://www.linkedin.com/company/artha-ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/IV Bag.jpg" alt="LinkedIn Image1" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Mask and Sanitizer.jpg" alt="LinkedIn Image2" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/medical-staff-with-stethoscope.jpg" alt="LinkedIn Image3" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/medical-test.jpg" alt="LinkedIn Image4" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Monitor.jpg" alt="LinkedIn Image5" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Oxygen Mask.jpg" alt="LinkedIn Image6" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li> */}
          </ul>
        </div>

        <div className="widget gallery-widget">
          <h1 className="header-widget">Facebook Feed</h1>

          <ul>
            {FacebookFeed.map((image) => {
              return (
                <li>
                  <a
                    href="https://www.facebook.com/Arthaambulance"
                    className="gallery-widget-lightbox"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={image.default} alt="Facebook Image1" />
                    <div className="hover-link">
                      <span className="linea-arrows-plus"></span>
                    </div>
                  </a>
                </li>
              );
            })}
            {/* <li><a href="https://www.facebook.com/Arthaambulance" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="./images/Follow Us/Paramedics are always there to help.jpg" alt="Facebook Image1" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="./images/Follow Us/Plus Sign.jpg" alt="Facebook Image2" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="./images/Follow Us/Rushing Ambulance.jpg" alt="Facebook Image3" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Side Stand.jpg" alt="Facebook Image4" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Stay home.jpg" alt="Facebook Image5" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" className="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Stethoscope - 2.jpg" alt="Facebook Image6" /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li> */}
          </ul>
        </div>
      </div>

      <div className="selecting" style={{ backgroundImage: `url(${Banner})` }}>
        <h1>TELL US</h1>
      </div>

      <form>
        <div className="tell">
          <div className="us">
            <div className="form-group">
              <label for="name">
                Name <sup>*</sup>
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                className="input-lg round form-control"
                required
                aria-required="true"
                value={user.name}
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label for="email">
                Email <sup>*</sup>
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                className="input-lg round form-control"
                required
                aria-required="true"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label for="number">
                Phone <sup>*</sup>
              </label>
              <br />
              <input
                type="text"
                name="phone"
                className="input-lg round form-control"
                required
                aria-required="true"
                value={user.phone}
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label for="message">
                Message <sup>*</sup>
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: '130px' }}
                value={user.message}
                onChange={handleInput}
              ></textarea>
            </div>

            <div className="text-end pt-10">
              <button
                className="submit_btn btn btn-mod btn-large btn-round"
                // id="submit_btn"
                aria-controls="result"
                onClick={submitData}
              >
                Submit
              </button>
            </div>
          </div>

          <div className="usimg">
            <img src={ThankYou} alt="image0" />
          </div>
        </div>
      </form>

      <div
        className="selecting headquarter"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h1>Company Headquarters</h1>
      </div>

      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31116.323207680332!2d77.5862605554176!3d12.872934456202312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ad428686a95%3A0x9f834702fb64489e!2sHulimavu%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1636726787598!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          title="mapas"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
