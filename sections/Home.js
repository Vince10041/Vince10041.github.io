'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageContainer}>
            {/* Replace with your actual image */}
            {/* <div className={styles.imagePlaceholder}>
              <p>Your Image</p>
            </div> */}
            {/* When you have an image, uncomment this and add your image to public/images */}
            <Image 
              src="/images/profile.jpg" 
              alt="Profile" 
              width={250} 
              height={250} 
              className={styles.profileImage}
            />
          </div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Software Developer
          </motion.h1>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am Vince, a software developer based in Hong Kong! Find out more <a className={styles.textLink} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>about me</a> and <a className={styles.textLink} onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>my work</a> below.
          </motion.p>
          
          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://github.com/Vince10041" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vince-lam-abb557234/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 