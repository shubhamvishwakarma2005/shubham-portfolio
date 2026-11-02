
import React from 'react';
import '../CSS/About.css';

import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBullseye
} from 'react-icons/fa';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="section-heading">
          <span>GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>Discover more about my journey and passion.</p>
        </div>

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-5 mb-4">
            <div className="about-image-box">
              <div className="about-profile">
                <span>SV</span>
              </div>

              <div className="about-experience">
                <FaCode />
                <div>
                  <h4>Developer</h4>
                  <p>Creative Thinker</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-7">
            <div className="about-content">

              <h3>I'm Shubham Vishwakarma</h3>

              <h5>Full Stack Developer</h5>

              <p>
                I am a passionate and dedicated developer
                interested in creating modern, responsive
                and user-friendly web applications.

                I enjoy working with different technologies,
                learning new skills and solving real-world
                problems through coding.
              </p>

              <div className="about-details">

                <div className="about-detail-item">
                  <FaGraduationCap />
                  <div>
                    <h6>Education</h6>
                    <p>Bachelor of Computer Applications (BCA)</p>
                  </div>
                </div>

                <div className="about-detail-item">
                  <FaLaptopCode />
                  <div>
                    <h6>Technical Skills</h6>
                    <p>HTML, CSS, JavaScript, ReactJS, PHP</p>
                  </div>
                </div>

                <div className="about-detail-item">
                  <FaBullseye />
                  <div>
                    <h6>Career Objective</h6>
                    <p>
                      To become a skilled software developer
                      and build innovative applications.
                    </p>
                  </div>
                </div>

              </div>

              <a href="#contact" className="about-btn">
                Let's Connect →
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;