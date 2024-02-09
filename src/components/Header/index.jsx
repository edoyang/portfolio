import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import useTypingEffect from '../../utils/TypingEffect';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const words = ['Web Developer', 'Fullstack Developer', 'UI/UX Developer'];
  const { text, cursorVisible } = useTypingEffect(words, 100, 50);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='header'>
      <div className="logo">
        <Link to=" "><p>{text}<span className={`cursor ${cursorVisible ? 'blink' : ''}`}>|</span></p></Link>
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