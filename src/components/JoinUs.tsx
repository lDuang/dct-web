import { useEffect, useRef, useState } from 'react';

const requirements = [
  { icon: 'fa-check', text: '热爱编程，对技术充满好奇心' },
  { icon: 'fa-check', text: '具备自学能力，愿意持续愿意学习' },
  { icon: 'fa-check', text: '积极参与团队协作' },
  { icon: 'fa-check', text: '计科学院在校24/25级学生' },
];

const benefits = [
  { icon: 'fa-star', text: '学长学姐悉心指导' },
  { icon: 'fa-star', text: '丰富的项目实践机会' },
  { icon: 'fa-star', text: '竞赛培训与参赛机会' },
  { icon: 'fa-star', text: '完善的学习资源' },
  { icon: 'fa-star', text: '志同道合的技术伙伴' },
];

const JoinUs = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="join">
      <div>
        <div>
          <span>JOIN US</span>
          <h2>加入我们</h2>
          <p>与志同道合的伙伴一起，在技术的海洋中自由航行</p>
        </div>
        <div>
          <div>
            <div>
              <h3>
                <span>
                  <i className="fas fa-search" />
                </span>
                我们寻找
              </h3>
              <ul>
                {requirements.map((item) => (
                  <li key={item.text}>
                    <i className={`fas ${item.icon}`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3>
                <span>
                  <i className="fas fa-gift" />
                </span>
                我们提供
              </h3>
              <ul>
                {benefits.map((item) => (
                  <li key={item.text}>
                    <i className={`fas ${item.icon}`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3>准备好开始你的技术之旅了吗？</h3>
              <p>扫描二维码或联系我们，加入典创工作室大家庭</p>
              <div>
                <div>
                  <i className="fab fa-qq" />
                  <span>QQ群：715940323</span>
                </div>
                <div>
                  <i className="fas fa-envelope" />
                  <span>邮箱：outside@duapp.dev</span>
                </div>
              </div>
              <a
                href="https://qm.qqq.com/cgi-bin/qm/qr?k=Y9XgCa9SyryugaAEqjm1i_CtI-cHenP6&jump_from=webapi&authKey=AiaPPy7DDEmKLfMDgVD4er1hVNq4h0HciXudWTlxhVp5SZLcusQN3yc7DPzeWRrS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-paper-plane" />
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
