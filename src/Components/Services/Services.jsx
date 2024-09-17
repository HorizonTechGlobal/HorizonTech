import React from "react";
import "./Services.css";
import service_1 from "../../assets/app.png";
import service_2 from "../../assets/web.png";
import service_3 from "../../assets/seo.png";
import service_4 from "../../assets/graphics.png";
import service_5 from "../../assets/digital.png";
import service_6 from "../../assets/uiux.png";
import service_icon_1 from "../../assets/program-icon-1.png";
import service_icon_2 from "../../assets/program-icon-2.png";
import service_icon_3 from "../../assets/program-icon-3.png";
import service_icon_4 from "../../assets/program-icon-4.png";
import service_icon_5 from "../../assets/program-icon-5.png";
import service_icon_6 from "../../assets/program-icon-6.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_1} alt="Service1" />
        <div className="caption">
          <img src={service_icon_1} alt="ServiceIcon1" />
          <p>App Development</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="Service2" />
        <div className="caption">
          <img src={service_icon_2} alt="ServiceIcon2" />
          <p>Web Development</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="Service3" />
        <div className="caption">
          <img src={service_icon_3} alt="ServiceIcon3" />
          <p>SEO</p>
        </div>
      </div>
      <div className="service">
        <img src={service_4} alt="Service3" />
        <div className="caption">
          <img src={service_icon_4} alt="ServiceIcon4" />
          <p>Graphics Design</p>
        </div>
      </div>
      <div className="service">
        <img src={service_5} alt="Service3" />
        <div className="caption">
          <img src={service_icon_5} alt="ServiceIcon5" />
          <p>Digital Marketing</p>
        </div>
      </div>
      <div className="service">
        <img src={service_6} alt="Service3" />
        <div className="caption">
          <img src={service_icon_6} alt="ServiceIcon6" />
          <p>UI/UX Design</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
