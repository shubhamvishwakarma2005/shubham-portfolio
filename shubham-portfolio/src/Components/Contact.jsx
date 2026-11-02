
import React, { useState } from 'react';
import '../CSS/Contact.css';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane
} from 'react-icons/fa';

function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mail = 'YOUR_EMAIL@gmail.com';

    const body = `
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}
    `;

    window.location.href =
      `mailto:${mail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>Contact <span>Me</span></h2>
          <p>Have a project in mind? Let's work together.</p>
        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info">

              <h3>Let's Talk</h3>

              <p>
                I'm always open to discussing new projects,
                creative ideas and opportunities.
              </p>

              <div className="contact-detail">
                <FaEnvelope />
                <div>
                  <h6>Email Address</h6>
                  <p>YOUR_EMAIL@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <FaPhoneAlt />
                <div>
                  <h6>Phone Number</h6>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="contact-detail">
                <FaMapMarkerAlt />
                <div>
                  <h6>Location</h6>
                  <p>Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="contact-social">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>

                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">

              <h3>Send Me a Message</h3>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label>Your Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="contact-submit">
                      Send Message <FaPaperPlane />
                    </button>
                  </div>

                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;