/* components/TechStack.tsx */
import { useEffect, useRef, useState } from 'react'
import {
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Brain,
  HardDrive,
  Proportions,
  SquareTerminal,
} from 'lucide-react'

// 技术图标统一前缀
const TECH_ICON_PREFIX = '/tech-icons/'

// 定义技术分类数组
const techCategories = [
  {
    icon: Layout,
    title: '前端开发',
    tags: [
      { name: 'React', icon: 'react.svg' },
      { name: 'Vue', icon: 'vuedotjs.svg' },
      { name: 'Next.js', icon: 'nextdotjs.svg' },
      { name: 'React Native', icon: 'react.svg' },
      { name: 'Tauri', icon: 'tauri.svg' },
      { name: 'Electron', icon: 'electron.svg' },
      { name: 'Figma', icon: 'figma.svg' },
      { name: 'UI Kit', icon: 'uikit.svg' },
    ],
  },
  {
    icon: Server,
    title: '后端开发',
    tags: [
      { name: 'Node.js', icon: 'nodedotjs.svg' },
      { name: 'Java', icon: 'openjdk.svg' },
      { name: 'Swift', icon: 'swift.svg' },
      { name: 'Golang', icon: 'go.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'TypeScript', icon: 'typescript.svg' },
      { name: 'Rust', icon: 'rust.svg' },
      { name: 'Zig', icon: 'zig.svg' },
    ],
  },
  {
    icon: Database,
    title: '数据库',
    tags: [
      { name: 'PostgreSQL', icon: 'postgresql.svg' },
      { name: 'MongoDB', icon: 'mongodb.svg' },
      { name: 'Redis', icon: 'redis.svg' },
      { name: 'SQLite', icon: 'sqlite.svg' },
      { name: 'MySQL', icon: 'mysql.svg' },
      { name: 'Swift Data', icon: 'swift.svg' },
    ],
  },
  {
    icon: Cloud,
    title: '运维/测开',
    tags: [
      { name: 'Docker', icon: 'docker.svg' },
      { name: 'Kubernetes', icon: 'kubernetes.svg' },
      { name: 'K3s', icon: 'kubernetes.svg' },
      { name: 'Cloud Native', icon: 'cloudflare.svg' },
      { name: 'Vercel', icon: 'vercel.svg' },
    ],
  },
  {
    icon: Cpu,
    title: '嵌入式系统',
    tags: [
      { name: 'ROS', icon: 'ros.svg' },
      { name: 'FreeRTOS', icon: '' },
      { name: 'Raspberry Pi', icon: 'raspberrypi.svg' },
      { name: 'Arduino', icon: 'arduino.svg' },
      { name: 'STM32', icon: '' },
    ],
  },
  {
    icon: Brain,
    title: '算法竞赛',
    tags: [
      { name: 'C++', icon: 'cplusplus.svg' },
      { name: '数据结构', icon: 'python.svg' },
      { name: 'LeetCode', icon: 'leetcode.svg' },
      { name: '洛谷', icon: 'https://fecdn.luogu.com.cn/columba/static.325908fec383795b.logo-single-color.svg' },
      { name: '蓝桥杯', icon: 'c.svg' },
    ],
  },
  {
    icon: SquareTerminal,
    title: '编译器设计',
    tags: [
      { name: 'LLVM', icon: 'llvm.svg' },
      { name: 'Haskell', icon: 'haskell.svg' },
      { name: 'OCaml', icon: 'ocaml.svg' },
      { name: 'LoongArch', icon: '' }
    ]
  },
  {
    icon: HardDrive,
    title: '操作系统',
    tags: [
      { name: 'Linux', icon: 'linux.svg' },
      { name: 'FreeBSD', icon: 'freebsd.svg' },
      { name: 'OpenBSD', icon: 'openbsd.svg' },
      { name: 'NetBSD', icon: 'netbsd.svg' },
      { name: 'DragonFly BSD', icon: 'dragonflybsd.svg' },
      { name: 'RTOS', icon: '' },
      { name: 'Redox', icon: 'redox.svg' }
    ]
  },
  {
    icon: Proportions,
    title: 'GPU开发',
    tags: [
      { name: 'OpenGL', icon: 'opengl.svg' },
      { name: 'Vulkan', icon: 'vulkan.svg' },
      { name: 'WebGPU', icon: 'webgpu.svg' },
      { name: 'CUDA', icon: 'cuda.svg' }
    ]
  }
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
                            src={tag.icon.startsWith('http') ? tag.icon : `${TECH_ICON_PREFIX}${tag.icon}`}
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
