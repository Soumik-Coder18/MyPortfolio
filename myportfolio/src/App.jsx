import React, { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GameWidget from "./components/GameWidget";
import Cursor from "./Cursor";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#100806]">
      <Cursor />

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <GameWidget />
      </main>

      <Footer />
    </div>
  );
};

export default App;