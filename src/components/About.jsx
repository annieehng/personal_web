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
            <h1>Nice to meet you!</h1>
            <p>I'm currently studying at McGill university, doing a Bachelor of Science as a Computer Science
              Major and Psychology Minor 
            </p>
            <p>
              I was born and raised in Vancouver, British Columbia and moved to Montreal for university. In my free time,
              I enjoy spending time with my friends and family through game nights and exploring the city by
              visiting new cafes ☕ 
            </p>
            <p>
              I'm looking to continue my career in Vancouver, Toronto, or Montreal!
            </p>
          </div>
          <img src={profileImage} alt="DISHcovery project" className="about-image" />
        </div>
        <div className="experience-header">
          <h1>Experience</h1>
        </div>

        <div className="internship-section">
          <h3>My internship experience: Bell, Summer 2024</h3>
          <p>
            I got to work for Bell under their Finance internship and was placed into their Data Strategy and Architecture team.
          </p>

        </div>

        <div className="experience-section">
          <div>
            <h3>Languages I know:</h3>
            <ul>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h3>Classes I've Taken:</h3>
            <ul>
              <li>COMP 202</li>
            </ul>
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

export default About;
