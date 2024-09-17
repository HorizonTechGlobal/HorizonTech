import React from "react";
import "./Projects.css";
import project_1 from "../../assets/gosolo.jpg";
import comingsoon from "../../assets/comingsoon.jpg";

import gosolo_logo from "../../assets/gosolologo.png";
import comingsoon_icon from "../../assets/comingsoon-icon.png";

const Projects = () => {
  return (
    <div className="projects">
      <a href="https://www.gosolo.com" target="_blank">
        <div className="project">
          <img src={project_1} alt="project1" />
          <div className="caption">
            <img src={gosolo_logo} alt="projectIcon1" />
            <p>Go Solo: Travel Website</p>
          </div>
        </div>
      </a>
      <a href="https://www.notfound.com" target="_blank">
        <div className="project">
          <img src={comingsoon} alt="project2" />
          <div className="caption">
            <img src={comingsoon_icon} alt="projectIcon2" />
            <p>Coming Soon</p>
          </div>
        </div>
      </a>
      {/* <div className="project">
        <img src={comingsoon} alt="project3" />
        <div className="caption">
          <img src={comingsoon_icon} alt="projectIcon3" />
          <p>Coming Soon</p>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
