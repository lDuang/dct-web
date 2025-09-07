<template>
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="nav-content">
        <a href="#" class="logo">
          <div class="logo-icon">
            <img src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png" alt="dct-logo">
          </div>
          <span>典创工作室</span>
        </a>
        <ul class="nav-menu" :class="{ 'active': isMobileMenuOpen }" id="nav-menu">
          <li><a href="#home" @click="closeMobileMenu">首页</a></li>
          <li><a href="#about" @click="closeMobileMenu">关于我们</a></li>
          <li><a href="#tech" @click="closeMobileMenu">技术领域</a></li>
          <li><a href="#honor-wall" @click="closeMobileMenu">荣誉墙</a></li>
          <!-- <li><a href="#projects" @click="closeMobileMenu">项目展示</a></li> -->
          <li><a href="#achievements" @click="closeMobileMenu">成就荣誉</a></li>
          <li><a href="#join" @click="closeMobileMenu">加入我们</a></li>
        </ul>
        <button class="mobile-menu-btn" id="mobile-menu-btn" @click="toggleMobileMenu">
          <i :class="['fas', isMobileMenuOpen ? 'fa-times' : 'fa-bars']"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { debounce } from '../utils/helpers';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Navbar Scroll Effect
const handleNavbarScroll = () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
};

// Smooth Scrolling for Navigation Links
const initSmoothScrolling = () => {
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
        if (isMobileMenuOpen.value) {
          closeMobileMenu();
        }
      }
    });
  });
};

// Close mobile menu when clicking outside
const handleClickOutside = (e) => {
  const navbarElement = document.getElementById('navbar');
  const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
  const navMenuElement = document.getElementById('nav-menu');

  if (isMobileMenuOpen.value && 
      navbarElement && !navbarElement.contains(e.target) && 
      mobileMenuBtnElement && !mobileMenuBtnElement.contains(e.target) &&
      navMenuElement && !navMenuElement.contains(e.target)) {
    closeMobileMenu();
  }
};

// Keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', debounce(handleNavbarScroll, 10));
  initSmoothScrolling();
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);
  handleNavbarScroll(); // Set initial navbar state
});

onUnmounted(() => {
  window.removeEventListener('scroll', debounce(handleNavbarScroll, 10));
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Navigation styles from public/styles.css */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: all var(--transition-normal);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 1.125rem;
  transition: color var(--transition-fast);
}

.logo:hover {
  color: var(--color-primary);
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo-icon img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: contain;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
}

.nav-menu a {
  text-decoration: none;
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-menu a:hover {
  color: var(--color-text-primary);
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-fast);
}

.nav-menu a:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: color var(--transition-fast);
}

.mobile-menu-btn:hover {
  color: var(--color-primary);
}

/* Responsive Design for Navbar */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-background);
    border-top: 1px solid var(--color-border);
    box-shadow: var(--shadow-lg);
    flex-direction: column;
    padding: var(--spacing-md);
    gap: var(--spacing-sm);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu a {
    display: block;
    padding: var(--spacing-sm);
    border-radius: 8px;
    transition: all var(--transition-fast);
  }

  .nav-menu a:hover {
    background: var(--color-background-secondary);
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style>
