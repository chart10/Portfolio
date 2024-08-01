import './Button.css';

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  btnText: string;
}

const Button = (props: Props) => {
  return (
    <button className='btn' onClick={props.onClick}>
      <span id='text-scroll'>{props.btnText}</span>
    </button>
  );
};
export default Button;
