import './landing.css';

/*
  TODO:
    - Think of and implement a programming idea to pull the viewer in,
      Need to be unique and visual interesting
    - Include a one sentence bio
*/

const LandingPage = () => {
  return (
    <div className='page' id='landing-page'>
      <h4 id='landing-name'>Christian Hart</h4>
      <h5 id='landing-name-subtitle'>Web Developer & Software Engineer</h5>
      <p className='info-content'>
        I am a web developer and full stack engineer from Atlanta, Georgia. I
        have a strong passion for building meaningful experiences for people
        through web design. I work with JavaScript, React, Python, Java, and
        MySQL and I'm constantly adding new tools to my kit. Hit me up if you'd
        like to collaborate!
      </p>
      <button>
        <p id='text-scroll'>Contact me </p>
      </button>
    </div>
  );
};
export default LandingPage;
