import './skills.css';
import { skillList } from '../assets/projects';
import { ToolIcon } from '../util/tools';

const skills = () => {
  return (
    <div className='page' id='skills-page'>
      <h4 id='skills-title'>My Skills</h4>
      <div id='skills-container'>
        {skillList.map((tool, index) => {
          return (
            <div key={index} className='skill-item'>
              <ToolIcon tool={tool} className='skill-icon' />
              <h5 className='skill-title'>{tool}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default skills;
