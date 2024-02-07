import React from 'react'
import './style.scss'

const index = () => {
  return (
    <div className='header'>
      <div className="logo">
        <p>Web Developer</p>
      </div>
      <div className="menu">
        <a href="App.jsx">Home</a>
        <a href="Project.jsx">Projects</a>
        <a href="Blog.jsx">Blog</a>
      </div>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default index