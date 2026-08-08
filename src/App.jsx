import React, { useState, useEffect } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const [accentColor, setAccentColor] = useState('cyan');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-mode', themeMode);
    document.documentElement.setAttribute('data-accent', accentColor);
  }, [themeMode, accentColor]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <NeuralBackground themeMode={themeMode} />
      <Navbar
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
