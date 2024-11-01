import Project from "../components/Project/index.jsx";
import RecentPost from "../components/RecentPost/index.jsx";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="left sliding-left">
          <h1 className="title">Hi, I am Edoardo</h1>
          <a href="Resume.pdf" download>
            <button className="primary-button">Download Resume</button>
          </a>
        </div>
        <div className="right sliding-left">
          <img src="hero.jpg" alt="hero" />
        </div>
      </div>
      <div className="sliding-left">
        <Project />
      </div>
      <div className="blog">
        <p>Recent Post here</p>
        <div className="sliding-left">
          <RecentPost />
        </div>
      </div>
    </div>
  );
};

export default Home;
