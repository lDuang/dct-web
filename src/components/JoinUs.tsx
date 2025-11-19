import './JoinUs.css';

const JoinUs = () => {
  return (
    <section className="join-us" id="join">
      <div className="container">
        <div className="section-header">
          <h2>加入我们</h2>
          <p>与志同道合的伙伴一起，在技术的海洋中自由航行</p>
        </div>
        <div className="join-content">
          <div className="join-info">
            <div className="join-card">
              <h3>我们寻找</h3>
              <ul className="join-requirements">
                <li><i className="fas fa-check"></i> 热爱编程，对技术充满好奇心</li>
                <li><i className="fas fa-check"></i> 具备自学能力，愿意持续学习</li>
                <li><i className="fas fa-check"></i> 积极参与团队协作</li>
                <li><i className="fas fa-check"></i> 计科学院在校24/25级学生</li>
              </ul>
            </div>

            <div className="join-card">
              <h3>我们提供</h3>
              <ul className="join-benefits">
                <li><i className="fas fa-star"></i> 学长学姐悉心指导</li>
                <li><i className="fas fa-star"></i> 丰富的项目实践机会</li>
                <li><i className="fas fa-star"></i> 竞赛培训与参赛机会</li>
                <li><i className="fas fa-star"></i> 完善的学习资源</li>
                <li><i className="fas fa-star"></i> 志同道合的技术伙伴</li>
              </ul>
            </div>
          </div>

          <div className="join-cta">
            <div className="cta-content">
              <h3>准备好开始你的技术之旅了吗？</h3>
              <p>扫描二维码或联系我们，加入典创工作室大家庭</p>
              <div className="contact-methods">
                <div className="contact-item">
                  <i className="fab fa-qq"></i>
                  <span>QQ群：715940323</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>邮箱：outside@duapp.dev</span>
                </div>
              </div>
              <a href="https://qm.qq.com/cgi-bin/qm/qr?k=Y9XgCa9SyryugaAEqjm1i_CtI-cHenP6&jump_from=webapi&authKey=AiaPPy7DDEmKLfMDgVD4er1hVNq4h0HciXudWTlxhVp5SZLcusQN3yc7DPzeWRrS" className="btn btn-primary btn-large">
                <i className="fas fa-paper-plane"></i>
                <span>立即申请</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
