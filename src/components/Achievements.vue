<template>
  <section class="achievements" id="achievements">
    <div class="container">
      <div class="section-header">
        <h2>竞赛与成长</h2>
        <p>在实践与积累中前行，记录每一步成长印记</p>
      </div>
      <div class="achievements-grid">
        <div class="achievement-card">
          <div class="achievement-icon">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="achievement-content">
            <h3>蓝桥杯-全国软件和信息技术专业人才大赛</h3>
            <p class="achievement-result">个人赛全国二等奖/省级奖项一二等数个</p>
            <p class="achievement-desc">从基础刷题到实战备赛，团队协作复盘错题，在算法与编程中沉淀能力</p>
          </div>
        </div>

        <div class="achievement-card">
          <div class="achievement-icon">
            <i class="fas fa-robot"></i>
          </div>
          <div class="achievement-content">
            <h3>中国机器人及人工智能大赛</h3>
            <p class="achievement-result">全国二等奖/省级奖项数个</p>
            <p class="achievement-desc">从硬件组装到代码调试，在机器人控制实践中磨合技术与协作</p>
          </div>
        </div>

        <div class="achievement-card">
          <div class="achievement-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="achievement-content">
            <h3>全国大学生创新创业大赛</h3>
            <p class="achievement-result">国奖/省奖数个</p>
            <p class="achievement-desc">从创意构思到落地开发，完整经历项目全流程，积累实战经验</p>
          </div>
        </div>

        <div class="achievement-card">
          <div class="achievement-icon">
            <i class="fas fa-book-open"></i>
          </div>
          <div class="achievement-content">
            <h3>思想交汇</h3>
            <p class="achievement-result">汇聚智慧，拓展视野</p>
            <p class="achievement-desc">随时随地技术思享,碰撞新的火花，分享学习心得与个人洞察，让每一次思想碰撞都成为激发灵感、拓宽认知的契机</p>
          </div>
        </div>

        <div class="achievement-card">
          <div class="achievement-icon">
            <i class="fas fa-laptop-code"></i>
          </div>
          <div class="achievement-content">
            <h3>协力同行</h3>
            <p class="achievement-result">增进默契，凝聚力量</p>
            <p class="achievement-desc">组织多样化的内部交流与团建活动，在轻松愉快的氛围中增进彼此了解与信任，共同面对挑战，点燃团队协作的火花</p>
          </div>
        </div>

        <div class="achievement-card">
          <div class="achievement-icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="achievement-content">
            <h3>携手共进</h3>
            <p class="achievement-result">攻克难点，共同精进</p>
            <p class="achievement-desc">学长学姐亲手指导，针对技术难点分组攻坚，形成“传帮带”的良性循环，助力每位成员稳步成长，实现知识的有效传递</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific script logic for Achievements section in original, animations handled globally for now.
</script>

<style scoped>
/* Achievements Section styles from public/styles.css */
.achievements {
  background: var(--color-background-secondary);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.achievement-card {
  background: var(--color-card);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  transition: all var(--transition-normal);
}

.achievement-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgb(139 92 246 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.achievement-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.achievement-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.achievement-result {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
}

.achievement-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
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

/* Responsive Design for Achievements */
@media (max-width: 768px) {
  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .achievement-card {
    flex-direction: column;
    text-align: center;
  }

  .achievement-icon {
    margin: 0 auto var(--spacing-md) auto; /* 在小屏幕上居中图标并添加底部间距 */
  }

  .section-header h2 {
    font-size: 2rem;
  }

  section {
    padding: var(--spacing-xl) 0;
  }
}
</style>
