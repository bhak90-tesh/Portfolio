import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import myphoto from "./myphoto.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={myphoto}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Passionate and highly motivated as a Undergraduate , eager to embark on a rewarding career in the IT industry. I possess a Good foundation in programming, problem-solving, and a keen interest in emerging technologies like Machine Learning, Data Science, Web Devlopment . If you are looking for a dedicated and adaptable IT professional with a strong foundation and a hunger to learn and grow, let's connect and explore how I can add value to your organization.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
