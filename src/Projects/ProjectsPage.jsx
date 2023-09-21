import './projects.css';
import uniroute from '../assets/uniroute-screenshot.png';
import creaturedb from '../assets/creaturedb-screenshot.png';
import { BsArrowReturnRight, BsBoxArrowInRight } from 'react-icons/bs';
import { GrMysql } from 'react-icons/gr';
import {
  SiJavascript,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiPython,
  SiDocker,
} from 'react-icons/si';
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
      <article className='project-card'>
        <div className='card-content'>
          <div className='project-title'>
            <h3>UniRoute</h3>
            <p>
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
            <div className='project-text'>
              <p>
                UniRoute is a single-page, full stack web app designed to
                streamline weekly commute schedules for students. Built with two
                other students using Agile development, UniRoute incorporates a
                client-side React interface with Google Maps API, a MySQL
                database, and a back end server running on the Python Flask
                framework.
              </p>
              <div className='project-text-footer'>
                <p className='project-src'>
                  <a
                    href='https://github.com/chart10/Portfolio'
                    target='_blank'
                  >
                    <BsArrowReturnRight /> Source Code
                  </a>
                </p>
                <p className='project-site-link'>
                  <a href=''>
                    Try it! <BsBoxArrowInRight />
                  </a>
                </p>
              </div>
            </div>
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
            <div className='project-text'>
              <p>
                Creature DB is a full stack website built as a veterinary
                records management tool, allowing customers to view the medical
                records of their pets and healthcare professionals to edit and
                update record details.
              </p>
              <div className='project-text-footer'>
                <p className='project-src'>
                  <a
                    href='https://github.com/chart10/Portfolio'
                    target='_blank'
                  >
                    <BsArrowReturnRight /> Source Code
                  </a>
                </p>
                <p className='project-site-link'>
                  <a href=''>
                    Try it! <BsBoxArrowInRight />
                  </a>
                </p>
              </div>
            </div>
            <img src={creaturedb} alt='CreatureDB Webpage' />
          </div>
        </div>
      </article>
    </div>
  );
};
export default ProjectsPage;
