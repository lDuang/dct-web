/* components/Achievements.tsx */
import { useEffect, useRef, useState } from 'react'
import { Trophy, Bot, Lightbulb, BookOpen, Laptop, Users } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: '蓝桥杯-全国软件和信息技术专业人才大赛',
    result: '个人赛全国二等奖/省级奖项一二等数个',
    desc: '从基础刷题到实战备赛，团队协作复盘错题，在算法与编程中沉淀能力',
  },
  {
    icon: Bot,
    title: '中国机器人及人工智能大赛',
    result: '全国二等奖/省级奖项数个',
    desc: '从硬件组装到代码调试，在机器人控制实践中磨合技术与协作',
  },
  {
    icon: Lightbulb,
    title: '全国大学生创新创业大赛',
    result: '国奖/省奖数个',
    desc: '从创意构思到落地开发，完整经历项目全流程，积累实战经验',
  },
  {
    icon: BookOpen,
    title: '思想交汇',
    result: '汇聚智慧，拓展视野',
    desc: '随时随地技术思享，碰撞新的火花，分享学习心得与个人洞察',
  },
  {
    icon: Laptop,
    title: '协力同行',
    result: '增进默契，凝聚力量',
    desc: '组织多样化的内部交流与团建活动，在轻松愉快的氛围中增进彼此了解与信任',
  },
  {
    icon: Users,
    title: '携手共进',
    result: '攻克难点，共同精进',
    desc: '学长学姐亲手指导，针对技术难点分组攻坚，形成"传帮带"的良性循环',
  },
]

const Achievements = () => {
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
      id="achievements"
      className="py-24 px-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(32px)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 标题区 */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase">
            Achievements
          </span>
          <h2 className="text-4xl font-semibold">竞赛与成长</h2>
          <p className="text-[var(--color-text-secondary)]">
            在实践与积累中前行，记录每一步成长印记
          </p>
        </div>

        {/* 成就卡片 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--color-bg-card)] rounded-xl p-6
                space-y-4 border border-[var(--glass-border)]
                hover:border-[var(--color-accent)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center">
                <item.icon className="text-[var(--color-accent)]" size={24} />
              </div>
              <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
              <p className="text-sm text-[var(--color-accent)] font-medium">{item.result}</p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
