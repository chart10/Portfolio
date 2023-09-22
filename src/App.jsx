import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import LandingPage from './Landing/LandingPage';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/skills';
import ProjectsPage from './Projects/ProjectsPage';
import ContactMe from './ContactMe/ContactMe';
import Navbar from './Navbar/Navbar';
import Footer from './components/footer/footer';

/* 
TODO:
  - Build something interesting to go on the landing page
  - Build mobile friendly layout for the site
*/
function App() {
  return (
    <div id='page'>
      <Navbar />
      <LandingPage />
      <Skills />
      <ProjectsPage />
      <Footer />
      <div id='contact-me-page'>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
