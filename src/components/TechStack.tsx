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
    tags: [
      { name: 'React', icon: 'react' },
      { name: 'Vue', icon: 'vuedotjs' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'React Native', icon: 'react' },
      { name: 'Tauri', icon: 'tauri' },
      { name: 'Electron', icon: 'electron' },
      { name: 'Figma', icon: 'figma' },
      { name: 'UI Kit', icon: 'uikit' },
    ],
  },
  {
    icon: Server,
    title: '后端开发',
    tags: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'Swift', icon: 'swift' },
      { name: 'Golang', icon: 'go' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Rust', icon: 'rust' },
      { name: 'Zig', icon: 'zig' },
    ],
  },
  {
    icon: Database,
    title: '数据库',
    tags: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Redis', icon: 'redis' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Swift Data', icon: 'swift' },
    ],
  },
  {
    icon: Cloud,
    title: '运维/测开',
    tags: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'K3s', icon: 'kubernetes' },
      { name: 'Cloud Native', icon: 'cloudflare' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    icon: Cpu,
    title: '嵌入式系统',
    tags: [
      { name: 'ROS', icon: 'ros' },
      { name: 'FreeRTOS', icon: '' },
      { name: 'Raspberry Pi', icon: 'raspberrypi' },
      { name: 'Arduino', icon: 'arduino' },
      { name: 'STM32', icon: 'stmicroelectronics' },
    ],
  },
  {
    icon: Brain,
    title: '算法竞赛',
    tags: [
      { name: 'C++', icon: 'cplusplus' },
      { name: '数据结构', icon: 'python' },
      { name: 'LeetCode', icon: 'leetcode' },
      { name: '洛谷', icon: 'https://fecdn.luogu.com.cn/columba/static.325908fec383795b.logo-single-color.svg' },
      { name: '蓝桥杯', icon: 'c' },
    ],
  },
]

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)

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
          <span className="text-xs font-semibold tracking-widest text-(--color-accent) uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl font-semibold">技术领域</h2>
          <p className="text-(--color-text-secondary)">
            全栈技术探索，从前端到后端，从算法到嵌入式
          </p>
        </div>

        {/* 技术卡片 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const isHovered = hoveredCategory === category.title
            return (
              <div
                key={category.title}
                className="group bg-(--color-bg-card) rounded-2xl p-6 space-y-5 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? `translateY(0)`
                    : `translateY(${20 + index * 8}px)`,
                  boxShadow: isHovered
                    ? '0 8px 32px -8px var(--color-accent-20)'
                    : 'none',
                }}
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl bg-(--color-accent-soft) flex items-center justify-center transition-all duration-300"
                    style={{
                      transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                      boxShadow: isHovered
                        ? '0 4px 16px var(--color-accent-15)'
                        : 'none',
                    }}
                  >
                    <category.icon
                      className="text-(--color-accent) transition-transform duration-300"
                      size={20}
                      style={{
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                  </div>
                  <h3
                    className="font-semibold transition-colors duration-300"
                    style={{ color: isHovered ? 'var(--color-accent)' : 'inherit' }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => {
                    const isTagHovered = hoveredTag === tag.name
                    return (
                      <span
                        key={tag.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-(--color-bg-surface) text-(--color-text-secondary) transition-all duration-300 cursor-default"
                        style={{
                          opacity: isTagHovered ? 1 : isHovered ? 0.9 : 0.7,
                          transform: isTagHovered ? 'translateY(-2px)' : 'translateY(0)',
                          color: isTagHovered ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                        }}
                        onMouseEnter={() => setHoveredTag(tag.name)}
                        onMouseLeave={() => setHoveredTag(null)}
                      >
                        {tag.icon && (
                          <img
                            src={tag.icon.startsWith('http') ? tag.icon : `https://cdn.simpleicons.org/${tag.icon}?viewbox=auto`}
                            alt={tag.name}
                            width={14}
                            height={14}
                          />
                        )}
                        {tag.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack
