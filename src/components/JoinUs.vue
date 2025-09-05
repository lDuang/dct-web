<template>
  <section class="join-us" id="join">
    <div class="container">
      <div class="section-header">
        <h2>加入我们</h2>
        <p>与志同道合的伙伴一起，在技术的海洋中自由航行</p>
      </div>
      <div class="join-content">
        <div class="join-info">
          <div class="join-card">
            <h3>我们寻找</h3>
            <ul class="join-requirements">
              <li><i class="fas fa-check"></i> 热爱编程，对技术充满好奇心</li>
              <li><i class="fas fa-check"></i> 具备自学能力，愿意持续学习</li>
              <li><i class="fas fa-check"></i> 积极参与团队协作</li>
              <li><i class="fas fa-check"></i> 计科学院在校24/25级学生</li>
            </ul>
          </div>

          <div class="join-card">
            <h3>我们提供</h3>
            <ul class="join-benefits">
              <li><i class="fas fa-star"></i> 学长学姐悉心指导</li>
              <li><i class="fas fa-star"></i> 丰富的项目实践机会</li>
              <li><i class="fas fa-star"></i> 竞赛培训与参赛机会</li>
              <li><i class="fas fa-star"></i> 完善的学习资源</li>
              <li><i class="fas fa-star"></i> 志同道合的技术伙伴</li>
            </ul>
          </div>
        </div>

        <div class="join-cta">
          <div class="cta-content">
            <h3>准备好开始你的技术之旅了吗？</h3>
            <p>扫描二维码或联系我们，加入典创工作室大家庭</p>
            <div class="contact-methods">
              <div class="contact-item">
                <i class="fab fa-qq"></i>
                <span>QQ群：715940323</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>邮箱：outside@duapp.dev</span>
              </div>
            </div>
            <a href="https://qm.qq.com/cgi-bin/qm/qr?k=Y9XgCa9SyryugaAEqjm1i_CtI-cHenP6&jump_from=webapi&authKey=AiaPPy7DDEmKLfMDgVD4er1hVNq4h0HciXudWTlxhVp5SZLcusQN3yc7DPzeWRrS" class="btn btn-primary btn-large">
              <i class="fas fa-paper-plane"></i>
              <span>立即申请</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific script logic for Join Us section in original.
</script>

<style scoped>
/* Join Us Section styles from public/styles.css */
.join-us {
  background: var(--color-background);
}

.join-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.join-info {
  display: grid;
  gap: var(--spacing-lg);
}

.join-card {
  background: var(--color-card);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.join-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.join-requirements,
.join-benefits {
  list-style: none;
  display: grid;
  gap: var(--spacing-sm);
}

.join-requirements li,
.join-benefits li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.join-requirements li i {
  color: var(--color-accent);
  font-size: 0.875rem;
}

.join-benefits li i {
  color: #f59e0b;
  font-size: 0.875rem;
}

.join-cta {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  padding: var(--spacing-2xl);
  border-radius: 20px;
  color: white;
  text-align: center;
}

.cta-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.cta-content p {
  font-size: 1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.contact-methods {
  display: grid;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.contact-methods .contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  opacity: 0.9;
}

.contact-methods .contact-item i {
  font-size: 1rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1rem;
}

/* Buttons styles (copied from global) */
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

/* Responsive Design for Join Us */
@media (max-width: 768px) {
  .join-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .section-header h2 {
    font-size: 2rem;
  }

  section {
    padding: var(--spacing-xl) 0;
  }
}

@media (max-width: 480px) {
  .join-card {
    padding: var(--spacing-md);
  }

  .join-cta {
    padding: var(--spacing-lg);
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}
</style>
