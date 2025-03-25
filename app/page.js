'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../sections/Home';
import About from '../sections/About';
import Work from '../sections/Work';
import Contact from '../sections/Contact';
import styles from './page.module.css';

const Page = () => {
  // Page transition effect
  useEffect(() => {
    const handlePageTransition = (event) => {
      event.preventDefault();
      const href = event.currentTarget.href;
      
      // Add your horizontal transition animation here
      document.querySelector('body').style.opacity = 0;
      
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      link.addEventListener('click', handlePageTransition);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handlePageTransition);
      });
    };
  }, []);

  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </motion.main>
  );
};

export default Page;
