import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Recent Projects
        </h2>
        <hr />
        <p className="pb-3" style={{ textAlign: 'justify' }}>
          Here are some of the Good projects in different areas that I have implimented during me BE 
        </p>
        {/* card design */}
        <div className="row" id="ads">
        
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Angular</span>
                  <img
                    src="https://magesolution.com/wp-content/uploads/2022/07/online-shopping-1.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Angular</span>
                  <span className="card-detail-badge">MYSQL</span>
                  <span className="card-detail-badge">Spring</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="">
                      Uberloom Shopping Website
                      <span className="bouncer">Upcoming</span>
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN</span>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">NodeJs</span>
                  <span className="card-detail-badge">ExpressJs</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="">IOPE LearnNet</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/bhak90-tesh/IOPE-LearnNet/tree/main/TyprojectDiploma-master"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5 w-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://wealthserving.com/wp-content/uploads/2022/05/Scholarship.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">AppScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="">Notable Outgoing Student</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/bhak90-tesh/Internship-Project-PICT">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Machine Learning</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGX-7dBOLywLIFlt07MQdHJCFRDCE302LZyQ&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Streamlite</span>
                  <span className="card-detail-badge">ML</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="">Traffic Ride Prediction</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/bhak90-tesh/TaxiDriver-Prediction/tree/main/FullML/traffic">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Tableau</span>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">SQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="">Bank Loan Portfolio</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/bhak90-tesh/BankLoan-Portfolio/tree/main/Bank%20Loan%20Tableau">
                    View
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Deep Learning</span>
                  <img
                    src="https://growbilliontrees.com/cdn/shop/articles/custard-apple-tree-plantation-grow-billion-trees.jpg?v=1712306961"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Convolutional Neural Network</span>
                  <span className="card-detail-badge">Keras</span>
                                  </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="">Custard Apple Disease Detection</h5>
                    <span className="bouncer">Upcoming</span>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
