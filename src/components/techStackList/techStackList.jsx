const techStackList = (props) => {
  return (
    <div id='tech-stack-container'>
      {props.teckStack.map(() => {
        return <>Icon</>;
      })}
    </div>
  );
};
export default techStackList;
