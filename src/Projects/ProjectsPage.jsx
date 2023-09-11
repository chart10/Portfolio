import './projects.css';
import image from '../assets/uniroute-screenshot.png';

/*
    TODO:
    * Make a project card for CreatureDB
    - Make a project card for Animal Memory card flip game
    - design a more visually interesting tech stack list
    - Make scrolling from card to card more visually pleasing
*/

const ProjectsPage = () => {
  return (
    <div className='projects-page'>
      <h4>Projects</h4>
      <article className='project-card'>
        <div className='card-content'>
          <div className='project-title'>
            <h3>UniRoute</h3>
            <p>
              Tech Stack: <a>React.js</a> • <a>Python Flask</a> • <a>Node.js</a>{' '}
              • <a>MySQL</a>
            </p>
          </div>
          <div className='project-elements'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src={image} alt='UniRoute Webpage' />
          </div>
        </div>
      </article>
    </div>
  );
};
export default ProjectsPage;
