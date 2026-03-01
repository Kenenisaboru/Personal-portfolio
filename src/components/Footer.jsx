import React from 'react';

const Footer = ({ onScrollToSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <h3>Kenenisa Boru</h3>
              <p>Full-Stack Developer</p>
              <div className="footer-tagline">
                Building the future, one line of code at a time
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                {['about', 'skills', 'projects', 'opensource', 'awards', 'contact'].map(section => (
                  <button 
                    key={section} 
                    className="footer-link" 
                    onClick={() => onScrollToSection(section)}
                  >
                    {section === 'opensource' ? 'Open Source' : section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <span className="footer-link">Web Development</span>
                <span className="footer-link">Full-Stack Solutions</span>
                <span className="footer-link">API Development</span>
                <span className="footer-link">Consulting</span>
              </div>

              <div className="link-group">
                <h4>Resources</h4>
                <a 
                  href="https://github.com/Kenenisaboru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="footer-link"
                >
                  Download CV
                </a>
                <a 
                  href="https://linkedin.com/in/kenenisa-boru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe for latest projects and insights</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Kenenisa Boru. All rights reserved.</p>
            <p>Built with React & ❤️</p>
          </div>
          <div className="footer-legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

