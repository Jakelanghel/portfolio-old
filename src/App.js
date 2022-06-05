import React from "react";
import GlobalStyles from "./components/styled/Global";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
