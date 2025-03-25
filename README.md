# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and contact information.

## Features

- Responsive design for all device sizes
- Dark and light mode support
- Smooth scrolling and animations using Framer Motion
- Project showcase with a horizontal slider
- Contact form integrated with EmailJS
- Clean and modern UI

## Sections

- **Home**: Introduction with profile picture and social links
- **About**: Detailed information about me and my skills
- **Work**: A showcase of my projects with horizontal scrolling
- **Contact**: A form for visitors to reach out to me

## Technologies Used

- Next.js
- React
- Framer Motion for animations
- React Icons for icons
- EmailJS for contact form functionality
- CSS Modules for styling

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and an email template
   - Update the EmailJS configuration in `sections/Contact.js` with your service ID, template ID, and public key

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Adding Your Content

### Images
Add your images to the `public/images` directory and update the Image components in each section.

### Personal Information
Update text content in each section component to reflect your personal information, skills, and projects.

### Projects
Modify the projects array in `sections/Work.js` to showcase your own projects.

## Customization

- Colors: Edit the CSS variables in `app/globals.css`
- Fonts: Modify font imports in `app/layout.js`
- Layout: Adjust the CSS in each component's module file

## Deployment

This project can be deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages
- Any other platform that supports Next.js

## License

This project is open source and available under the [MIT License](LICENSE).
