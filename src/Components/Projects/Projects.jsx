import React from "react";
import "./Projects.css";
import gosolo from "../../assets/gosolo.jpg";
import comingsoon from "../../assets/comingsoon.jpg";
import odysseyopus from "../../assets/odysseyopus.png";

import gosolo_logo from "../../assets/gosolologo.png";
import comingsoon_icon from "../../assets/comingsoon-icon.png";
import odysseyopus_logo from "../../assets/odysseyopus_logo.png";

const Projects = () => {
  return (
    <div className="projects">
      <a href="https://www.gtps.me" target="_blank">
        <div className="project">
          <img src={gosolo} alt="GTPS" />
          <div className="caption">
            <img src={gosolo_logo} alt="projectIcon1" />
            <p>GTPS: Travel App</p>
          </div>
        </div>
      </a>
      <a href="https://www.odysseyopus.com" target="_blank">
        <div className="project">
          <img src={odysseyopus} alt="project2" />
          <div className="caption">
            <img src={odysseyopus_logo} alt="projectIcon2" />
            <p>Odyssey Opus: Blog App</p>
          </div>
        </div>
      </a>
      <div className="project">
        <img src={comingsoon} alt="project3" />
        <div className="caption">
          <img src={comingsoon_icon} alt="projectIcon3" />
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
