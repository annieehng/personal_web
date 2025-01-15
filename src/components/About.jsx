import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../About.css";
import profileImage from "../assets/profile.png";

function About() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAboutVisible(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fadeIns = document.querySelectorAll(".fade-in");
    const handleScroll = () => {
      fadeIns.forEach((fadeIn) => {
        const rect = fadeIn.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          fadeIn.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="nav-bar">
        <Link to="/" className="no-underline">ANNIE HUANG</Link>
        <Link to="/projects" className="no-underline">PROJECTS</Link>
        <Link to="/about" className="no-underline">ABOUT ME</Link>
      </div>

      <div className={`about-container ${isAboutVisible ? "fade-in" : ""}`}>
        <div className="about-me">
          <div className="header-box">
            <h1>Nice to meet you!</h1>
            <p>
              I'm currently studying at McGill university, doing a Bachelor of Science as a Computer Science
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
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
      </div>

      <div className="experience-container fade-in">
        <h1>Experience</h1>
      </div>

      <div className="internship-section fade-in">
        <h3>My internship experience: Bell, Summer 2024</h3>
        <p>
          During my internship at Bell, I had the opportunity to work in the Finance department as part of the Data Strategy and Architecture team. 
          In this role, we focused on identifying innovative methods and strategies to optimize Finance processes across the company. 
          My primary internship project involved developing a sophisticated chatbot designed to generate SQL statements and provide summarized 
          insights in response to business users' questions about their financial datasets.
          This project incorporated function calling, prompt engineering, and natural language processing, leveraging Google Cloud Platform 
          and Gemini. Through this experience, I gained valuable hands-on expertise in building practical AI-driven solutions while 
          addressing complex business challenges and contributing to process efficiency within a large organization.
        </p>
        <p>
          One of the most rewarding experiences from my internship was designing and presenting professional company slide decks to my team, 
          managers, and vice presidents. This opportunity not only allowed me to showcase my project but also significantly boosted my confidence 
          in my work. The feedback and insights I received from experienced professionals were invaluable, providing me with actionable tips to 
          refine my presentation skills and improve my contributions. This experience honed my ability to communicate effectively in a corporate 
          setting and reinforced the importance of clear, impactful storytelling in professional environments.
        </p>
      </div>

      <div className="experience-section fade-in">
        <div>
          <h3>Languages I know:</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>SQL</li>
            <li>Bash</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h3>Classes I've Taken:</h3>
          <ul>
            <li>COMP 421: Database Systems</li>
            <li>COMP 424: Artifical Intelligence</li>
            <li>COMP 370: Data Science</li>
            <li>COMP 307: Web Development</li>
            <li>COMP 310: Operating Systems</li>
            <li>COMP 303: Software Design</li>
            <li>COMP 321: Programming Challenges</li>
            <li>COMP 251: Algorithms and Data Structures</li>
          </ul>
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
