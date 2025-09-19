<template>
  <section class="about" id="about">
    <div class="container">
      <div class="section-header">
        <h2>关于我们</h2>
        <p>专业的技术团队，用心培养每一位成员</p>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h3>工作室简介</h3>
          <p>典创工作室隶属于喀什大学计算机科学与技术学院，是一个专注于技术创新的学生工作室。我们相信技术的力量能够改变世界，每一行代码都承载着创造者的梦想。</p>
          <p>我们的团队由热爱编程的学子组成，在学院的指导和学长学姐的带领下，共同探索技术的边界，在实践中成长，在挑战中进步。</p>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h4>技术创新</h4>
              <p>探索前沿技术，用创新思维解决实际问题</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4>团队协作</h4>
              <p>学长学姐悉心指导，团队成员互相学习成长</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-trophy"></i>
              </div>
              <h4>竞赛实践</h4>
              <p>积极参与各类编程竞赛，在实战中提升能力</p>
            </div>
          </div>
        </div>
        <div class="about-image">
          <img src="https://cloud.duapp.dev/f/qaHY/GFGYhuQb_EXDobluD.png" alt="团队">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific script logic for About section in original, animations handled globally for now.
</script>

<style scoped>
/* About Section styles from public/styles.css */
.about {
  background: var(--color-background-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}

.about-text h3 {
  font-size: 1.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.about-text p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.features-grid {
  display: grid;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--color-card);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: var(--color-background-secondary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 1.25rem;
  flex-shrink: 0;
}

.feature-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
}

/* Section Header styles (copied from global, consider making a SectionHeader component later) */
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

/* Responsive Design for About */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .about-image {
    order: -1;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  section {
    padding: var(--spacing-xl) 0;
  }
}
</style>
