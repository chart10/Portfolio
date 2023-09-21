import './aboutMe.css';

/*
  TODO:
    * Write a brief but thorough synopsis of what I'm all about:
      my skills, ambitions, interests and passions
    - Give this page some visual flair
    - Add a list of tech I've worked with
*/

const AboutMe = () => {
  return (
    <div className='page' id='about-me'>
      <div id='about-me-heading'>
        <h4 id='about-me-title'>About Me</h4>
        <h5 id='about-me-subtitle'>Designer, Developer & Collaborator</h5>
      </div>
      <div id='about-me-text'>
        <p>
          I am a versatile web developer and full stack engineer based in
          Atlanta, GA, with a strong foundation in JavaScript (primarily with
          React.js), Java, Python, and MySQL. I thrive in collaborative
          environments, having successfully contributed to the development of
          several full-stack web applications within agile teams. My skills
          extends beyond the code, too. I'm dedicated to creating user-friendly,
          efficient, innovative, and beautiful web experiences. I'm also an avid
          learner, always eager to explore new technologies to enhance my skill
          set. While rooted in Atlanta, I'm open to exciting opportunities in
          new cities, ready to bring my passion for web development to any
          project. Let's build something remarkable together!
        </p>
      </div>
      <h4 id='about-me-skills'>My Skills</h4>
    </div>
  );
};
export default AboutMe;
