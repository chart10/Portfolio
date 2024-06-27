import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/landing/landingPage';
import Skills from './pages/skills/skills';
import ProjectsPage from './pages/projects/projectsPage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './index.css';

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
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
