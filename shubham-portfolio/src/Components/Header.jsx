
import React, { useState } from 'react';
import '../CSS/Header.css';

import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes
} from 'react-icons/fa';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="portfolio-navbar">
      <div className="container">

        <div className="navbar-inner">

          {/* Logo */}
          <a className="portfolio-logo" href="#home" onClick={closeMenu}>
            <span>SV</span>
            <div>
              <h4>Shubham</h4>
              <small>Vishwakarma</small>
            </div>
          </a>

          {/* Mobile Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Menu */}
          <div className={`portfolio-menu ${menuOpen ? 'show' : ''}`}>

            <ul className="navbar-nav-custom">

              <li>
                <a className="nav-link active" href="#home" onClick={closeMenu}>Home</a>
              </li>

              <li>
                <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
              </li>

              <li>
                <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
              </li>

              <li>
                <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
              </li>

              <li>
                <a className="nav-link" href="#education" onClick={closeMenu}>Education</a>
              </li>

              <li>
                <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
              </li>

              <li>
                <a className="talk-btn" href="#contact" onClick={closeMenu}>
                  Let's Talk
                </a>
              </li>

            </ul>

            {/* Social Links */}
            <div className="social-links">

              <a href="https://github.com/"
                target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/"
                target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;