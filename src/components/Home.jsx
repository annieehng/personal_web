import React from "react";
import gif1 from "../assets/greentea.gif";
import gif2 from "../assets/cats.gif";
import gif3 from "../assets/computer.gif";
import "../Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="nav-bar">
        <a href="https://example.com" className="no-underline">ANNIE HUANG</a>
        <a href="https://example.com" className="no-underline">PROJECTS</a>
        <a href="https://example.com" className="no-underline">ABOUT ME</a>       
      </div>
      <div className="home-container">
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
        {/* Footer Section */}
        <footer className="footer">
            <div className="footer-section">
                <h4>Reach me at</h4>
                <p><a href="mailto:annieehng@gmail.com">annieehng@gmail.com</a></p>
            </div>
            <div className="footer-section">
                <h4>Find me on</h4>
                <p>
                    <a href="https://linkedin.com">LinkedIn</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com">Github</a>
                </p>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
