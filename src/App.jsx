import "./App.scss";
import Header from "./components/Header";
import {Link} from "react-router-dom";
import Project from './components/Project/index.jsx';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Header />
    <div className="hero">
      <div className="left">
        <h1 className="title">Hi, I am Edo, Web Developer</h1>
        <p className="description">Hello! I'm an international IT student with a deep passion for web development and software engineering. Coding is more than my field of study, it's what I genuinely love doing. I strive for clean, efficient code that enhances software usability and functionality. Through exploring data algorithms, I've honed my problem-solving skills, aiming to innovate and solve real-world problems. My goal is to combine my coding skills and enthusiasm for technology to create impactful applications. Looking forward to making a difference in the tech world together.</p>
        <a href="Resume.pdf" download><button className="primary-button">Download Resume</button></a>
      </div>
      <div className="right">
        <img src="hero.jpg" alt="hero"></img>
      </div>
    </div>
    <div className="blog">
      <p>Recent Post here</p>
      <div className="recent-post">
        <div className="post">
          <h2 className="post-title">Creating API on Dotnet</h2>
          <div className="post-details">
            <p className="post-date">2020</p>
            <hr className="vertical-line"/>
            <p className="post-detail">.NET Core</p>
          </div>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum, aliquam molestias reiciendis animi illum voluptatum accusamus culpa at cum similique quod ipsa iusto ad architecto sint delectus deserunt sed.</p>
        </div>
      </div>
    </div>
    <Project />
    <Footer />
    </>
  )
}

export default App