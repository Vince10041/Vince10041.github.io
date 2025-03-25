'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY;

      // Check which section is in view
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + height - 100) {
            setActiveSection(section);
          }
        }
      });

      // Add background to navbar when scrolled
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">Vince Lam.</Link>
      </div>
      <motion.div 
        className={styles.navLinks}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ul>
          <li className={activeSection === 'home' ? styles.active : ''}>
            <a onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li className={activeSection === 'about' ? styles.active : ''}>
            <a onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li className={activeSection === 'work' ? styles.active : ''}>
            <a onClick={() => scrollToSection('work')}>Work</a>
          </li>
          <li className={activeSection === 'contact' ? styles.active : ''}>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar; 