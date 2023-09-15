import './aboutMe.css';

/*
  TODO:
    * Write a brief but thorough synopsis of what I'm all about:
      my skills, ambitions, interests and passions
    - Give this page some visual flair
*/

const AboutMe = () => {
  return (
    <div className='page' id='about-me'>
      <h4>About Me</h4>
      <h3 className='career=roles'>Developer & Designer</h3>
      <div className='info-content'>
        <p>
          I am a web developer and full stack engineer from Atlanta, Georgia. I
          love the outdoors, rock climbing, and slaying monsters in the Lands
          Between.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
