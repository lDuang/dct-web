import { useEffect, useRef, useState } from 'react';

const techCategories = [
  {
    icon: 'fab fa-react',
    title: '前端开发',
    tags: ['React', 'Vue', 'JS/TS', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: 'fas fa-server',
    title: '后端开发',
    tags: ['Golang', 'Rust', 'Node.js', 'Java', 'Zig', 'Spring Boot'],
  },
  {
    icon: 'fas fa-database',
    title: '数据库',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'MySQL'],
  },
  {
    icon: 'fas fa-cloud',
    title: '运维/测开',
    tags: ['Docker', 'Kubernetes', 'K3s', '云原生', 'Paas', 'Saas'],
  },
  {
    icon: 'fas fa-microchip',
    title: '嵌入式系统',
    tags: ['ROS', 'FreeRTOS', '树莓派', 'Arduino', 'STM32'],
  },
  {
    icon: 'fas fa-brain',
    title: '算法竞赛',
    tags: ['C++', '数据结构', '算法设计', 'LeetCode', '蓝桥杯'],
  },
];

const TechStack = () => {
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
    <section ref={sectionRef} id="tech">
      <div>
        <div>
          <span>TECH STACK</span>
          <h2>技术领域</h2>
          <p>全栈技术探索，从前端到后端，从算法到嵌入式</p>
        </div>
        <div>
          {techCategories.map((category) => (
            <div key={category.title}>
              <div>
                <div>
                  <i className={category.icon} />
                </div>
                <h3>{category.title}</h3>
              </div>
              <div>
                {category.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
