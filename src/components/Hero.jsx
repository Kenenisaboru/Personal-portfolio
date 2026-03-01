import React from 'react';
import { 
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaDownload,
  FaRocket
} from 'react-icons/fa';

const Hero = ({ heroBg, typedText, personalInfo, stats, onScrollToSection }) => {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content animate-on-scroll">
            <div className="hero-text">
              <div className="hero-badges">
                <span className="badge badge-primary">Full-Stack Developer</span>
                <span className="badge badge-secondary">React Specialist</span>
                <span className="badge badge-accent">Available for Hire</span>
              </div>
              <h1>
                <span className="hero-greeting">Hello, I'm</span>
                <span className="hero-name">Kenenisa Boru</span>
              </h1>
              <h2 className="hero-title">
                Building <span className="gradient-text">Digital Solutions</span> That Make an Impact
              </h2>
              <p className="hero-tagline">{typedText}</p>
              
              <div className="hero-personal-info">
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <FaCalendarAlt />
                  <span>{personalInfo.experience}</span>
                </div>
                <div className="info-item">
                  <FaGraduationCap />
                  <span>{personalInfo.education}</span>
                </div>
              </div>

              <div className="hero-cta">
                <button className="btn btn-primary" onClick={() => onScrollToSection('projects')}>
                  <FaRocket /> View My Projects
                </button>
                <button className="btn btn-secondary" onClick={() => onScrollToSection('contact')}>
                  <FaEnvelope /> Get In Touch
                </button>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="btn btn-outline"
                >
                  <FaDownload /> Download CV
                </a>
              </div>

              <div className="hero-social">
                <a href="https://github.com/Kenenisaboru" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/kenenisa-boru" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://web.facebook.com/kanuwiz.jah" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/kenenii4/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={() => onScrollToSection('about')}>
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

