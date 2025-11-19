import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const originalHeroTitle = "典创工作室";
  const [displayedHeroTitle, setDisplayedHeroTitle] = useState('');
  const typeSpeed = 100;

  useEffect(() => {
    const typeWriter = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < originalHeroTitle.length) {
          setDisplayedHeroTitle(originalHeroTitle.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, typeSpeed);
      return () => clearInterval(interval);
    };

    const timer = setTimeout(typeWriter, 1200); // Start typing effect after a delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-code"></i>
            <span>喀什大学-计算机科学与技术学院</span>
          </div>
          <h1 className="hero-title">{displayedHeroTitle}</h1>
          <p className="hero-subtitle">代码与梦想，自由生长</p>
          <p className="hero-description">
            典创工作室，汇聚热爱编程、勇于创新的学子，共同探索前端、后端开发、嵌入式系统、算法竞赛等前沿技术领域。在这里，我们致力于将技术与创意碰撞，让梦想与实践并行，培养未来技术领军人才。
          </p>
          <div className="hero-buttons">
            <a href="#tech" className="btn btn-primary">
              <i className="fas fa-rocket"></i>
              <span>探索技术</span>
            </a>
            <a href="#join" className="btn btn-secondary">
              <i className="fas fa-users"></i>
              <span>加入我们</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
