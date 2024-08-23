import React from "react";
import { MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { LiaUniversitySolid } from "react-icons/lia";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <div className="education" id="education">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Education Details
      </h2>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2007-2019"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">School</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Saint Joseph's English Medium School, Barshi
          </h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2019-2022"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<LiaUniversitySolid />}
        >
          <h3 className="vertical-timeline-element-title">Diploma</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Institute of Petrochemical Engineering, Lonere 
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2022-2025"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">BE</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune Institute Of Computer Technology , Pune 
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
