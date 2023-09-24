import './contactMe.css';
import Button from '../button/button';
import IconButton from '../iconButton/iconButton';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

/*
  TODO:
    - Make a more interesting, visually pleasing button hover animation
*/

const ContactMe = () => {
  const emailLink = () => {
    window.location.href = 'mailto:christiantaylorhart@gmail.com';
  };
  const openResume = () => {
    window.open('/ChristianHartResume.pdf', '_blank');
  };
  const openGitHub = () => {
    window.open('https://github.com/chart10', '_blank');
  };
  const openLinkedIn = () => {
    window.open(
      'https://www.linkedin.com/in/christian-hart-7b375174/',
      '_blank'
    );
  };

  return (
    <div className='contact-bar'>
      <Button onClick={emailLink} btnText='Contact me' />
      <Button onClick={openResume} btnText='Resumé' />
      <IconButton onClick={openGitHub} icon={<SiGithub />} />
      <IconButton onClick={openLinkedIn} icon={<FaLinkedinIn />} />
    </div>
  );
};
export default ContactMe;
