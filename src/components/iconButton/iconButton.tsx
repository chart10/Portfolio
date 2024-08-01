import './IconButton.css';
import { ReactElement } from 'react';
interface Props {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  icon: ReactElement;
}
const Button = (props: Props) => {
  return (
    <button className='icon-btn' onClick={props.onClick}>
      <div className='icon-wrapper'>{props.icon}</div>
    </button>
  );
};
export default Button;
