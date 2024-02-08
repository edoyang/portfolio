import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='header'>
      <div className="logo">
        <p>Web Developer</p>
      </div>
      <div className={`menu ${isActive ? 'active' : ''}`}>
        <Link to=" ">Home</Link>
        <Link to="/project">Projects</Link> 
        <Link to="/blog">Blog</Link> 
      </div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;