import React from "react";
import "./Projects.css";
import train from "../assets/train.jpg";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Skills and Technologies</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Adobe Illustrator</h3>
          <p>
            I designed and executed an icon for a marketing campaign and as well
            as a overall badge
          </p>
          <img src={train} alt="Train" className="train-image" />
        </div>

        <div className="project-card">
          <h3>Marketing Campaign, planning and executing</h3>
          <p>
            I was in charge of planning and executing a small marketing campaign
            for a course in order to get more enrolments on to the course. I
            also prepared all the materials for the campaign: posters,
            interviewing videos, posts on social media and held an presentation
            to a student group about the course.
          </p>
        </div>

        <div className="project-card">
          <h3>Microsoft Office 365</h3>
          <p>
            As a student as well as during my internship I have gained a good
            knowledge and understanding of the different softwares that
            Microsoft Office 365 offers.
          </p>
        </div>

        <div className="project-card">
          <h3>Adobe InDesign</h3>
          <p>
            During my internship I learned to use Adobe InDesign while making
            changes into already existing marketing material. In addition,
            during one of my courses, I used Adobe InDesign to make a prototype brochure for a company.
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
