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
              I’m a final-year Business Administration student at Häme
              University of Applied Sciences, with a strong passion for business
              development and marketing. During my first year of studies, I
              discovered my enthusiasm for marketing and creative work, which
              has shaped my career aspirations. I’m highly motivated by the
              opportunity to work on diverse projects and am always eager to
              expand my knowledge and learn new things in my field.
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
