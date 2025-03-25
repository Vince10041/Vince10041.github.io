'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
            Welcome to my portfolio! I am a passionate software developer dedicated to creating elegant solutions to complex problems. With a strong focus on user experience and clean code, I strive to build applications that make a difference.
          </motion.p>
          
          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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