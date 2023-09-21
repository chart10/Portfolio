import './projectCard.css';
import techStackList from '../techStackList/techStackList';

const projectCard = (props) => {
  const { title, text, url, techStack, image } = props;
  return (
    <article className='project-card-container'>
      <div className='project-title'>
        <h3>{title}</h3>
        <techStackList techStack={techStack} />
      </div>
      <div className='project-elements'>
        <p>{text}</p>
        <h5 className='src-link'></h5>
        <img src={image} alt={title} />
      </div>
    </article>
  );
};
export default projectCard;
