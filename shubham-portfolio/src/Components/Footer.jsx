
import React from 'react';
import '../CSS/Footer.css';

import {
  FaGithub,
  FaLinkedinIn,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">

            <div className="footer-brand">
              <div className="footer-logo">SV</div>

              <div>
                <h3>Shubham</h3>
                <span>Vishwakarma</span>
              </div>
            </div>

            <p className="footer-description">
              I'm a passionate Full Stack Developer
              who loves building modern, responsive
              and user-friendly web applications.
            </p>

            <div className="footer-social">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">

            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">

            <h4 className="footer-title">Let's Connect</h4>

            <p className="footer-connect">
              Have an interesting project or opportunity?
              Feel free to get in touch.
            </p>

            <a href="#contact" className="footer-contact-btn">
              Contact Me →
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 <strong>Shubham Vishwakarma</strong>.
            Made with <FaHeart className="heart-icon" /> All Rights Reserved.
          </p>

          <a href="#home" className="back-to-top">
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;