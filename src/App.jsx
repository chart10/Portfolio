import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LandingPage from './Landing/LandingPage';
import AboutMe from './AboutMe/AboutMe';
import ProjectsPage from './Projects/ProjectsPage';
import ContactMe from './ContactMe/ContactMe';

/* 
TODO:
  - Figure out website layout
  - Design navbar
  - Design website pages:
    - Landing page
    - About me page
    - Projects page
    - Contact me page
  - Find interesting design schemas and extra touches
  - Build a React Native mobile version
*/
function App() {
  return (
    <>
      <h4>Hello, and welcome to my website! - Christian Hart</h4>
      <LandingPage />
      <AboutMe />
      <ProjectsPage />
      <ContactMe />
    </>
  );
}

export default App;
