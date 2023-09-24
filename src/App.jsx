import LandingPage from './pages/Landing/LandingPage';
import Skills from './pages/skills/skills';
import ProjectsPage from './pages/Projects/ProjectsPage';
import Navbar from './components/Navbar/Navbar';
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
