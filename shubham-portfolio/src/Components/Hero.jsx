
import React from 'react';
import '../CSS/Hero.css';

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaDownload
} from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-7 hero-content">

            <span className="hero-tag">
              Welcome To My Portfolio
            </span>

            <h1>
              Hello, I'm <br />
              <span>Shubham Vishwakarma</span>
            </h1>

            <h3>
              I'm a <span>Full Stack Developer</span>
            </h3>

            <p>
              I am a passionate Full Stack Developer
              who loves building modern, responsive
              and user-friendly web applications.
              I enjoy learning new technologies and
              creating innovative digital experiences.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">

              <a href="#projects" className="btn-project">
                View My Projects <FaArrowRight />
              </a>

              <a href="/resume.pdf" download className="btn-resume">
                Download Resume <FaDownload />
              </a>

            </div>

            {/* Social Links */}
            <div className="hero-social">
              <span>Follow Me:</span>

              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>

          </div>

          {/* Right Profile */}
          <div className="col-lg-5">
            <div className="hero-image-area">

              <div className="hero-image-circle">
                <span>SV</span>
              </div>

              <div className="floating-card">
                <span>👨‍💻</span>
                <div>
                  <strong>Developer</strong>
                  <small>Creative & Passionate</small>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;