import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='navbar-menu'>
          <a id='navbar-name' href='#landing-page'>
            CHRISTIAN HART
          </a>
          <div className='site-links'>
            <a href='#landing-page'>About Me</a>
            <a href='#projects-page'>Projects</a>
            <a href='#contact-me-page'>Contact Me</a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
