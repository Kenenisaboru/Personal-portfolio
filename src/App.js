import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { 
  FaEnvelope, FaFacebookF, FaInstagram, FaGithub, FaPhone, 
  FaLinkedin, FaArrowUp, FaExternalLinkAlt, FaCode, FaServer, 
  FaDatabase, FaTools, FaAward, FaHospital, 
  FaSchool, FaGraduationCap, FaLaptopCode, FaUser, FaCertificate,
  FaMapMarkerAlt, FaCalendarAlt, FaDownload, FaStar, FaRocket,
  FaLightbulb, FaShieldAlt, FaBolt, FaChartLine
} from 'react-icons/fa';
import { 
  SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, 
  SiMysql, SiGit, SiTailwindcss, SiPython, SiCplusplus, 
  SiHtml5, SiCss3, SiSpringboot, SiPostgresql, SiRedux,
} from 'react-icons/si';

// Import images
import profileImage from './images/photo_2025-10-01_12-53-30.jpg';
import hucissaCert from './images/photo_2025-04-27_06-58-00.jpg';
import zemenayCert from './images/photo_2025-12-26_18-19-46.jpg';
import heroBg from './images/photo-1451187580459-43490279c0fa.jfif';

const App = () => {
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [scrollVisible, setScrollVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef(null);

  const tagline = 'Beginner Full-Stack Developer specializing in React, Node.js, and modern web technologies. Passionate about creating impactful digital solutions.';

  const skills = [
    { name: 'React', level: '60%', icon: <SiReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'JavaScript', level: '52%', icon: <SiJavascript />, color: '#F7DF1E', category: 'Language' },
    { name: 'Node.js', level: '68%', icon: <SiNodedotjs />, color: '#339933', category: 'Backend' },
    { name: 'Express', level: '55%', icon: <SiExpress />, color: '#000000', category: 'Backend' },
    { name: 'MongoDB', level: '22%', icon: <SiMongodb />, color: '#47A248', category: 'Database' },
    { name: 'MySQL', level: '78%', icon: <SiMysql />, color: '#4479A1', category: 'Database' },
    { name: 'PostgreSQL', level: '8%', icon: <SiPostgresql />, color: '#336791', category: 'Database' },
    { name: 'Git/GitHub', level: '74%', icon: <SiGit />, color: '#F05032', category: 'Tools' },
    { name: 'TailwindCSS', level: '30%', icon: <SiTailwindcss />, color: '#06B6D4', category: 'Frontend' },
    { name: 'Redux', level: '5%', icon: <SiRedux />, color: '#764ABC', category: 'Frontend' },
    { name: 'Python', level: '18%', icon: <SiPython />, color: '#3776AB', category: 'Language' },
    { name: 'C++', level: '30%', icon: <SiCplusplus />, color: '#00599C', category: 'Language' },
    { name: 'Spring Boot', level: '40%', icon: <SiSpringboot />, color: '#6DB33F', category: 'Backend' },
    { name: 'HTML5', level: '78%', icon: <SiHtml5 />, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', level: '55%', icon: <SiCss3 />, color: '#1572B6', category: 'Frontend' },
  ];

  const projects = [
    {
      title: 'Hospital Management System',
      desc: 'A comprehensive full-stack hospital management system with patient management, appointment scheduling, medical records, and billing integration.',
      link: 'https://github.com/Kenenisaboru/Hospital-management-system',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'JWT', 'Redux'],
      featured: true,
      type: 'Full-Stack',
      icon: <FaHospital />,
      demo: '#',
      status: 'Completed',
      highlights: ['Real-time updates', 'Secure authentication', 'Multi-role access']
    },
    {
      title: 'School Management System',
      desc: 'Complete educational platform with separate frontend/backend. Features include student management, attendance tracking, grade management, parent portal.',
      frontend: 'https://github.com/Kenenisaboru/school-managment-system-frontend',
      backend: 'https://github.com/Kenenisaboru/School-manegment-system-backend',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Material-UI', 'JWT'],
      featured: true,
      type: 'Full-Stack',
      icon: <FaSchool />,
      demo: '#',
      status: 'Completed',
      highlights: ['Parent portal', 'Automated reports', 'Mobile responsive']
    },
  
    {
      title: 'Frontend Tricks Collection',
      desc: 'Curated collection of modern frontend techniques, animations, UI components, and best practices.',
      link: 'https://github.com/Kenenisaboru/All-my-frontend-trick',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Animations', 'Responsive Design'],
      featured: false,
      type: 'Frontend',
      icon: <FaLaptopCode />,
      demo: '#',
      status: 'Ongoing',
      highlights: ['Reusable components', 'Performance tips', 'Accessibility patterns']
    },
    {
      title: 'Data Structure & Algorithm Library',
      desc: 'Comprehensive C++ library implementing common data structures and algorithms with detailed documentation.',
      link: 'https://github.com/Kenenisaboru/Data-structure-and-Algorithm',
      tech: ['C++', 'STL', 'Algorithms', 'Data Structures', 'Unit Testing'],
      featured: false,
      type: 'Algorithm',
      icon: <FaGraduationCap />,
      demo: '#',
      status: 'Completed',
      highlights: ['Performance benchmarks', 'Detailed docs', 'Test cases']
    }
  ];

  const awards = [
    {
      title: 'Web Development Excellence Award',
      org: 'HUCCISA — 2024',
      desc: 'Recognized for outstanding performance and innovation in modern web development practices.',
      icon: <FaCertificate />,
      image: hucissaCert,
      type: 'certificate',
      date: 'December 2024',
      verification: '#',
      skills: ['React', 'Node.js', 'Full-Stack Development']
    },
    {
      title: 'Hackathon Winner - Finance App',
      org: 'Zemenay Hackathon — 2025',
      desc: 'First place winner for developing an innovative personal finance management application.',
      icon: <FaAward />,
      image: zemenayCert,
      type: 'hackathon',
      date: 'September 2025',
      verification: '#',
      skills: ['UI/UX Design', 'Problem Solving', 'Team Leadership']
    },
    {
      title: 'Frontend Development Certification',
      org: 'freeCodeCamp — 2024',
      desc: 'Certified Frontend Developer with comprehensive projects in responsive design and JavaScript.',
      icon: <FaCode />,
      image: null,
      type: 'certificate',
      date: 'November 2024',
      verification: 'https://freecodecamp.org/certification',
      skills: ['Responsive Design', 'JavaScript', 'Web Accessibility']
    },
    {
      title: 'Introduction to Web Development',
      org: 'HUCCISA — 2025',
      desc: 'Completed intensive web development course covering HTML5, CSS3, JavaScript.',
      icon: <FaCertificate />,
      image: hucissaCert,
      type: 'certificate',
      date: 'July 2023',
      verification: '#',
      skills: ['HTML5', 'CSS3', 'JavaScript Basics']
    }
  ];

  // Simplified Open Source Contributions
  const openSourceContributions = [
    {
      title: 'Hospital Management System',
      description: 'Developed the frontend interface for a hospital management system using React and Tailwind CSS.',
      link: 'https://github.com/Kenenisaboru/Hospital-management-system',
      contributions: ['Built responsive patient management interface', 'Implemented real-time updates', 'Enhanced user experience'],
      tech: ['React', 'Tailwind CSS', 'JavaScript']
    },
    {
      title: 'School Management System',
      description: 'Contributed to both frontend and backend of a comprehensive school management system.',
      link: 'https://github.com/Kenenisaboru/school-managment-system-frontend',
      contributions: ['Developed student management module', 'Created parent portal interface', 'Implemented REST APIs'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB']
    },
   
  ];

  const stats = [
    { label: 'Projects Completed', value: '18+', icon: <FaRocket /> },
    { label: 'Years Experience', value: '1.5+', icon: <FaCalendarAlt /> },
    { label: 'Technologies', value: '8+', icon: <FaCode /> },
    { label: 'GitHub Repositories', value: '25+', icon: <FaGithub /> },
    { label: 'Code Commits', value: '500+', icon: <FaDatabase /> },
    { label: 'Certifications', value: '4+', icon: <FaCertificate /> }
  ];

  const personalInfo = {
    location: 'Haramaya University, Harar',
    availability: 'Available for full-time & freelance',
    experience: '1.5+ years in web development',
    education: 'BSc in Information Science'
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index += 1;
      if (index === tagline.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [tagline]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }

      const sections = ['about', 'skills', 'projects', 'opensource', 'awards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openImageModal = (imageSrc, title = 'Certificate') => {
    setSelectedImage({ src: imageSrc, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const getProjectTypeColor = (type) => {
    switch(type) {
      case 'Full-Stack': return '#6366f1';
      case 'Frontend': return '#10b981';
      case 'Backend': return '#f59e0b';
      case 'Algorithm': return '#8b5cf6';
      case 'DevOps': return '#ec4899';
      default: return '#6b7280';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return '#10b981';
      case 'In Progress': return '#3b82f6';
      case 'Ongoing': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const frontendSkills = skills.filter(skill => skill.category === 'Frontend');
  const backendSkills = skills.filter(skill => skill.category === 'Backend');
  const languageSkills = skills.filter(skill => skill.category === 'Language');
  const databaseSkills = skills.filter(skill => skill.category === 'Database');
  const toolSkills = skills.filter(skill => skill.category === 'Tools');

  return (
    <div className="app">
      {selectedImage && (
        <div className="certificate-modal" onClick={closeImageModal}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-modal-close" onClick={closeImageModal}>×</button>
            <div className="certificate-modal-header">
              <h3>{selectedImage.title}</h3>
            </div>
            <img src={selectedImage.src} alt={selectedImage.title} className="certificate-modal-image" />
            <div className="certificate-modal-info">
              <div className="certificate-modal-details">
                <p>Click and drag to zoom | Scroll to view details</p>
              </div>
              <div className="certificate-modal-actions">
                <a 
                  href={selectedImage.src} 
                  download 
                  className="download-certificate-btn"
                >
                  <FaDownload /> Download Certificate
                </a>
                <button className="btn btn-secondary" onClick={closeImageModal}>
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {scrollVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo" onClick={() => scrollToSection('hero')}>
              Kenenisa <span className="logo-highlight">Boru</span>
            </h1>
            
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
            
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              {['about', 'skills', 'projects', 'opensource', 'awards', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    className={`nav-link ${activeSection === section ? 'active' : ''}`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section === 'opensource' ? 'Open Source' : section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className="nav-indicator"></span>
                  </button>
                )
              )}
              <a 
                href="https://github.com/Kenenisaboru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-github"
              >
                <FaGithub /> GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

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
                  <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                    <FaRocket /> View My Projects
                  </button>
                  <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
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
        
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Scroll Down</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Get to Know Me</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Passionate developer dedicated to creating exceptional digital experiences
            </p>
          </div>
          
          <div className="about-content animate-on-scroll">
            <div className="profile-section">
              <div className="profile-image-container">
                <div className="profile-image-wrapper" onClick={() => openImageModal(profileImage, 'Profile Photo')}>
                  <img 
                    src={profileImage} 
                    alt="Kenenisa Boru - Full Stack Developer" 
                    className="profile-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-image-overlay">
                    <FaUser className="profile-icon-fallback" />
                    <span>View Profile</span>
                  </div>
                  <div className="profile-status">
                    <span className="status-dot"></span>
                    <span>{personalInfo.availability}</span>
                  </div>
                </div>
                
                <div className="profile-quick-info">
                  <div className="info-card">
                    <FaCalendarAlt />
                    <div>
                      <h4>2+ Years</h4>
                      <p>Experience</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <FaGraduationCap />
                    <div>
                      <h4>BSc IS</h4>
                      <p>Education</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="about-text">
                <h3>Passionate Full-Stack Developer</h3>
                <p>
                  I'm a dedicated Full-Stack Developer with expertise in modern web technologies 
                  and a passion for building scalable, user-centric applications. My journey combines 
                  formal education with continuous self-improvement through hands-on projects and 
                  industry best practices.
                </p>
                <p>
                  With comprehensive experience across frontend and backend technologies, I specialize 
                  in creating complete web solutions from database design to user interface implementation. 
                  My projects range from enterprise systems to creative experiments, always focusing on 
                  performance, security, and user experience.
                </p>
                
                <div className="about-highlights">
                  <div className="highlight">
                    <div className="highlight-icon">
                      <FaLightbulb />
                    </div>
                    <div>
                      <h4>Innovative Solutions</h4>
                      <p>Creative problem-solving with modern technologies</p>
                    </div>
                  </div>
                  <div className="highlight">
                    <div className="highlight-icon">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h4>Quality Focus</h4>
                      <p>Clean code, testing, and best practices</p>
                    </div>
                  </div>
                  <div className="highlight">
                    <div className="highlight-icon">
                      <FaBolt />
                    </div>
                    <div>
                      <h4>Fast Delivery</h4>
                      <p>Efficient development with agile methodologies</p>
                    </div>
                  </div>
                  <div className="highlight">
                    <div className="highlight-icon">
                      <FaChartLine />
                    </div>
                    <div>
                      <h4>Scalable Architecture</h4>
                      <p>Future-proof solutions that grow with your needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="about-cta">
                  <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                    <FaEnvelope /> Let's Work Together
                  </button>
                  <a 
                    href="https://github.com/Kenenisaboru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <FaGithub /> View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">My Expertise</span>
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              A comprehensive toolkit for modern web development across all layers
            </p>
          </div>

          <div className="skills-category-grid animate-on-scroll">
            <div className="skills-category">
              <h3 className="category-title">
                <FaCode /> Frontend Development
              </h3>
              <div className="skills-grid">
                {frontendSkills.map((skill, index) => (
                  <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: skill.level, backgroundColor: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">
                <FaServer /> Backend Development
              </h3>
              <div className="skills-grid">
                {backendSkills.map((skill, index) => (
                  <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: skill.level, backgroundColor: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">
                <FaDatabase /> Languages & Databases
              </h3>
              <div className="skills-grid">
                {[...languageSkills, ...databaseSkills].map((skill, index) => (
                  <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: skill.level, backgroundColor: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">
                <FaTools /> Tools & DevOps
              </h3>
              <div className="skills-grid">
                {toolSkills.map((skill, index) => (
                  <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: skill.level, backgroundColor: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              A showcase of my recent work and technical contributions
            </p>
          </div>

          <div className="projects-grid animate-on-scroll">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-card-header">
                  <div className="project-icon" style={{ color: getProjectTypeColor(project.type) }}>
                    {project.icon}
                  </div>
                  <div className="project-badges">
                    <span 
                      className="project-type" 
                      style={{ backgroundColor: getProjectTypeColor(project.type) }}
                    >
                      {project.type}
                    </span>
                    <span 
                      className="project-status"
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="project-featured">
                        <FaStar /> Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="project-card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.desc}</p>
                  
                  {project.highlights && (
                    <div className="project-highlights">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">
                          <FaBolt /> {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-footer">
                  <div className="project-links">
                    {project.link ? (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub /> View Code
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link demo"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </>
                    ) : (
                      <>
                        <a
                          href={project.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaCode /> Frontend
                        </a>
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaServer /> Backend
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link demo"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta animate-on-scroll">
            <p>Want to see more? Check out my complete portfolio on GitHub</p>
            <a 
              href="https://github.com/Kenenisaboru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGithub /> View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Simplified Open Source Section */}
      <section id="opensource" className="section opensource">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Community</span>
            <h2 className="section-title">Open Source Contributions</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Active contributor to open source projects with meaningful contributions
            </p>
          </div>

          <div className="github-stats animate-on-scroll">
            <div className="github-stats-grid">
              <div className="github-stat">
                <FaGithub className="stat-icon" />
                <div className="stat-content">
                  <h3>20+</h3>
                  <p>Public Repositories</p>
                </div>
              </div>
              <div className="github-stat">
                <FaCode className="stat-icon" />
                <div className="stat-content">
                  <h3>500+</h3>
                  <p>Code Commits</p>
                </div>
              </div>
              <div className="github-stat">
                <FaStar className="stat-icon" />
                <div className="stat-content">
                  <h3>6</h3>
                  <p>Featured Projects</p>
                </div>
              </div>
              <div className="github-stat">
                <FaRocket className="stat-icon" />
                <div className="stat-content">
                  <h3>4+</h3>
                  <p>Open Source Contributions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contributions-grid animate-on-scroll">
            {openSourceContributions.map((contribution, index) => (
              <div key={index} className="contribution-card">
                <div className="contribution-header">
                  <h3>{contribution.title}</h3>
                  <span className="contribution-badge">
                    <FaGithub /> Open Source
                  </span>
                </div>
                
                <div className="contribution-body">
                  <p className="contribution-desc">{contribution.description}</p>
                  
                  <div className="contribution-details">
                    <h4>Key Contributions:</h4>
                    <ul>
                      {contribution.contributions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="contribution-tech">
                    {contribution.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="contribution-links">
                    <a 
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub /> View Repository
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="opensource-cta animate-on-scroll">
            <div className="cta-content">
              <h3>Want to Collaborate?</h3>
              <p>I'm always open to contributing to meaningful open source projects.</p>
              <a 
                href="https://github.com/Kenenisaboru"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub /> View My GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="section awards">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Recognition</span>
            <h2 className="section-title">Certifications & Awards</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Professional recognition and achievements in web development
            </p>
          </div>

          <div className="awards-grid animate-on-scroll">
            {awards.map((award, index) => (
              <div 
                key={award.title} 
                className="award-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="award-card-header">
                  <div className="award-icon">
                    {award.icon}
                  </div>
                  <div className="award-badge" data-type={award.type}>
                    {award.type === 'hackathon' ? '🏆 Winner' : 
                     award.type === 'certificate' ? '📜 Certified' : '🏅 Award'}
                  </div>
                </div>

                <div className="award-card-body">
                  <h3 className="award-title">{award.title}</h3>
                  <div className="award-meta">
                    <span className="award-org">{award.org}</span>
                    <span className="award-date">
                      <FaCalendarAlt /> {award.date}
                    </span>
                  </div>
                  <p className="award-desc">{award.desc}</p>
                  
                  {award.skills && (
                    <div className="award-skills">
                      {award.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="award-card-footer">
                  {award.image ? (
                    <button 
                      className="btn btn-primary view-certificate"
                      onClick={() => openImageModal(award.image, award.title)}
                    >
                      <FaCertificate /> View Certificate
                    </button>
                  ) : (
                    <a 
                      href={award.verification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt /> Verify Online
                    </a>
                  )}
                  {award.verification && award.image && (
                    <a 
                      href={award.verification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="certificates-showcase animate-on-scroll">
            <h3>Certificate Gallery</h3>
            <div className="certificate-gallery">
              {awards.filter(a => a.image).map((award, index) => (
                <div 
                  key={index}
                  className="certificate-thumbnail"
                  onClick={() => openImageModal(award.image, award.title)}
                >
                  <img src={award.image} alt={award.title} />
                  <div className="certificate-thumbnail-overlay">
                    <FaCertificate />
                    <span>{award.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                      onClick={() => scrollToSection(section)}
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
    </div>
  );
};

export default App;