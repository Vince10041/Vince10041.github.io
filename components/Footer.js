'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h3>Portfolio</h3>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <FaHeart className={styles.heart} /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 