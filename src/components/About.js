import React from "react";
import "./About.css";
import mypicture from "../assets/Jessika-modified.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <img src={mypicture} alt="Carlos" className="about-image" />
          </div>
          <div className="col-3">
            <h2>About Me</h2>

            <p className="aboutme-text">
              I'm a final year Business Administration student from Häme
              University Of Applied Sciences, who dreams of a career in business
              development and marketing. The first year of my studies I noticed
              that I really have passion towards marketing and creative work. I
              am very interested in all types of projects as well. I am alwas
              looking for opportunities to broaden my knowledge on my field and
              learn about new things.
            </p>
           
          </div>
          <div className="col-4"></div>
        </div>
        <h2 className="sys">Personal Strengths</h2>
        <div className="row">
          <div className="col-2">
            <div className="skill-card">
              <h3>Person</h3>
              <ul>
                <li>Problem Solver</li>
                <li>Perseverant</li>
                <li>Hard Working</li>
                <li>Passionate</li>
                <li>Team Work</li>
                <li>Fast Learner</li>
                <li>Attitude</li>
                <li>Focused</li>
                <li>Self Improvement</li>
                <li>Organisation Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
