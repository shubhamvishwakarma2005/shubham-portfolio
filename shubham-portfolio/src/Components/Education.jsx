
import React from 'react';
import '../CSS/Education.css';

import {
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen
} from 'react-icons/fa';

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">

        <div className="section-heading">
          <span>MY JOURNEY</span>
          <h2>Education & <span>Experience</span></h2>
          <p>My academic background and professional training.</p>
        </div>

        <div className="row g-5">

          {/* Education */}
          <div className="col-lg-6">
            <div className="timeline-heading">
              <FaGraduationCap />
              <h3>My Education</h3>
            </div>

            <div className="timeline">

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-card">
                  <span className="timeline-date">
                    <FaCalendarAlt /> Currently Pursuing
                  </span>

                  <h4>Bachelor of Computer Applications</h4>
                  <h5>BCA Passout</h5>

                  <p>
                    Studying computer applications,
                    programming and software development.
                  </p>

                  <span className="timeline-place">
                    <FaBookOpen /> College / University
                    (To be updated)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Experience */}
          <div className="col-lg-6">
            <div className="timeline-heading">
              <FaBriefcase />
              <h3>My Experience</h3>
            </div>

            <div className="timeline">

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-card">

                  <span className="timeline-date">
                    <FaCalendarAlt /> 15 June 2026 – Present
                  </span>

                  <h4>Full Stack Developer Intern</h4>
                  <h5>DigiCoders</h5>

                  <p>
                    Currently undergoing internship training
                    and gaining practical experience in
                    frontend, backend and database development.
                  </p>

                  <span className="timeline-place">
                    <FaMapMarkerAlt /> Lucknow, Uttar Pradesh
                  </span>

                  <div className="experience-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>ReactJS</span>
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>Laravel</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;