import './contactMe.css';
import Button from '../components/button/button';
import IconButton from '../components/iconButton/iconButton';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

/*
  TODO:
    - Figure out how to prevent contact me from being hidden by nav
    - add links to all socials
    - Write a sentence encouraging the viewer to reach out if 
      they are interested in utilizing my skills
    - Make a visually pleasing button that links to my email
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
