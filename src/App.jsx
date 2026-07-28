import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Timeline from './components/Timeline'
import Crew from './components/Crew'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = 64; // h-16 = 4rem = 64px
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const handleRegisterClick = () => {
    window.open('https://forms.gle/KiDnPsYFwiTsNDKR6', '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-sans text-gray-100 selection:bg-cyan-500/30">
      <Navbar onRegisterClick={handleRegisterClick} />
      
      <main>
        <Hero onRegisterClick={handleRegisterClick} />
        <About />
        <Events onRegisterClick={handleRegisterClick} />
        <Timeline />
        <Crew />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
