import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  FaGithub,
  FaCode,
  FaDatabase,
  FaAward,
  FaHospital,
  FaSchool,
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaCalendarAlt,
  FaRocket
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
import heroBg from './images/istockphoto-2170146497-612x612.webp';
import skillsBg from './images/premium_photo-1682124651258-410b25fa9dc0.avif';
import CertificateModal from './components/CertificateModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [scrollVisible, setScrollVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);

  const tagline = 'Full-Stack Developer specializing in React, Node.js, and modern web technologies. Passionate about creating impactful digital solutions.';

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
      title: 'Hackathon Participant - Finance App',
      org: 'Zemenay Hackathon — 2025',
      desc: 'Best competitor in a finance app hackathon.',
      icon: <FaAward />,
      image: zemenayCert,
      type: 'hackathon',
      date: 'September 2025',
      verification: '#',
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
      date: 'July 2025',
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
    { label: 'Projects Completed', value: '12+', icon: <FaRocket /> },
    { label: 'Years Experience', value: '2+', icon: <FaCalendarAlt /> },
    { label: 'Technologies', value: '8+', icon: <FaCode /> },
    { label: 'GitHub Repositories', value: '25+', icon: <FaGithub /> },
    { label: 'Code Commits', value: '500+', icon: <FaDatabase /> },
    { label: 'Certifications', value: '4+', icon: <FaCertificate /> }
  ];

  const personalInfo = {
    location: 'Haramaya University, Harar',
    availability: 'Available for full-time & freelance',
    experience: '2+ years in web development',
    education: 'BSc in Information Science'
  };

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index += 1;
      if (index === tagline.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [tagline, isLoading]);

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
    if (isLoading) return;
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
  }, [isLoading]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <h2 className="loader-name">Kenenisa Boru</h2>
          <p className="loader-subtitle">Full-Stack Developer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <CertificateModal selectedImage={selectedImage} onClose={closeImageModal} />
      <ScrollToTopButton visible={scrollVisible} onClick={scrollToTop} />

      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        onScrollToSection={scrollToSection}
      />

      <Hero
        heroBg={heroBg}
        typedText={typedText}
        personalInfo={personalInfo}
        stats={stats}
        onScrollToSection={scrollToSection}
      />

      <About
        personalInfo={personalInfo}
        profileImage={profileImage}
        onScrollToSection={scrollToSection}
        onOpenImageModal={openImageModal}
      />

      <Skills skills={skills} bgImage={skillsBg} />

      <Projects projects={projects} />

      <OpenSource contributions={openSourceContributions} />

      <Awards awards={awards} onOpenImageModal={openImageModal} />

      <Contact />

      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
};

export default App;