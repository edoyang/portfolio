import React from "react";
import { useTheme } from "../../utils/DarkMode";
import "./style.scss";

const Footer = () => {
  const { theme } = useTheme();

  const imageSuffix = theme === "dark" ? "-dark" : "";

  return (
    <footer>
      <div className="brands">
        <a href="https://www.facebook.com/edoyangz" target="_blank">
          <img
            src={`/portfolio/brands/Facebook${imageSuffix}.svg`}
            alt="Facebook"
          />
        </a>
        <a href="https://www.instagram.com/edoyangz/" target="_blank">
          <img
            src={`/portfolio/brands/Instagram${imageSuffix}.svg`}
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/edo-yang-574219249/"
          target="_blank"
        >
          <img
            src={`/portfolio/brands/Linkedin${imageSuffix}.svg`}
            alt="Linkedin"
          />
        </a>
        <a href="https://github.com/edoyang" target="_blank">
          <img
            src={`/portfolio/brands/Github${imageSuffix}.svg`}
            alt="Github"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
