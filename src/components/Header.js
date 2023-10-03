import React from "react";
import "./Header.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-scroll";
import Download from "./Download";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header-container">
      <ParticlesBg type="square" num={7} bg={true} />
      <nav className="nav">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={1000}>
              <a href="">About</a>
            </Link>
          </li>
          <li>
            <Link to="background" smooth={true} duration={1000}>
              <a href="">Background</a>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1000}>
              <a href="">Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Jessika Tyni</h1>
        <p>
          I'm a final year Business Administration student from Häme University
          Of Applied Sciences, who dreams of a career in business development
          and marketing. The first year of my studies I noticed that I really
          have passion towards marketing and creative work. I am very interested
          in all types of projects as well. I am alwas looking for opportunities
          to broaden my knowledge on my field and learn about new things.
        </p>
        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/jessika-tyni-806222220"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <Download />
        </div>
      </div>
    </header>
  );
};

export default Header;
