'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './Work.module.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include product listings, shopping cart, user authentication, payment processing, and order management.',
    image: '/images/project1.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API']
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media dashboard for monitoring and analyzing social media performance. Includes real-time analytics, content scheduling, and engagement tracking.',
    image: '/images/project1.png',
    technologies: ['Vue.js', 'Firebase', 'Chart.js', 'Social Media APIs']
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application that helps teams organize and track their work. Features include task assignment, progress tracking, deadline notifications, and team chat.',
    image: '/images/project1.png',
    technologies: ['React', 'Redux', 'Node.js', 'Socket.io', 'PostgreSQL']
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'A mobile application for tracking fitness activities, setting goals, and monitoring progress. Includes workout plans, nutrition tracking, and progress analytics.',
    image: '/images/project1.png',
    technologies: ['React Native', 'Firebase', 'Health APIs', 'D3.js']
  }
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    scrollToProject(activeProject + 1 === projects.length ? 0 : activeProject + 1);
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    scrollToProject(activeProject - 1 < 0 ? projects.length - 1 : activeProject - 1);
  };
  
  const scrollToProject = (index) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * index;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>My Work</h2>
          <div className={styles.underline}></div>
        </motion.div>
        
        <div className={styles.sliderContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevProject}
            aria-label="Previous project"
          >
            <FaArrowLeft />
          </button>
          
          <div className={styles.projectsSlider} ref={containerRef}>
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`${styles.projectCard} ${index === activeProject ? styles.active : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setActiveProject(index);
                  scrollToProject(index);
                }}
              >
                <div className={styles.projectContent}>
                  <div className={styles.projectImage}>
                    {/* Replace with actual images */}
                    {/* <div className={styles.imagePlaceholder}>
                      <p>Project Image</p>
                    </div> */}
                    {/* When you have images, uncomment this and add your images to public/images */}
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={500} 
                      height={300} 
                      className={styles.projectImg}
                    />
                  </div>
                  
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.technology}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextProject}
            aria-label="Next project"
          >
            <FaArrowRight />
          </button>
        </div>
        
        <div className={styles.pagination}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${index === activeProject ? styles.active : ''}`}
              onClick={() => {
                setActiveProject(index);
                scrollToProject(index);
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 