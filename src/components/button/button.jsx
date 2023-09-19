import './button.css';

const Button = (props) => {
  return (
    <button className='btn' onClick={props.onClick}>
      <p id='text-scroll'>{props.btnText}</p>
    </button>
  );
};
export default Button;
