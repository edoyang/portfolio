import Project from "../components/Project/index.jsx";
import RecentPost from "../components/RecentPost/index.jsx";
import { useTheme } from "../utils/DarkMode.jsx";
import "./Home.scss";

const Home = () => {
  const { theme } = useTheme();

  const imageSuffix = theme === "dark" ? "-dark" : "";

  return (
    <div>
      <div className="hero">
        <div className="left sliding-left">
          <h1 className="title">Hi, I am Edoardo</h1>
          <a href="Resume.pdf" download>
            <button className="primary-button">Download Resume</button>
          </a>
        </div>
        {/* <div className="right sliding-left">
          <img src="hero.jpg" alt="hero" />
        </div> */}

        <div className="brands">
          <a href="https://www.facebook.com/edoyangz" target="_blank">
            <img src={`brands/Facebook${imageSuffix}.svg`} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/edoyangz/" target="_blank">
            <img src={`brands/Instagram${imageSuffix}.svg`} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/edo-yang-574219249/"
            target="_blank"
          >
            <img src={`brands/Linkedin${imageSuffix}.svg`} alt="Linkedin" />
          </a>

          <a href="https://github.com/edoyang" target="_blank">
            <img src={`brands/Github${imageSuffix}.svg`} alt="Github" />
          </a>
        </div>
      </div>
      <div className="sliding-left">
        <Project />
      </div>
      <div className="blog">
        <h2 className="font-title">Blog</h2>
        <div className="sliding-left">
          <RecentPost />
        </div>
      </div>
    </div>
  );
};

export default Home;
