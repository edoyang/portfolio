import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/ProjectPage";
import Blog from "./pages/Blog";
import { useTheme } from "./utils/DarkMode";
import DisplayProject from "./pages/DisplayProject";
import DisplayPost from "./pages/DisplayPost";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark-mode" : ""}>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="blog" element={<Blog />} />
        <Route path="display-project/:id" element={<DisplayProject />} />
        <Route path="display-post/:id" element={<DisplayPost />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
