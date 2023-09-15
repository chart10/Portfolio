import './projects.css';
import uniroute from '../assets/uniroute-screenshot.png';
import creaturedb from '../assets/creaturedb-screenshot.png';
import {
  SiJavascript,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiPython,
  SiDocker,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
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
              Tech Stack:{' '}
              <a title='React.js'>
                <SiReact />
              </a>
              <a title='Python'>
                <SiPython />
              </a>
              <a title='Python Flask'>
                <SiFlask />
              </a>
              <a title='Node.js'>
                <SiNodedotjs />
              </a>
              <a title='MySQL'>
                <GrMysql />
              </a>
              <a title='Docker'>
                <SiDocker />
              </a>
            </p>
          </div>
          <div className='project-elements'>
            <p>
              UniRoute is a single-page, full stack web app designed to
              streamline weekly commute schedules for students. Built with two
              other students using Agile development, UniRoute incorporates a
              client-side React interface with Google Maps API, a MySQL
              database, and a back end server running on the Python Flask
              framework.
            </p>
            <img src={uniroute} alt='UniRoute Webpage' />
          </div>
        </div>
      </article>
      <article className='project-card'>
        <div className='card-content'>
          <div className='project-title'>
            <h3>Creature DB</h3>
            <p>
              <span title='Vanilla Javascript'>
                <a>
                  <SiJavascript />
                </a>
              </span>
              <a title='Python'>
                <SiPython />
              </a>
              <a title='Python Flask'>
                <SiFlask />
              </a>
              <a title='Node.js'>
                <SiNodedotjs />
              </a>
              <a title='MySQL'>
                <GrMysql />
              </a>
            </p>
          </div>
          <div className='project-elements'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src={creaturedb} alt='UniRoute Webpage' />
          </div>
        </div>
      </article>
    </div>
  );
};
export default ProjectsPage;
