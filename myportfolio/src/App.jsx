import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GameWidget from './components/GameWidget';
import Cursor from './Cursor';

const App = () => {
  return (
    <div className="bg-black text-[#CFF3E8] font-mono relative overflow-x-hidden">
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