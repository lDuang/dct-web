import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: 'fa-lightbulb',
    title: '技术创新',
    desc: '探索前沿技术，用创新思维解决实际问题',
  },
  {
    icon: 'fa-users',
    title: '团队协作',
    desc: '学长学姐悉心指导，团队成员互相学习成长',
  },
  {
    icon: 'fa-trophy',
    title: '竞赛实践',
    desc: '积极参与各类编程竞赛，在实战中提升能力',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about">
      <div>
        <div>
          <span>ABOUT US</span>
          <h2>关于我们</h2>
          <p>专业的技术团队，用心培养每一位成员</p>
        </div>
        <div>
          <div>
            <h3>工作室简介</h3>
            <div>
              <p>
                典创工作室隶属于喀什大学计算机科学与技术学院，是一个专注于技术创新的学生工作室。
                我们相信技术的力量能够改变世界，每一行代码都承载着创造者的梦想。
              </p>
              <p>
                我们的团队由热爱编程的学子组成，在学院的指导和学长学姐的带领下，
                共同探索技术的边界，在实践中成长，在挑战中进步。
              </p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <img src="https://cloud.duapp.dev/f/qaHY/GFGYhuQb_EXDobluD.png" alt="Team" />
            </div>
          </div>
        </div>
        <div>
          {features.map((feature) => (
            <div key={feature.title}>
              <div>
                <i className={`fas ${feature.icon}`} />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
