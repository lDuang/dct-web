<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- 左侧列：典创工作室 和 友情链接 (合并为一个区块) -->
        <div class="footer-section footer-left-group">
          <div class="footer-logo">
            <div class="logo-icon">
              <img src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png" alt="dct-logo">
            </div>
            <span>典创工作室</span>
          </div>
          <p>代码与梦想，自由生长。汇聚热爱编程的学子，在技术的世界里探索无限可能。</p>

          <!-- 友情链接作为该区块的子部分 -->
          <div class="footer-links-group">
            <h4>友情链接</h4>
            <ul>
              <li><a href="https://qm.qq.com/cgi-bin/qm/qr?k=Y9XgCa9SyryugaAEqjm1i_CtI-cHenP6&jump_from=webapi&authKey=AiaPPy7DDEmKLfMDgVD4er1hVNq4h0HciXudWTlxhVp5SZLcusQN3yc7DPzeWRrS" target="_blank">加入我们!</a></li>
              <li><a href="https://github.com" target="_blank">Web-repo:欢迎提PR参与贡献</a></li>
              <li><a href="https://blog.coderpath.me" target="_blank">WangXv-Blog</a></li>
              <li><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></li>
              <li><a href="https://gitee.com/tangjiaxin188/rs-video-server" target="_blank">基于rocket的rust视频服务器</a></li>
            </ul>
          </div>
        </div>

        <!-- 右侧列：技术领域 和 联系我们 (合并为一个区块，内部垂直堆叠) -->
        <div class="footer-section footer-right-group">
          <div class="footer-sub-section">
            <h4>技术领域</h4>
            <ul>
              <li>前端开发</li>
              <li>后端开发</li>
              <li>嵌入式系统</li>
              <li>算法竞赛</li>
            </ul>
          </div>
          <div class="footer-sub-section">
            <h4>联系我们</h4>
            <ul>
              <li>QQ群：715940323</li>
              <li>邮箱：outside@duapp.dev</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 典创工作室. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No specific script logic for Footer section in original.
</script>

<style scoped>
/* Footer Section styles from public/styles.css */
.footer {
  background: #2F3640;
  color: white;
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-lg);
  align-items: start;
}

.footer-section.footer-left-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.footer-links-group {
  margin-top: var(--spacing-md);
}

.footer-section.footer-right-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.footer-sub-section h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: white;
}

.footer-sub-section ul {
  list-style: none;
  display: grid;
  gap: var(--spacing-xs);
}

.footer-sub-section ul li {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-sub-section ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-sub-section ul li a:hover {
  color: white;
}

.footer-section h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: white;
}

.footer-section p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
}

.footer-section ul {
  list-style: none;
  display: grid;
  gap: var(--spacing-xs);
}

.footer-section ul li {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-section ul li a:hover {
  color: white;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  font-size: 1.125rem;
  font-weight: 600;
}

.footer-logo .logo-icon {
  background: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-md);
  text-align: center;
}

.footer-bottom p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive Design for Footer */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-lg);
  }
  .footer-section.footer-left-group,
  .footer-section.footer-right-group {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-logo {
    justify-content: center;
  }
  .footer-links-group, .footer-sub-section {
    margin-top: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .footer-content {
    gap: var(--spacing-md);
  }
}
</style>
