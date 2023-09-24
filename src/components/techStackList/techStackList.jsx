import './techStackList.css';
import { ToolIcon } from '../toolIcon/toolIcon';

const techStackList = ({ techStack }) => {
  return (
    <div id='tech-stack-container'>
      {techStack.map((tool, index) => {
        return <ToolIcon key={index} tool={tool} />;
      })}
    </div>
  );
};
export default techStackList;
