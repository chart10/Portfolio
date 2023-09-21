const techStackList = ({ techStack }) => {
  return (
    <div id='tech-stack-container'>
      {techStack.map((icon, index) => {
        return (
          <a href='' key={index}>
            {icon}
          </a>
        );
      })}
    </div>
  );
};
export default techStackList;
