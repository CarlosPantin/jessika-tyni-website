import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <section id="background" className="background-container">
      {/* Education Section */}
      <div className="row">
        <div className="col-1">
          <h2>Education</h2>
        </div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>Häme University of Applied Sciences (2021-2024)</h2>
          <h3>Bachelor's Degree in Business Administration</h3>
          <p className="background-information">
            In my studies, I have focused on marketing and business development.
            During my first year, I realized that I have a strong passion for
            marketing and creative work. I am very interested in all types of
            projects as well. Throughout my studies, I have worked on multiple
            projects offering solutions to companies' real-life problems.
          </p>
        </div>
        <div className="col-4"></div>
      </div>
      <hr className="custom-line" />

      {/* Experience Section */}
      <div className="row">
        <div className="col-1">
          <h2>Experience</h2>
        </div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>Business Administration Internship (14.11.2022-14.4.2023)</h2>
          <h3>Hämeen ammattikorkeakoulu Oy</h3>
          <p className="background-information">
            During my internship at Häme University of Applied sciences, I had
            the opportunity to develop and apply my design and marketing skills
            across a variety of projects. I worked extensively with Adobe
            Creative Cloud, becoming proficient in tools like Illustrator and
            InDesign, which I used to create compelling visual content for
            multiple campaigns.
          </p>
          <br />
          <p className="background-information">
            One of the key projects I led was a marketing campaign to promote
            one of the courses. I was responsible for designing a new logo,
            creating a custom theme, and producing a series of materials
            including social media graphics, ads, and even a branded sticker. I
            also took part in the creation and editing of a promotional video,
            bringing my creativity and attention to detail to every step.
          </p>
          <br />
          <p className="background-information">
            Beyond design, I contributed to content creation by writing social
            media posts and promotional texts, helping to increase engagement
            and awareness for the campaign. I also worked closely with the team
            to coordinate a forum for Janakkala, gaining hands-on experience in
            event planning and communication. Throughout my internship, I
            learned to utilize various platforms, including Miro and Canva, for
            brainstorming, project management, and design, further expanding my
            creative toolkit. Additionally, I maintained strong organizational
            skills and collaborated effectively with cross-functional teams to
            deliver on deadlines.
          </p>
        </div>
        <div className="col-4"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>Conference Assistant (05.10.2022 - 07.10.2022)</h2>
          <p className="background-information">
            As a conference assistant, I was responsible for ensuring the smooth
            execution of all event operations, managing logistics, and swiftly
            addressing any issues that emerged within the team. My
            problem-solving abilities and quick thinking helped maintain a
            seamless flow throughout the event, even in high-pressure moments.
          </p>
          <br />
          <p className="background-information">
            I also played an integral role in creating a welcoming environment
            for attendees, greeting them with goodie bags, and efficiently
            responding to inquiries with a friendly and professional approach.
          </p>
          <br />
          <p className="background-information">
            In addition to my primary duties, I demonstrated flexibility by
            executing a variety of tasks as needed, showcasing my adaptability
            and versatility in managing the dynamic and fast-paced nature of the
            conference.
          </p>
        </div>
        <div className="col-4"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>Conference Assistant (19.04.2023 - 21.04.2023)</h2>
          <p className="background-information">
            As a conference assistant, I was responsible for assembling and
            leading a high-performing team, carefully selecting members based on
            their strengths and ensuring smooth collaboration throughout the
            event. In the lead-up to and during the conference, I took on the
            role of team coordinator, guiding the team with strong leadership,
            proactive problem-solving, and a focus on achieving our goals.
          </p>
          <br />
          <p className="background-information">
            I played a key role in ensuring effective communication within the
            team, setting up clear channels and organizing regular meetings to
            keep everyone aligned on tasks and expectations. My organizational
            skills were crucial in ensuring that the team stayed on track and
            that objectives were met efficiently.
          </p>
          <br />
          <p className="background-information">
            I also contributed to creating a positive and welcoming environment
            for the event attendees. This involved greeting visitors with
            enthusiasm, distributing goodie bags, and promptly addressing
            questions, all while ensuring a high level of customer service and
            professionalism.
          </p>
        </div>
        <div className="col-4"></div>
      </div>
    </section>
  );
};

export default Background;
