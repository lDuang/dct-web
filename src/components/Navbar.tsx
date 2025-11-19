import { useState, useEffect, useRef } from 'react';
import { debounce } from '../utils/helpers';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLUListElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleNavbarScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 50) {
          navbarRef.current.classList.add('scrolled');
        } else {
          navbarRef.current.classList.remove('scrolled');
        }
      }
    };

    const initSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const href = anchor.getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target instanceof HTMLElement) {
              const offsetTop = target.offsetTop - 80; // Account for fixed navbar
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
              if (isMobileMenuOpen) {
                closeMobileMenu();
              }
            }
          }
        });
      });
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (
            isMobileMenuOpen &&
            navbarRef.current && !navbarRef.current.contains(e.target as Node) &&
            mobileMenuBtnRef.current && !mobileMenuBtnRef.current.contains(e.target as Node) &&
            navMenuRef.current && !navMenuRef.current.contains(e.target as Node)
        ) {
            closeMobileMenu();
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    const debouncedScrollHandler = debounce(handleNavbarScroll, 10);
    window.addEventListener('scroll', debouncedScrollHandler);
    initSmoothScrolling();
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    handleNavbarScroll(); // Set initial navbar state

    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      // Note: Smooth scrolling listeners are not removed, which is generally fine
    };
  }, [isMobileMenuOpen]); // Re-run effect if isMobileMenuOpen changes for handleClickOutside

  return (
    <nav className="navbar" id="navbar" ref={navbarRef}>
      <div className="container">
        <div className="nav-content">
          <a href="#" className="logo">
            <div className="logo-icon">
              <img src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png" alt="dct-logo" />
            </div>
            <span>典创工作室</span>
          </a>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu" ref={navMenuRef}>
            <li><a href="#home" onClick={closeMobileMenu}>首页</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>关于我们</a></li>
            <li><a href="#tech" onClick={closeMobileMenu}>技术领域</a></li>
            <li><a href="#honor-wall" onClick={closeMobileMenu}>荣誉墙</a></li>
            <li><a href="#achievements" onClick={closeMobileMenu}>竞赛与成长</a></li>
            <li><a href="#join" onClick={closeMobileMenu}>加入我们</a></li>
          </ul>
          <button className="mobile-menu-btn" id="mobile-menu-btn" onClick={toggleMobileMenu} ref={mobileMenuBtnRef}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
