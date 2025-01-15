import React, { useEffect, useState } from "react";
import gif1 from "../assets/greentea.gif";
import gif2 from "../assets/cats.gif";
import gif3 from "../assets/computer.gif";
import { Link } from "react-router-dom";
import "../Home.css";

function Home() {
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation for the home-container on page load
    const timer = setTimeout(() => {
      setIsHomeVisible(true);
    }, 100); // Slight delay for smoother animation

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <div className="nav-bar">
        <Link to="/" className="no-underline">ANNIE HUANG</Link>
        <Link to="/projects" className="no-underline">PROJECTS</Link>
        <Link to="/about" className="no-underline">ABOUT ME</Link>
      </div>
      <div className={`home-container ${isHomeVisible ? "fade-in" : ""}`}>
        <h2>Hi! My name is Annie</h2>
        <h2>Welcome to my personal space, make yourself at home ♡</h2>

        <div className="gif-container">
          <div className="gif-box">
            <img src={gif1} alt="Example GIF 1" className="gif" />
          </div>
          <div className="gif-box">
            <img src={gif2} alt="Example GIF 2" className="gif" />
          </div>
          <div className="gif-box">
            <img src={gif3} alt="Example GIF 3" className="gif" />
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-section">
          <h4>Reach me at</h4>
          <p><a href="mailto:annieehng@gmail.com">annieehng@gmail.com</a></p>
        </div>
        <div className="footer-section">
          <h4>Find me on</h4>
          <p>
            <a href="https://www.linkedin.com/in/annie-huangg/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/annieehng" target="_blank" rel="noopener noreferrer">Github</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://devpost.com/annieehng?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">Devpost</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
