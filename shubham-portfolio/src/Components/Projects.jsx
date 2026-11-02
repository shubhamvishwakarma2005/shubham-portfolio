
import React from 'react';
import '../CSS/Projects.css';

import {
  FaShoppingCart,
  FaChartLine,
  FaHamburger,
  FaTasks,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

function Projects() {

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A modern online shopping website with product listings, cart and checkout functionality.',
      tech: ['ReactJS', 'Bootstrap', 'CSS'],
      icon: <FaShoppingCart />,
      number: '01',
      category: 'Web Development',
      theme: 'project-blue'
    },
    {
      title: 'Admin Dashboard',
      description: 'An admin panel to manage users, records and important application data.',
      tech: ['ReactJS', 'PHP', 'MySQL'],
      icon: <FaChartLine />,
      number: '02',
      category: 'Dashboard',
      theme: 'project-purple'
    },
    {
      title: 'Quick Bite',
      description: 'A local food delivery application concept for ordering fast food anytime.',
      tech: ['ReactJS', 'PHP', 'MySQL'],
      icon: <FaHamburger />,
      number: '03',
      category: 'Food Delivery',
      theme: 'project-orange'
    },
    {
      title: 'Task Manager',
      description: 'A simple task management application to organize and track daily activities.',
      tech: ['ReactJS', 'CSS', 'JavaScript'],
      icon: <FaTasks />,
      number: '04',
      category: 'Productivity',
      theme: 'project-green'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div className="section-heading">
          <span>MY RECENT WORK</span>
          <h2>My <span>Projects</span></h2>
          <p>Some of the projects I have worked on.</p>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-6" key={index}>

              <div className="project-card">

                <div className={`project-preview ${project.theme}`}>
                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-preview-icon">
                    {project.icon}
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-info">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href="#contact">
                      <FaGithub /> GitHub
                    </a>

                    <a href="#contact">
                      View Project <FaExternalLinkAlt />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;