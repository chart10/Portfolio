import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import LandingPage from './Landing/LandingPage';
import AboutMe from './AboutMe/AboutMe';
import Skills from './skills/skills';
import ProjectsPage from './Projects/ProjectsPage';
import Navbar from './Navbar/Navbar';
import Footer from './components/footer/footer';

/* 
TODO:
  - projectCard: Deploy all projects and link them with 'Try it!'
  - ContactMe: Make a more interesting, visually pleasing button hover animation
  - LandingPage: Think of and implement a programming idea to pull the viewer in,
      Need to be unique and visual interesting
  - LandingPage: Add code to prepopulate Email Subject line
  - ProjectsPage: Make a project card for Animal Memory card flip game
  - Util/tools: Design a card for tech icons that displays its name on hover

  - Build something interesting to go on the landing page
  - Build mobile friendly layout for the site
*/
function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage />
        <Skills />
        <ProjectsPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
