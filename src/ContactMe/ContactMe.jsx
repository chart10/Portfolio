import './contactMe.css';

/*
  TODO:
    - add links to all socials
    - Write a sentence encouraging the viewer to reach out if 
      they are interested in utilizing my skills
    - Make a visually pleasing button that links to my email
*/

const ContactMe = () => {
  return (
    <div className='contact-me-page'>
      <button>Contact Me</button>
      <div className='social-contacts'>
        <h3> Find me at</h3>
        <>
          <a>GitHub</a>
          <a>LinkedIn</a>
          <a>Reddit</a>
          <a>Twitter</a>
        </>
      </div>
    </div>
  );
};
export default ContactMe;
