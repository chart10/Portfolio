import './navbar.css';
const Navbar = () => {
  /* 
    TODO: 
    - Include links to my resume, LinkedIn page, GitHub page
    - Add 
    */
  return (
    <>
      <nav>
        <div className='navbar-menu'>
          <div className='my-name'>
            <h3>
              <a href='#landing-page'>CHRISTIAN HART</a>
            </h3>
          </div>
          <div className='social-links'>{/* resume, LinkedIn, GitHub */}</div>
          <div className='site-links'>
            <a href='#about-me'>About Me</a>
            <a href='#projects-page'>Projects</a>

            <a href='#contact-me-page'>Contact Me</a>
          </div>
        </div>
      </nav>
      {/* <div className='nav-border'></div> */}
    </>
  );
};
export default Navbar;
