import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import HonorWall from './components/HonorWall';
import Achievements from './components/Achievements';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const initScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      const animateElements = document.querySelectorAll(
        '.feature-card, .tech-category, .about-text, .about-image'
      );
      
      animateElements.forEach(el => {
        observer.observe(el);
      });
    };

    const initLoadingAnimations = () => {
      const elements = document.querySelectorAll('.feature-card, .tech-category');
      
      const loadingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('loaded');
            }, index * 100); // Stagger the animations
            loadingObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      
      elements.forEach(el => {
        loadingObserver.observe(el);
      });
    };

    initScrollAnimations();
    initLoadingAnimations();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <HonorWall />
      <Achievements />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;