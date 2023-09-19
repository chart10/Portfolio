import './landing.css';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import Button from '../components/button/button';
import IconButton from '../components/iconButton/iconButton';

/*
  TODO:
    - Think of and implement a programming idea to pull the viewer in,
      Need to be unique and visual interesting
    - Include a one sentence bio
    - Add code to prepopulate Email Subject line
*/

const LandingPage = () => {
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
    <div className='page' id='landing-page'>
      <div id='name-and-title'>
        <h4 id='landing-name'>Christian Hart</h4>
        <h5 id='landing-name-subtitle'>Web Developer & Software Engineer</h5>
      </div>
      <div id='content-row'>
        <div id='headshot'>
          <img src='' alt="Christian's Headshot" />
        </div>
        <div id='content-col'>
          <p className='landing-content'>
            I am a web developer and full stack engineer from Atlanta, Georgia.
            I have a strong passion for building meaningful experiences for
            people through web design. I work with JavaScript, React, Python,
            Java, and MySQL and I'm constantly adding new tools to my kit. Hit
            me up if you'd like to collaborate!
          </p>
          <div className='contact-bar'>
            <Button onClick={emailLink} btnText='Contact me' />
            <Button onClick={openResume} btnText='Resumé' />
            <IconButton onClick={openGitHub} icon={<SiGithub />} />
            <IconButton onClick={openLinkedIn} icon={<FaLinkedinIn />} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
