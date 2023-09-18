import './landing.css';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

/*
  TODO:
    - Think of and implement a programming idea to pull the viewer in,
      Need to be unique and visual interesting
    - Include a one sentence bio
*/

const LandingPage = () => {
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
        <button>
          <p id='text-scroll'>Contact me </p>
        </button>
        <button>
          <p id='text-scroll'>Resumé</p>
        </button>
        <button className='button-icon'>
          <SiGithub className='icon' />
        </button>
        <button className='button-icon'>
          <FaLinkedinIn className='icon' id='linkedin' />
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
