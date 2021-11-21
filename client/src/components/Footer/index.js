import React from "react";
import "../Footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid p-0 background flex-vertical-center"
        style={{ transition: "none" }}
      >
        <div
          className="row foot p-0 m-0 mt-2"
          style={{ height: "fit-content" }}
        >
          <div
            className="
                col-md-12
                d-flex
                m-0
                footer-content
                h-50
                border-white
                c-links
              "
            style={{
              borderBottom: "solid 1.5px",
              color: "white",
              flexWrap: " wrap",
              alignItems: " center",
              width: "100%",
            }}
          >
            <div className="p-32 center">
              <div className="pl-2 border-light  font ">
                <div className="text-left">
                  <i className="far fa-map display-block1"></i>
                  <span className="">ADDRESS</span>
                </div>
                <p className="font1">Hulimavu, Bengaluru, Karnataka, IN</p>
              </div>
            </div>

            <div className="p-32 center">
              <div
                className="pl-3 border-light font "
                style={{ borderLeft: " 1.5px solid" }}
              >
                <div className="text-left">
                  <i className="fas fa-paper-plane display-block1"></i>
                  <span className="">EMAIL</span>
                </div>
                <p className="font1">info@arthaambulance .com</p>
              </div>
            </div>

            <div className="p-32 center">
              <div
                className="pl-3 border-light  font "
                style={{ borderLeft: " 1.5px solid" }}
              >
                <div className="text-left">
                  <i className="fas fa-mobile-alt  display-block1 "></i>
                  <span className="">PHONE</span>
                </div>
                <p className="font1">+91 9108282102 | +91 9108282105</p>
              </div>
            </div>
          </div>

          <div
            className="
                col-md-12
                d-flex
                m-0
                p-3
                align-items-center
                justify-content-center
                
                footer-content
                h-50
                c-links
              "
            style={{
              borderBottom: "solid 1.5px",
              color: "white",
              flexWrap: "wrap",
            }}
          >
            <div className="p-31 center">
              <div className="text-left pl-3 text-white">
                <Link
                  to="/"
                  className="text border-light text-white p-3  m-0 font1"
                >
                  <i className="fas fa-home"></i> <span>HOME</span>
                </Link>
              </div>
            </div>

            <div className="p-31 center">
              <div className="text-left pl-3 text-white border-left">
                <Link
                  to="/about"
                  className="text border-light text-white p-3 m-0 font1"
                >
                  <i className="fas fa-info-circle"></i> <span>ABOUT</span>
                </Link>
              </div>
            </div>

            <div className="p-31 center">
              <div className="text-left pl-3 text-white border-left">
                <Link
                  to="/ambulance"
                  className="text border-light text-white p-3 m-0 font1"
                >
                  <i className="fas fa-ambulance "></i> <span>AMBULANCE</span>
                </Link>
              </div>
            </div>

            <div className="p-31 center">
              <div className="text-left pl-3 text-white border-left">
                <Link
                  to="/services"
                  className="text border-light text-white p-3 m-0 font1"
                >
                  <i className="fas fa-hand-holding-medical"></i>
                  <span>SERVICES</span>
                </Link>
              </div>
            </div>
            <div className="p-31 center">
              <div className="text-left pl-3 text-white border-left">
                <Link
                  to="/corporate"
                  className="text border-light text-white  p-3 m-0 font1"
                >
                  <i className="fas fa-user"></i>
                  <span>CORPORATE</span>
                </Link>
              </div>
            </div>
            <div className="p-31 center">
              <div className="text-left pl-3 text-white border-left">
                <Link
                  to="/blog"
                  className="text border-light text-white  p-3 m-0 font1"
                >
                  <i className="fas fa-blog"></i> <span>BLOG</span>
                </Link>
              </div>
            </div>

            <div className="p-31 center">
              <div className="text-left pl-3 text-white border-left">
                <Link
                  to="/contact"
                  className="text border-light text-white  p-3 m-0 font1"
                >
                  <i className=" far fa-address-book"></i> <span>CONTACT</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="row p-0 m-0 footer">
        <div className="d-flex p-3 c-p-0">
          <div className="c-pl-1 ">
            <a
              href="https://www.instagram.com/artha_ambulance/"
              target="_blank"
              rel="noreferrer"
              className="text1 p-31 m-0 display-block"
            >
              <i className="fab fa-instagram display-block"></i>{" "}
              <span>INSTAGRAM</span>
            </a>
          </div>
          <div className="c-pl-1 m-0 border-left">
            <a
              href="https://www.linkedin.com/company/artha-ambulance/"
              target="_blank"
              rel="noreferrer"
              className="text1 p-31 display-block"
            >
              <i className="fab fa-linkedin display-block"></i>{" "}
              <span>LINKEDIN</span>
            </a>
          </div>
          <div className="c-pl-1 m-0 border-left">
            <a
              href="https://twitter.com/AmbulanceArtha"
              target="_blank"
              rel="noreferrer"
              className="text1 p-31 display-block"
            >
              <i className="fab fa-twitter-square display-block"></i>
              <span>TWITTER</span>
            </a>
          </div>
          <div className="c-pl-1 border-left">
            <a
              href="https://www.facebook.com/Arthaambulance"
              target="_blank"
              rel="noreferrer"
              className="text1 p-31 m-0 display-block"
            >
              <i className="fab fa-facebook display-block"></i>{" "}
              <span>FACEBOOK</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
