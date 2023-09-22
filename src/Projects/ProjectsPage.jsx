import './projects.css';
import { projects } from '../assets/projects';
import ProjectCard from '../components/projectCard/projectCard';

/*
    TODO:
    - Make a project card for Animal Memory card flip game
    - design a more visually interesting tech stack list
    - Make scrolling from card to card more visually pleasing
*/

const ProjectsPage = () => {
  return (
    <div className='page' id='projects-page'>
      <h4>Projects</h4>
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </div>
  );
};
export default ProjectsPage;
