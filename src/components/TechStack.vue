<template>
  <section class="tech-stack" id="tech">
    <div class="container">
      <div class="section-header">
        <h2>技术领域</h2>
        <p>全栈技术探索，从前端到后端，从算法到嵌入式</p>
      </div>
      <div class="tech-grid">
        <div class="tech-category">
          <div class="tech-header">
            <i class="fab fa-react"></i>
            <h3>前端开发</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Vue</span>
            <span class="tech-tag">JS/TS</span>
            <span class="tech-tag">Next.js</span>
            <span class="tech-tag">Tailwind CSS</span>
          </div>
        </div>
        <div class="tech-category">
          <div class="tech-header">
            <i class="fas fa-server"></i>
            <h3>后端开发</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag">Golang</span>
            <span class="tech-tag">Rust</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Java</span>
            <span class="tech-tag">Zig</span>
            <span class="tech-tag">Spring Boot</span>
          </div>
        </div>
        <div class="tech-category">
          <div class="tech-header">
            <i class="fas fa-database"></i>
            <h3>数据库</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">Redis</span>
            <span class="tech-tag">SQLite</span>
            <span class="tech-tag">MySQL</span>
          </div>
        </div>
        <div class="tech-category">
          <div class="tech-header">
            <i class="fas fa-cloud"></i>
            <h3>运维/测开</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag">Docker</span>
            <span class="tech-tag">Kubernetes</span>
            <span class="tech-tag">K3s</span>
            <span class="tech-tag">云原生</span>
            <span class="tech-tag">Paas</span>
            <span class="tech-tag">Saas</span>
          </div>
        </div>
        <div class="tech-category">
          <div class="tech-header">
            <i class="fas fa-microchip"></i>
            <h3>嵌入式系统</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag">ROS</span>
            <span class="tech-tag">FreeRTOS</span>
            <span class="tech-tag">树莓派</span>
            <span class="tech-tag">Arduino</span>
            <span class="tech-tag">STM32</span>
          </div>
        </div>
        <div class="tech-category">
          <div class="tech-header">
            <i class="fas fa-brain"></i>
            <h3>算法竞赛</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag">C++</span>
            <span class="tech-tag">数据结构</span>
            <span class="tech-tag">算法设计</span>
            <span class="tech-tag">LeetCode</span>
            <span class="tech-tag">蓝桥杯</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

// Tech Tag Hover Effects
const initTechTagEffects = () => {
  const techTags = document.querySelectorAll('.tech-tag');
  
  techTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
};

onMounted(() => {
  initTechTagEffects();
});
</script>

<style scoped>
/* Tech Stack Section styles from public/styles.css */
.tech-stack {
  background: var(--color-background-secondary); /* 统一背景 */
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.tech-category {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: var(--spacing-lg);
  transition: all var(--transition-normal);
}

.tech-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgb(139 92 246 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.tech-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.tech-header i {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.tech-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tech-tag {
  background: var(--color-background-secondary);
  color: var(--color-text-secondary);
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.tech-tag:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

/* Section Header styles (copied from global) */
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.section-header p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Section padding (copied from global) */
section {
  padding: var(--spacing-2xl) 0;
}

/* Responsive Design for Tech Stack */
@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  section {
    padding: var(--spacing-xl) 0;
  }
}

@media (max-width: 480px) {
  .tech-category {
    padding: var(--spacing-sm);
  }
}
</style>
