import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import NavbarLogo from "../Navbar/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setStick] = useState(false);
  const [active, setActive] = useState("nav-menu");
  const [toogleIcon, setToogleIcon] = useState("nav__toogler");
  
  const navToogler = () => {
    active === "nav-menu"
    ? setActive("nav-menu nav_active")
    : setActive("nav-menu");
    console.log(active);

    toogleIcon === "nav__toogler"
      ? setToogleIcon("nav__toogler toogle")
      : setToogleIcon("nav__toogler");
  };

  useEffect(() => {
    {
      const handlerScrool = () => {
        setStick(window.scrollY > 100);
      };
      window.addEventListener("scroll", handlerScrool);
      return () => window.removeEventListener("scroll", handlerScrool);
    }
  });

  return (
    <nav
      className={`container-fluid py-2 d-flex justify-content-between align-items-center ${
        sticky ? "sticky" : ""
      }`}
    >
      <div className="navbar__menus d-flex">
        <div className="navbar__menus__logo">
          <Link to={'/'}>
            <img src={NavbarLogo} alt="logo" />
          </Link>
        </div>
        <div className="navbar__menus__link">
          <ul className={`${active} d-flex `}>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Why Brex?</a>
            </li>
            <li>
              <a href="#">Empower</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar__register">
        <ul className="nav-register d-flex  align-items-center">
          <li>
            <a href="#">Open an account</a>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <button>
              <a href="#">Contact sales</a>
            </button>
          </li>
        </ul>
      </div>
      <div onClick={navToogler} className={toogleIcon}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
