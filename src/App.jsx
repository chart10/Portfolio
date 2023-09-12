import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LandingPage from './Landing/LandingPage';
import AboutMe from './AboutMe/AboutMe';
import ProjectsPage from './Projects/ProjectsPage';
import ContactMe from './ContactMe/ContactMe';
import Navbar from './Navbar/Navbar';

/* 
TODO:
  - Figure out website layout
  - Design navbar
    (static navbar remains at top of page)
    (left side: my name, right side: navigation options)
  - Design website pages:
    (Each page should take up the entire vw/vh)
    (Include a button that auto-scrolls to the next page)
    - Landing page
    - About me page
    - Projects page
      (Each project should be an item in a carousel)
    - Contact me page
  - Find interesting design schemas and extra touches
    (A loading animation on initial render would be nice)
  - Build a React Native mobile version
  - Consider adding a page for the tech I've worked with
*/
function App() {
  return (
    <div id='page'>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <ProjectsPage />
      <ContactMe />
    </div>
  );
}

export default App;
