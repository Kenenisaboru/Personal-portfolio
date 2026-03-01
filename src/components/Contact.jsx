import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebookF, FaInstagram, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="contact-content animate-on-scroll">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:kenenisaboru998@gmail.com">kenenisaboru998@gmail.com</a>
                <p>Typically responds within 24 hours</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+251983701428">+251 983 701 428</a>
                <p>Available Mon-Fri, 9AM-6PM EAT</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Haramaya University, Harar</p>
                <p>Available for remote work worldwide</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a href="https://github.com/Kenenisaboru" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/kenenisa-boru" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://web.facebook.com/kanuwiz.jah" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/kenenii4/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form-header">
              <h3>Start a Project</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible</p>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <FaEnvelope /> Send Message
              </button>
            </form>

            <div className="contact-availability">
              <h4>
                <FaCalendarAlt /> Current Availability
              </h4>
              <p>✅ Available for new projects</p>
              <p>✅ Open to full-time & contract work</p>
              <p>✅ Remote positions preferred</p>
              <p>✅ Open for internships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

