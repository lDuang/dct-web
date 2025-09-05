<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <i class="fas fa-code"></i>
          <span>学生技术工作室</span>
        </div>
        <h1 class="hero-title">{{ displayedHeroTitle }}</h1>
        <p class="hero-subtitle">代码与梦想，自由生长</p>
        <p class="hero-description">
          汇聚热爱编程、勇于创新的学子，探索前后端开发、嵌入式系统、算法竞赛等技术领域。
          在这里，技术与创意碰撞，梦想与实践并行。
        </p>
        <div class="hero-buttons">
          <a href="#tech" class="btn btn-primary">
            <i class="fas fa-rocket"></i>
            <span>探索技术</span>
          </a>
          <a href="#join" class="btn btn-secondary">
            <i class="fas fa-users"></i>
            <span>加入我们</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const originalHeroTitle = "典创工作室";
const displayedHeroTitle = ref('');
const typeSpeed = 100;

const typeWriter = () => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < originalHeroTitle.length) {
      displayedHeroTitle.value += originalHeroTitle.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, typeSpeed);
};

// Parallax Effect for Hero Section
const initParallaxEffect = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
};

onMounted(() => {
  setTimeout(typeWriter, 1200); // Start typing effect after a delay
  initParallaxEffect();
});
</script>

<style scoped>
/* Hero Section styles from public/styles.css */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 50px;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.2s forwards;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.4s forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: 500;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.6s forwards;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.8s forwards;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 0.8s ease 1s forwards;
}

/* Buttons styles (copied from global, consider making a Button component later) */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all var(--transition-normal);
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-secondary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border);
}

.btn-secondary:hover {
  background: var(--color-background-secondary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design for Hero */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}
</style>
