import './landing.css';
import ContactMe from '../ContactMe/ContactMe';
import portrait from '../assets/christian-hart-portrait2.jpg';

/*
  TODO:
    - Think of and implement a programming idea to pull the viewer in,
      Need to be unique and visual interesting
    - Add code to prepopulate Email Subject line
*/

const LandingPage = () => {
  return (
    <section className='page' id='landing-page'>
      <div id='name-and-title'>
        <h1 id='landing-name'>Christian Hart</h1>
        <p id='landing-name-subtitle'>Web Developer & Software Engineer</p>
      </div>
      <div id='content-row'>
        <div id='headshot'>
          <img src={portrait} alt="Christian's Headshot" />
        </div>
        <div id='content-col'>
          <p className='landing-text'>
            I am a web developer and full stack engineer from Atlanta, Georgia.
            I have a strong passion for building meaningful experiences for
            people through web design. I work with JavaScript, React, Python,
            Java, and MySQL and I'm constantly adding new tools to my kit. Hit
            me up if you'd like to collaborate!
          </p>
          <ContactMe />
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
