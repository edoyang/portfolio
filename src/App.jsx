import "./App.scss";
import {Link} from "react-router-dom";

const App = () => {
  return (
    <>
    <header>
      <a href="Work.js">Work</a>
      <a href="Blog.js">Blog</a>
      <a href="Contact.js">Contact</a>
    </header>

    <div className="hero">
      <div className="left">
        <h1 className="title">Hi, I am Edo, Web Developer</h1>
        <p>Lorem</p>
        <a href="#" ><button className="primary-button">Download Resume</button></a>
      </div>
      <div className="right">
        <img src="#" alt="??"></img>
      </div>
    </div>

    <div className="projects">
      <p>Projects</p>
      <div className="project">
        <div className="project-img">
          <img src="/" alt="example"></img>
        </div>
        <div className="project-details">
          <h1 className="project-title">Designing dashboards</h1>
          <div className="project-side">
            <p className="project-date">2020</p>
            <p className="project-tech">MERN</p>
          </div>
          <p className="project-description">
            Example
          </p>
        </div>
      </div>
    </div>

    <div className="recent-post">
      <h1>Recent Post here</h1>
    </div>

    <footer>
      <div className="brands">
        <a href="/">Facebook</a>
        <a href="/">LinkedIn</a>
        <a href="/">Instagram</a>
        <a href="/">X</a>
      </div>
      <p>Credit for John</p>
    </footer>
    </>
  )
}

export default App