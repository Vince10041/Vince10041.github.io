'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // You'll need to set up EmailJS with your own service ID, template ID, and public key
    // Visit https://www.emailjs.com/ to create an account and get these values
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formRef.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        setError(true);
        console.error('Email send failed:', error);
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Contact Me</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.formContainer}>
          <motion.div 
            className={styles.formIntro}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>
            <p>
              Have a project in mind or just want to say hello? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.form}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone (optional)"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {success && (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {error && (
              <div className={styles.errorMessage}>
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 