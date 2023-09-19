import './landing.css';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

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
    window.open('src/assets/ChristianHartResume.pdf', '_blank');
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
      <div id='headshot'>
        <img src='' alt="Christian's Headshot" />
      </div>
      <p className='info-content'>
        I am a web developer and full stack engineer from Atlanta, Georgia. I
        have a strong passion for building meaningful experiences for people
        through web design. I work with JavaScript, React, Python, Java, and
        MySQL and I'm constantly adding new tools to my kit. Hit me up if you'd
        like to collaborate!
      </p>
      <div className='contact-bar'>
        <button onClick={emailLink}>
          <p id='text-scroll'>Contact me </p>
        </button>
        <button onClick={openResume}>
          <p id='text-scroll'>Resumé</p>
        </button>
        <button className='button-icon' onClick={openGitHub}>
          <SiGithub className='icon' />
        </button>
        <button className='button-icon' onClick={openLinkedIn}>
          <FaLinkedinIn className='icon' id='linkedin' />
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
