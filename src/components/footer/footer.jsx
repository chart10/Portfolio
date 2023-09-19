import './footer.css';
import {
  BsChatHeart,
  BsBoxArrowInRight,
  BsArrowReturnRight,
} from 'react-icons/bs';

const footer = () => {
  return (
    <div className='footer'>
      <p>
        Website designed by me! <BsChatHeart />
      </p>
      <p id='website-src'>
        <a href='https://github.com/chart10/Portfolio' target='_blank'>
          <BsArrowReturnRight /> Source Code
        </a>
      </p>
    </div>
  );
};
export default footer;
