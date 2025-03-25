'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className={styles.underline}></div>
        </motion.div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Replace with your actual image */}
            {/* <div className={styles.imagePlaceholder}>
              <p>Your Image</p>
            </div> */}
            {/* When you have an image, uncomment this and add your image to public/images */}
            <Image 
              src="/images/profile.jpg" 
              alt="About Me" 
              width={400} 
              height={400} 
              className={styles.aboutImage}
            />
          </motion.div>
          
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I am Vince, a software developer from the University of Hong Kong with Computer Science degree. I am a passionate and professional software developer who always strives to deliver the best solutions.
            </p>
            <p>
              Self-motivated and quick-learner has always been my characteristics. Being adaptive to new technologies and methodologies is one of my strengths. Makes me a great team player and tackle problems with a calm and collected manner.
            </p>
            <p>
              Under the world of fast-paced and evolving software development, I am always eager to explore new technologies and equip myself with the latest skills. With the usage of new technologies, I am able to deliver the best and tailored product to my clients.
            </p>
            <div className={styles.skills}>
              <div className={styles.skill}>JavaScript</div>
              <div className={styles.skill}>Python</div>
              <div className={styles.skill}>SQL</div>
              <div className={styles.skill}>Java</div>
              <div className={styles.skill}>HTML/CSS</div>
              <div className={styles.skill}>No SQL</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 