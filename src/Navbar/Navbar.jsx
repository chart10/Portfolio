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
            <h3>CHRISTIAN HART</h3>
          </div>
          <div className='social-links'>{/* resume, LinkedIn, GitHub */}</div>
          <div className='site-links'>
            <a href='./'>About Me</a>
            <a href='./'>Projects</a>
            <a href='./'>Resumé</a>
            <a href='./'>Contact Me</a>
          </div>
        </div>
      </nav>
      <div className='nav-border'></div>
    </>
  );
};
export default Navbar;
