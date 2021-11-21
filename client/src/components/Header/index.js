import React from 'react';
import logo from '../Header/logo1.png';
import '../Header/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-0 fontSetter">
        <div className="d-flex logo" style={{ justifyContent: 'left' }}>
          <Link to="/">
            <img className="mt-2 arthaLogo" src={logo} alt="" />
          </Link>
          <div className="headerLogo">
            <h3 className="pt-4 ml-2 mt-2 headLine">ARTHA AMBULANCE</h3>
            <h4 className="pb-3 ml-2 " style={{ fontSize: '20px' }}>
              NEVER LOSE HOPE!
            </h4>
          </div>
        </div>

        <button
          className="navbar-toggler ml-auto border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginTop: '1%' }}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/"
                style={{ color: '#595959' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/about"
                style={{ color: '#595959' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/ambulance"
                style={{ color: '#595959' }}
              >
                Ambulance
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/services"
                style={{ color: '#595959' }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/corporate"
                style={{ color: '#595959' }}
              >
                Corporate
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/blog"
                style={{ color: '#595959' }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/gallery"
                style={{ color: '#595959' }}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link
                className="nav-link headerLinks"
                to="/contact"
                style={{ color: '#595959' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
