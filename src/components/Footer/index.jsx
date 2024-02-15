import React from 'react';
import { useTheme } from '../../utils/DarkMode';
import './style.scss';

const Footer = () => {
  const { theme } = useTheme(); 

  const imageSuffix = theme === 'dark' ? '-dark' : '';

  return (
    <footer>
      <div className="brands">
        <a href="https://www.facebook.com/edoyangz" target='_blank'>
          <img src={`brands/Facebook${imageSuffix}.svg`} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/edoyangz/" target='_blank'>
          <img src={`brands/Instagram${imageSuffix}.svg`} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/edo-yang-574219249/" target='_blank'>
          <img src={`brands/Linkedin${imageSuffix}.svg`} alt="Linkedin" />
        </a>
      </div>
      <p>Credit for <a href="https://www.figma.com/@tinjo">Tinjo Thomas</a> for the UI</p>
    </footer>
  );
};

export default Footer;
