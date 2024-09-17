import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="AboutImage" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Know About Us</h2>

        <p>
          At HorizonTech, we are dedicated to crafting cutting-edge software
          solutions, developing sleek mobile applications, and designing
          effective digital marketing strategies. Our commitment to excellence
          extends beyond mere technical services; we aim to foster growth, boost
          efficiency, and make a meaningful impact on both personal and
          professional journeys.
        </p>

        <p>
          HorizonTech transforms business concepts into reality by creating
          innovative web and mobile applications that enhance productivity and
          streamline operations. Our targeted digital marketing strategies
          ensure that businesses achieve a robust and impactful online presence,
          effectively reaching their target audience. Additionally, HorizonTech
          is committed to advancing the tech community by nurturing the talents
          of aspiring professionals, empowering them to make significant
          contributions to the industry.
        </p>

        <p>
          In essence, HorizonTech is more than just a service provider; we are a
          partner in progress, guiding individuals and businesses through the
          complexities of the digital age while fostering growth, innovation,
          and success.
        </p>
      </div>
    </div>
  );
};

export default About;
