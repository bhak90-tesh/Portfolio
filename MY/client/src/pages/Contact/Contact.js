import React from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6 className="contact-heading">Contact With</h6>
                    <div className="contact-icons">
                      <a
                        href="https://www.linkedin.com/in/ashutoshpatil359"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsLinkedin className="ms-2 linkedin-icon contact-icon" />
                      </a>
                      <a
                        href="https://github.com/bhak90-tesh"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsGithub className="ms-2 github-icon contact-icon" />
                      </a>
                      <a
                        href="https://www.instagram.com/imashutoshpatil/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaSquareInstagram className="ms-2 instagram-icon contact-icon" />
                      </a>
                      <a
                        href="https://www.facebook.com/ashutosh.patil.5249/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsFacebook className="ms-2 facebook-icon contact-icon" />
                      </a>
                      <a
                        href="mailto:ashutoshpatil167502@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FcGoogle className="ms-2 google-icon contact-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
