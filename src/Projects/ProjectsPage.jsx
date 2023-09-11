import './projects.css';
import image from '../assets/uniroute-screenshot.png';

const ProjectsPage = () => {
  return (
    <div className='projects-page'>
      <h4>Projects</h4>
      <article className='project-card'>
        <h3>UniRoute</h3>
        <div className='card-content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img src={image} alt='UniRoute webpage' />
        </div>
      </article>
    </div>
  );
};
export default ProjectsPage;
