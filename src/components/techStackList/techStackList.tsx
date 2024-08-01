import './TechStackList.css';
import { ToolIcon } from '../toolIcon/toolIcon.tsx';

interface Props {
  techStack: string[];
}

const techStackList = ({ techStack }: Props) => {
  return (
    <div id='tech-stack-container'>
      {techStack.map((tool, index) => {
        return <ToolIcon key={index} tool={tool} />;
      })}
    </div>
  );
};
export default techStackList;
