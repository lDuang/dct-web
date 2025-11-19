import './TechStack.css';

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech">
      <div className="container">
        <div className="section-header">
          <h2>技术领域</h2>
          <p>全栈技术探索，从前端到后端，从算法到嵌入式</p>
        </div>
        <div className="tech-grid">
          <div className="tech-category">
            <div className="tech-header">
              <i className="fab fa-react"></i>
              <h3>前端开发</h3>
            </div>
            <div className="tech-list">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vue</span>
              <span className="tech-tag">JS/TS</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <i className="fas fa-server"></i>
              <h3>后端开发</h3>
            </div>
            <div className="tech-list">
              <span className="tech-tag">Golang</span>
              <span className="tech-tag">Rust</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Zig</span>
              <span className="tech-tag">Spring Boot</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <i className="fas fa-database"></i>
              <h3>数据库</h3>
            </div>
            <div className="tech-list">
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">SQLite</span>
              <span className="tech-tag">MySQL</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <i className="fas fa-cloud"></i>
              <h3>运维/测开</h3>
            </div>
            <div className="tech-list">
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
              <span className="tech-tag">K3s</span>
              <span className="tech-tag">云原生</span>
              <span className="tech-tag">Paas</span>
              <span className="tech-tag">Saas</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <i className="fas fa-microchip"></i>
              <h3>嵌入式系统</h3>
            </div>
            <div className="tech-list">
              <span className="tech-tag">ROS</span>
              <span className="tech-tag">FreeRTOS</span>
              <span className="tech-tag">树莓派</span>
              <span className="tech-tag">Arduino</span>
              <span className="tech-tag">STM32</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <i className="fas fa-brain"></i>
              <h3>算法竞赛</h3>
            </div>
            <div className="tech-list">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">数据结构</span>
              <span className="tech-tag">算法设计</span>
              <span className="tech-tag">LeetCode</span>
              <span className="tech-tag">蓝桥杯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
