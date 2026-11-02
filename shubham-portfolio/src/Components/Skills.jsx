
import React from 'react';
import '../CSS/Skills.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaLaravel
} from 'react-icons/fa';

import { SiMysql } from 'react-icons/si';

function Skills() {

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#f97316' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#38bdf8' },
    { name: 'JavaScript', icon: <FaJs />, color: '#facc15' },
    { name: 'ReactJS', icon: <FaReact />, color: '#38bdf8' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#a855f7' },
    { name: 'PHP', icon: <FaPhp />, color: '#a5b4fc' },
    { name: 'MySQL', icon: <SiMysql />, color: '#38bdf8' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#ef4444' }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">

        <div className="section-heading">
          <span>MY EXPERTISE</span>
          <h2>My <span>Skills</span></h2>
          <p>Technologies and tools I work with.</p>
        </div>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>

              <div className="skill-card">

                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <h4>{skill.name}</h4>

                <p>Professional Skill</p>

                <div className="skill-line">
                  <span></span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;