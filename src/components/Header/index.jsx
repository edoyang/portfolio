import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import useTypingEffect from '../../utils/TypingEffect';
import { useTheme } from '../../utils/DarkMode';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const words = ['Web Developer', 'Fullstack Developer', 'UI/UX Developer'];
  const { text, cursorVisible } = useTypingEffect(words, 100, 50);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null); // Ref for the header element

  const themeIconStyle = {
    transform: theme === 'dark' ? 'rotate(360deg)' : 'rotate(0deg)',
  };

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  // Function to handle click outside of header
  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsActive(false); // Toggle isActive only if clicked outside
    }
  };

  // useEffect to add and remove the event listener
  useEffect(() => {
    if (isActive) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    // Cleanup function to remove event listener
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isActive]); // Re-bind event listener if isActive changes

  return (
    <div className='header'>
      <div className="logo">
        <Link to="/"><p>{text}<span className={`cursor ${cursorVisible ? 'blink' : ''}`}>|</span></p></Link>
      </div>
      <div className={`menu ${isActive ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link> 
        <Link to="/blog">Blog</Link>
        <div className="theme-switcher" style={themeIconStyle} onClick={toggleTheme}>
          <img src={theme === 'light' ? 'light-mode.svg' : 'dark-mode.svg'} alt="theme"/>
        </div>
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
