import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Projects.css";

// Add placeholder images for the projects
import project1Image from "../assets/mcgillhappenings.png";
import project2Image from "../assets/dangogo.png";
import project3Image from "../assets/contouringyou.png";
import project4Image from "../assets/superseater.png";
import project5Image from "../assets/dishcovery.png";

function Projects() {
  // Scroll animation handler
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
    <div className="projects-page">
      <div className="nav-bar">
        <Link to="/" className="no-underline">ANNIE HUANG</Link>
        <Link to="/projects" className="no-underline">PROJECTS</Link>
        <Link to="/about" className="no-underline">ABOUT ME</Link>
      </div>

      <div className="project-container">
        {/* First Project */}
        <div className="project-card visible">
            <div className="project-content" style={{ flexDirection: "row-reverse", textAlign: "left" }}>
            <img src={project1Image} alt="DISHcovery project" className="project-image" />
            <div className="project-text">
                <h2>McGill Happenings Website Project</h2>
                <p>
                Aspiring Chef? Bored at home? Up for a challenge? DISHcovery offers 
                weekly cooking challenges with a food-related theme, and participants 
                can share their recipes made with the theme.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View Github Link
                </a>
            </div>
            </div>
        </div>

        {/* Second Project */}
        <div className="project-card visible">
            <div className="project-content" style={{ textAlign: "right"}}>
            <img src={project2Image} alt="SuperSeater project" className="project-image" />
            <div className="project-text">
                <h2>Dangogo! Website Build</h2>
                <p>
                Teachers can have trouble when they need to make new seating charts 
                that appeal to every student. SuperSeater will generate the most ideal 
                seating plan based on student preferences.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View Github Link
                </a>
            </div>
            </div>
        </div>

        {/* Third Project */}
        <div className="project-card fade-in">
            <div className="project-content" style={{ flexDirection: "row-reverse", textAlign: "left" }}>
            <img src={project3Image} alt="Project 3" className="project-image" />
            <div className="project-text">
                <h2>ContouringYOU Application Build</h2>
                <p>
                Description for Project 3. This project will dynamically fade in as the user scrolls down the page.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View Github Link →
                </a>
            </div>
            </div>
        </div>

        {/* Fourth Project */}
        <div className="project-card fade-in">
            <div className="project-content" style={{ textAlign: "right"}}>
            <img src={project4Image} alt="Project 4" className="project-image" />
            <div className="project-text">
                <h2>SuperSeater Website Build</h2>
                <p>
                    Teachers can have trouble when they need to make new seating charts 
                    that appeal to every student. SuperSeater will generate the most ideal 
                    seating plan based on student preferences.                
                </p>
                <p>

                </p>
                <a href="https://github.com/annieehng/SuperSeater" target="_blank" rel="noopener noreferrer">
                View Github Link
                </a>
            </div>
            </div>
        </div>

        {/* Fifth Project */}
        <div className="project-card fade-in">
            <div className="project-content" style={{ flexDirection: "row-reverse", textAlign: "left" }}>
            <img src={project5Image} alt="Project 4" className="project-image" />
            <div className="project-text">
                <h2>DISHcovery Website Build</h2>
                <p>
                    Aspiring Chef? Bored at home? Up for a challenge? DISHcovery offers 
                    weekly cooking challenges with a food-related theme, and participants 
                    can share their recipes made with the theme.                
                </p>
                <p>
                    This was created using
                </p>

                <a href="https://github.com/annieehng/DISHcovery" target="_blank" rel="noopener noreferrer">
                View Github Link
                </a>
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
    </div>
  );
}

export default Projects;
