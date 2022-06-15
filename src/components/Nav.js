import React from "react";
import { NavLink } from "react-router-dom";

import images from "../constants/images";
import { Context } from "../Context";

import { StyledNav } from "./styled/Nav.Styled";

const Nav = () => {
  const { toggleClass, toggleNav, mobileMenuClass } = React.useContext(Context);
  return (
    <StyledNav>
      <div className="container-logo">
        <p className="logo">&#60;JtL&#62;</p>
      </div>

      <button
        className={toggleClass}
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>

      <div className={mobileMenuClass}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active link" : "link non-active"
          }
          to="/my_portfolio"
          onClick={toggleNav}
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active link" : "link non-active"
          }
          to="/about"
          onClick={toggleNav}
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active link" : "link non-active"
          }
          to="/projects"
          onClick={toggleNav}
        >
          Projects
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active link" : "link non-active"
          }
          to="/resume"
          onClick={toggleNav}
        >
          Resume
        </NavLink>

        <div className="container-icons">
          <a href="#">
            <img
              src={images.gitHubIcon}
              alt="link to my github"
              className="nav-icon filter-accent"
            />
          </a>

          <a href="#">
            <img
              src={images.linkedInIcon}
              alt="link to my linkedIn"
              className="nav-icon filter-accent"
            />
          </a>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
