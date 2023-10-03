import React from "react";
import "./Header.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-scroll";
import Download from "./Download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="header-container">
      <ParticlesBg type="circle" num={15} bg={true} />
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
              <a href="">Skills</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Jessika Tyni</h1>
        <p>
          Hello! I'm Jessika, and I'm passionate about creating
          opportunities for businesses to thrive in today's competitive
          landscape. With a blend of strategic marketing expertise and business
          development acumen, I've dedicated my career to driving growth and
          achieving results. In my portfolio, you'll find a curated collection
          of skills and projects I have done.
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
