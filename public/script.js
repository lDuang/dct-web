// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

// ===== Navbar Scroll Effect =====
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
  navMenu.classList.toggle('active');
  const icon = mobileMenuBtn.querySelector('i');
  
  if (navMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}

// ===== Smooth Scrolling for Navigation Links =====
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
          toggleMobileMenu();
        }
      }
    });
  });
}

// ===== Intersection Observer for Animations =====
function initScrollAnimations() {
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

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.feature-card, .tech-category, .about-text, .about-image'
  );
  
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// ===== Typing Effect for Hero Title =====
function initTypingEffect() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;
  
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';
  
  let i = 0;
  const typeSpeed = 100;
  
  function typeWriter() {
    if (i < originalText.length) {
      heroTitle.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, typeSpeed);
    }
  }
  
  // Start typing effect after a delay
  setTimeout(typeWriter, 1200);
}

// ===== Tech Tag Hover Effects =====
function initTechTagEffects() {
  const techTags = document.querySelectorAll('.tech-tag');
  
  techTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// ===== Parallax Effect for Hero Section =====
function initParallaxEffect() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// ===== Loading Animation =====
function initLoadingAnimations() {
  // Add loading class to elements when they come into view
  const elements = document.querySelectorAll('.feature-card, .tech-category');
  
  const loadingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('loaded');
        }, index * 100); // Stagger the animations
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(el => {
    loadingObserver.observe(el);
  });
}

// ===== Theme Toggle (Optional) =====
function initThemeToggle() {
  // This can be expanded later for dark mode support
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  function handleThemeChange(e) {
    if (e.matches) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
  
  prefersDark.addListener(handleThemeChange);
  handleThemeChange(prefersDark);
}

// ===== Performance Optimization =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== Event Listeners =====
function initEventListeners() {
  // Scroll events
  window.addEventListener('scroll', debounce(handleNavbarScroll, 10));
  
  // Mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
      toggleMobileMenu();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  });
}

// ===== Initialize Everything =====
function init() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }
  
  // Initialize all features
  initEventListeners();
  initSmoothScrolling();
  initScrollAnimations();
  initTypingEffect();
  initTechTagEffects();
  initParallaxEffect();
  initLoadingAnimations();
  initThemeToggle();
  
  // Initial navbar state
  handleNavbarScroll();
}

// Start the application
init();

// ===== Utility Functions =====
export { debounce, init };
