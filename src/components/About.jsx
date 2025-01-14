import React from "react";
import { Link } from "react-router-dom";
import "../About.css";
import profileImage from "../assets/profile.png";


function About() {
  return (
    <div className="about-page">
      <div className="nav-bar">
        <Link to="/" className="no-underline">ANNIE HUANG</Link>
        <Link to="/projects" className="no-underline">PROJECTS</Link>
        <Link to="/about" className="no-underline">ABOUT ME</Link>
      </div>

      <div className="about-container">

        <div className="about-me">
          <div className="header-box">
            <h1>nice to meet you!</h1>
            <p>i'm currently studying at McGill university, doing a Bachelor of Science as a Computer Science
              Major and Psychology Minor.
            </p>
          </div>
          <img src={profileImage} alt="DISHcovery project" className="about-image" />

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
    </div>
  );
}

export default About;
