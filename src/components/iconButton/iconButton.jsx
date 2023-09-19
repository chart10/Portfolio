import './iconButton.css';

const Button = (props) => {
  return (
    <button className='icon-btn' onClick={props.onClick}>
      {props.icon}
    </button>
  );
};
export default Button;
