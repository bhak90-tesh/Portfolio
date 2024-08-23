import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Ashutosh_Patil_I2K22210_Resume.pdf";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer !",
                    "ML Enthusiast !"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://www.linkedin.com/in/ashutoshpatil359"
                target="_blank"
                rel="noreferrer"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Ashutosh_Patil_I2K22210_Resume.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
