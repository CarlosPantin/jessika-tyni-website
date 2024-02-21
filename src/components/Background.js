import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <section id="background" className="background-container">
      <div className="row">
        <div className="col-1">
          <h2>Education</h2>
        </div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>Häme University of Applied Sciences (2021-2024)</h2>
          <h3>Bachelors Degree in Business Administration</h3>
          <p className="background-information">
            In my studies I have focused on marketing and business development.
            The first year of my studies I noticed that I really have passion
            towards marketing and creative work. I am very interested in all
            types of projects as well. During my studies I have done multiple
            projects offering solutions to companies real life problems.
          </p>
        </div>
        <div className="col-4"></div>
      </div>
      <hr class="custom-line"></hr>

      <div className="row">
        <div className="col-1">
          <h2>Experience</h2>
        </div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>Business Administration Internship (14.11.2022-14.4.2023)</h2>
          <h3>Hämeen ammattikorkeakoulu Oy</h3>
          <p className="background-information">
            During my internship I have learned to use multiple Adobe Creative
            Cloud softwares such as Illustrator and Indesign. I ran a marketing
            campaign for one of the courses and I have designed various
            materials for it. For the campaign I designed and made a sticker in
            Illustrator, designed a new theme and a new logo for it, edited an
            ad and made a lot of content for social media.
          </p>
          <br />
          <p className="background-information">
            I have also written multiple texts, content for social media and I
            was also part of making and editing a video for the campaign. Part
            of my tasks as an intern I was also part of coordinating a
            forum for Janakkala and helped with other projects. In addition to
            everything else I have learned to utilize Miro and Canva platforms,
            and use photoshop. Also I know how to operate basic Office softwares
            such as Powerpoint.
          </p>
        </div>
        <div className="col-4"></div>
      </div>
    </section>
  );
};

export default Background;
