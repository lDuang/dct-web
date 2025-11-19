import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>关于我们</h2>
          <p>专业的技术团队，用心培养每一位成员</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>工作室简介</h3>
            <p>典创工作室隶属于喀什大学计算机科学与技术学院，是一个专注于技术创新的学生工作室。我们相信技术的力量能够改变世界，每一行代码都承载着创造者的梦想。</p>
            <p>我们的团队由热爱编程的学子组成，在学院的指导和学长学姐的带领下，共同探索技术的边界，在实践中成长，在挑战中进步。</p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h4>技术创新</h4>
                  <p>探索前沿技术，用创新思维解决实际问题</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h4>团队协作</h4>
                  <p>学长学姐悉心指导，团队成员互相学习成长</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div>
                  <h4>竞赛实践</h4>
                  <p>积极参与各类编程竞赛，在实战中提升能力</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://cloud.duapp.dev/f/qaHY/GFGYhuQb_EXDobluD.png" alt="团队" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
