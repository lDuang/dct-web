import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2>竞赛与成长</h2>
          <p>在实践与积累中前行，记录每一步成长印记</p>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="achievement-content">
              <h3>蓝桥杯-全国软件和信息技术专业人才大赛</h3>
              <p className="achievement-result">个人赛全国二等奖/省级奖项一二等数个</p>
              <p className="achievement-desc">从基础刷题到实战备赛，团队协作复盘错题，在算法与编程中沉淀能力</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-robot"></i>
            </div>
            <div className="achievement-content">
              <h3>中国机器人及人工智能大赛</h3>
              <p className="achievement-result">全国二等奖/省级奖项数个</p>
              <p className="achievement-desc">从硬件组装到代码调试，在机器人控制实践中磨合技术与协作</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="achievement-content">
              <h3>全国大学生创新创业大赛</h3>
              <p className="achievement-result">国奖/省奖数个</p>
              <p className="achievement-desc">从创意构思到落地开发，完整经历项目全流程，积累实战经验</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="achievement-content">
              <h3>思想交汇</h3>
              <p className="achievement-result">汇聚智慧，拓展视野</p>
              <p className="achievement-desc">随时随地技术思享,碰撞新的火花，分享学习心得与个人洞察，让每一次思想碰撞都成为激发灵感、拓宽认知的契机</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="achievement-content">
              <h3>协力同行</h3>
              <p className="achievement-result">增进默契，凝聚力量</p>
              <p className="achievement-desc">组织多样化的内部交流与团建活动，在轻松愉快的氛围中增进彼此了解与信任，共同面对挑战，点燃团队协作的火花</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="achievement-content">
              <h3>携手共进</h3>
              <p className="achievement-result">攻克难点，共同精进</p>
              <p className="achievement-desc">学长学姐亲手指导，针对技术难点分组攻坚，形成“传帮带”的良性循环，助力每位成员稳步成长，实现知识的有效传递</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
