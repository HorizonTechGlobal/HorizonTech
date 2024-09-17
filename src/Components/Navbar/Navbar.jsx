import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duuration={500}>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="services" smooth={true} offset={-260} duuration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duuration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-260} duuration={500}>
            Products
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duuration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duuration={500}
            className="btn"
          >
            ContactUs
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="MenuIcon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
