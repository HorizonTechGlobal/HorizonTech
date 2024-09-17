import React from "react";
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Expanding Your Digital Horizon</h1>
        <p>
          At HorizonTech, we empower businesses to reach beyond boundaries and
          innovate without limits. Our cutting-edge technology solutions drive
          growth, enhance efficiency, and shape the future. Discover a world
          where possibilities are endless and the horizon is just the beginning.
        </p>
       
        <Link to="services" smooth={true} offset={-240} duuration={500}>
          <button className="btn">
            Explore more <img src={darkArrow} alt="darkArrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
