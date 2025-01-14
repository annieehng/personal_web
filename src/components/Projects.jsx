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
                At McGill, there are a ton events that happen on campus, but it's so difficult to know what, when, and where
                they are without following a bunch of Instagram accounts. With our website, it will show all McGill events 
                displayed in one simple calendar. 
                </p>
                <p>
                For my Web Development class at McGill, our group project was to build a website with proper security and 
                deploy it publicly once finished. Using React, Node.js, Javascript, CSS, and HTML, we built a login system for 
                McGill students to submit events and have access to a dashboard of their future and past events. 
                Accessible to the public, we use Google's Calendar API and display all events that have been submitted.
                </p>
                <div>
                  <a href="https://mcgill-happenings.vercel.app/" target="_blank" rel="noopener noreferrer">
                  View Website Link
                  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View Github Link
                  </a>
                </div>
                
            </div>
            </div>
        </div>

        {/* Second Project */}
        <div className="project-card visible">
            <div className="project-content" style={{ textAlign: "right"}}>
            <img src={project2Image} alt="SuperSeater project" className="project-image" />
            <div className="project-text">
                <h2>dangogo Website Build</h2>
                <p>
                Don't you hate it when you want a recipe from a food blog website, but it's just covered in ads and 
                stories about the person's life and the dish? With our application, you can submit a food blog link and
                get the instructions and recipe right away! 
                </p>
                <p>
                My team and I created an application to make it easier to read food recipes from blogs without having to 
                scroll through all the ads and text. Using BeautifulSoup to scrape through the website link with the recipe 
                and display the instructions and recipe simply all on one page. We use ChatGPT prompt engineering to help make
                substitutions to the recipe to allow the user to edit dietary restrictions and portion sizes.
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
                Do you have troule deciding what makeup best suits your facial features? With the click of a button, 
                our application will scan your face, determine what type of face shape you have, and display a countour
                and blush pattern directly on your face! Just grab those makeup brushes and follow the pattern.
                </p>
                <p>
                My team and I built a facial recognication program trained to identify the users face shape and place the 
                best fitted makeup contour look on their face using Mediapipe’s 468 facial landmarks, dlib’s 68 landmarks, 
                OpenCV, and Python. All projects were to implement the use of artificial intelligence.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View Github Link
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
                My team and I built a web app that generates classroom seating charts based on 
                student profiles in our own database using Python, HTML, and CSS through Django, 
                and won second place overall hack against 150+ students.
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
                My team and I designed and created this website design to inspire food lovers and chefs using HTML, CSS, 
                Javascript and won best UX/UI design at McGill’s largest 36 hour hackathon, made up of 300+ students, 
                and sponsored by 10+ tech companies.   
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
