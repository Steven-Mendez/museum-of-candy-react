import './Nav.css';
import React, { useState, useEffect } from 'react';

function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 56) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-md navbar-dark fixed-top px-3 ${
        navbar ? 'active' : ''
      }`}
    >
      <a className="navbar-brand" href="#">
        CANDY
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TICKETS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
