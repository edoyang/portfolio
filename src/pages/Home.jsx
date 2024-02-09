import Project from '../components/Project/index.jsx';
import RecentPost from '../components/RecentPost/index.jsx';
import './Home.scss';

const Home = () => {
  return (
    <div>
    <div className="hero">
      <div className="left sliding-left">
        <h1 className="title">Hi, I am Edo, Web Developer</h1>
        <p className="description">Hello! I'm an international IT student with a deep passion for web development and software engineering. Coding is more than my field of study, it's what I genuinely love doing. I strive for clean, efficient code that enhances software usability and functionality. Through exploring data algorithms, I've honed my problem-solving skills, aiming to innovate and solve real-world problems. My goal is to combine my coding skills and enthusiasm for technology to create impactful applications. Looking forward to making a difference in the tech world together.</p>
        <a href="Resume.pdf" download><button className="primary-button">Download Resume</button></a>
      </div>
      <div className="right sliding-right">
        <img src="hero.jpg" alt="hero"></img>
      </div>
    </div>
    <div className="blog">
      <p>Recent Post here</p>
      <div className="sliding-left">
        <RecentPost />
      </div>
    </div>
      <div className="sliding-left">
        <Project />
      </div>
    </div>
  )
}

export default Home