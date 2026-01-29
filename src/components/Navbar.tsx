import { useState, useEffect, useRef } from 'react';
import { debounce } from '../utils/helpers';

const navItems = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于我们' },
  { href: '#tech', label: '技术领域' },
  { href: '#honor-wall', label: '荣誉墙' },
  { href: '#achievements', label: '竞赛与成长' },
  { href: '#join', label: '加入我们' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLUListElement>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleNavbarScroll = () => setIsScrolled(window.scrollY > 50);

    const initSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const href = anchor.getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target instanceof HTMLElement) {
              window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
              });
              if (isMobileMenuOpen) closeMobileMenu();
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
      if (e.key === 'Escape' && isMobileMenuOpen) closeMobileMenu();
    };

    const debouncedScrollHandler = debounce(handleNavbarScroll, 10);
    window.addEventListener('scroll', debouncedScrollHandler);
    initSmoothScrolling();
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    handleNavbarScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navbarRef}>
      <div>
        <div>
          <a href="#">
            <div>
              <img src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png" alt="DCT Logo" />
            </div>
            <span>典创工作室</span>
          </a>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button
            ref={mobileMenuBtnRef}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
      <div>
        <ul ref={navMenuRef}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
