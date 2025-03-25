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
              I am a passionate Software Developer with expertise in building web applications that deliver exceptional user experiences. With a solid foundation in both frontend and backend technologies, I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              My journey in software development began with a curiosity about how things work, which evolved into a passion for creating digital experiences. I believe that continual learning and adaptation are key to success in this ever-evolving field.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enhancing my skills through online courses and technical literature.
            </p>
            <div className={styles.skills}>
              <div className={styles.skill}>JavaScript</div>
              <div className={styles.skill}>React</div>
              <div className={styles.skill}>Node.js</div>
              <div className={styles.skill}>Next.js</div>
              <div className={styles.skill}>HTML/CSS</div>
              <div className={styles.skill}>MongoDB</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 