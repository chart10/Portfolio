import './projectCard.css';
import { BsArrowReturnRight, BsBoxArrowInRight } from 'react-icons/bs';
import TechStackList from '../techStackList/techStackList';

/* TODO:
    - Deploy all projects and link them with 'Try it!'
*/

const projectCard = ({ title, id, text, url, repoURL, techStack, image }) => {
  return (
    <article className='project-card-container'>
      <div className='project-title'>
        <h2>{title}</h2>
        <TechStackList key={id} techStack={techStack} />
      </div>
      <div className='project-elements'>
        <div className='project-text'>
          <p>{text}</p>
          <div className='project-text-footer'>
            {/* <a href={url} target='_blank' className='project-site-link'>
              <BsArrowReturnRight /> Try it!
            </a> */}
            <a href={repoURL} target='_blank' className='project-src'>
              <BsArrowReturnRight /> Source Code
            </a>
          </div>
        </div>
        <img src={image} alt={`${title} Landing Page`} />
      </div>
    </article>
  );
};
export default projectCard;
