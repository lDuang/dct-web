/* components/TechStack.tsx */
import { useEffect, useRef, useState } from 'react'
import {
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Brain,
} from 'lucide-react'

const techCategories = [
  {
    icon: Layout,
    title: '前端开发',
    tags: ['React', 'Vue', 'JS/TS', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: '后端开发',
    tags: ['Golang', 'Rust', 'Node.js', 'Java', 'Zig', 'Spring Boot'],
  },
  {
    icon: Database,
    title: '数据库',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'MySQL'],
  },
  {
    icon: Cloud,
    title: '运维/测开',
    tags: ['Docker', 'Kubernetes', 'K3s', '云原生', 'PaaS', 'SaaS'],
  },
  {
    icon: Cpu,
    title: '嵌入式系统',
    tags: ['ROS', 'FreeRTOS', '树莓派', 'Arduino', 'STM32'],
  },
  {
    icon: Brain,
    title: '算法竞赛',
    tags: ['C++', '数据结构', '算法设计', 'LeetCode', '蓝桥杯'],
  },
]

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="py-24 px-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(32px)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 标题区 */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl font-semibold">技术领域</h2>
          <p className="text-[var(--color-text-secondary)]">
            全栈技术探索，从前端到后端，从算法到嵌入式
          </p>
        </div>

        {/* 技术卡片 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[var(--color-bg-card)] rounded-xl p-6 space-y-5 border border-[var(--glass-border)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center">
                  <category.icon className="text-[var(--color-accent)]" size={20} />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--glass-border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
