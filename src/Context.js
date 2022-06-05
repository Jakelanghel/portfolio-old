import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [toggleClass, setToggleClass] = useState("nav-toggle");
  const [mobileMenuClass, setMobileMenuClass] = useState("container-nav-links");

  const toggleNav = (e) => {
    setNavIsOpen((oldState) => {
      if (oldState === true) {
        setToggleClass("nav-toggle");
        setMobileMenuClass("container-nav-links");
      } else {
        setToggleClass("nav-toggle nav-open");
        setMobileMenuClass("container-nav-links menu-open");
      }
      return !oldState;
    });
  };

  return (
    <Context.Provider
      value={{
        navIsOpen,
        toggleNav,
        toggleClass,
        mobileMenuClass,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
