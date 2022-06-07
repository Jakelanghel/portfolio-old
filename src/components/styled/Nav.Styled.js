import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;

  .logo {
    font-size: 1.5rem;
    color: var(--dark-accent);
    letter-spacing: 5px;

    span {
      color: blue;
    }
  }

  span {
    color: grey;
  }

  .container-nav-links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    background: var(--secondary-dark);
    padding: 7rem 0;
    padding-bottom: 0;
    text-align: center;
    transition: transform 250ms ease-in-out;
    z-index: 100;
  }

  .menu-open {
    transform: translateY(100%);
    transition: transform 250ms ease-in-out;
  }

  .link {
    width: 250px;
    font-size: 1.75rem;
    font-weight: 300;
    text-decoration: none;
    letter-spacing: 3px;
    color: var(--dark-accent);
    padding: 1.5rem 4rem;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .active {
    font-weight: 700;
  }

  .active:after {
    content: ">";
    margin-left: 0.5rem;
    color: var(--light-gray);
  }
  .active:before {
    content: "<";
    margin-right: 0.5rem;
    color: var(--light-gray);
  }

  .non-active {
    color: var(--light-gray);
    font-style: italic;
    /* margin-right: 1rem; */
  }

  .non-active:before {
    content: "//";
    margin-right: 0.5rem;
    font-style: italic;
  }

  .container-icons {
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    margin-top: auto;
  }

  .nav-icon {
    width: 50px;
    opacity: 0.7;
  }
  /* HAMBURGER ========== */
  /* ==================== */

  .nav-toggle {
    background: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 0;
    z-index: 1000;
    padding: 1.5rem 3rem;
  }

  .hamburger {
    display: block;
    position: relative;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    background-color: var(--dark-accent);
    width: 30px;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
  }

  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0rem;
  }

  .hamburger::before {
    top: 10px;
  }
  .hamburger::after {
    bottom: 10px;
  }

  .nav-open .nav-list {
    transform: translateX(0);
  }

  .nav-open .hamburger,
  .nav-open .hamburger::before,
  .nav-open .hamburger::after {
    background: var(--dark-accent);
  }

  .nav-open .nav-toggle {
    position: fixed;
  }

  .nav-open .hamburger {
    transform: rotate(0.625turn);
  }

  .nav-open .hamburger::before {
    transform: rotate(90deg) translateX(-10px);
  }

  .nav-open .hamburger::after {
    opacity: 0;
  }
`;
