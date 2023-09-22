import { ToolIcon } from '../../util/tools';

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
