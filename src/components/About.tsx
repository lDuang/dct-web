/* components/About.tsx */
import { useEffect, useRef, useState } from 'react'
import { Lightbulb, Users, Trophy } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: '技术创新',
    desc: '探索前沿技术，用创新思维解决实际问题',
  },
  {
    icon: Users,
    title: '团队协作',
    desc: '学长学姐悉心指导，团队成员互相学习成长',
  },
  {
    icon: Trophy,
    title: '竞赛实践',
    desc: '积极参与各类编程竞赛，在实战中提升能力',
  },
]

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(32px)' }}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* 标题区 */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-(--color-accent) uppercase">
            About Us
          </span>
          <h2 className="text-4xl font-semibold">关于我们</h2>
          <p className="text-(--color-text-secondary)">专业的技术团队，用心培养每一位成员</p>
        </div>

        {/* 简介区 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">工作室简介</h3>
            <div className="space-y-4 text-(--color-text-secondary) leading-relaxed">
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
          <div className="relative">
            <div className="absolute inset-0 bg-(--color-accent-soft) rounded-2xl blur-2xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden border border-(--glass-border)">
              <img
                src="https://cloud.duapp.dev/f/qaHY/GFGYhuQb_EXDobluD.png"
                alt="Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* 特性卡片 */}
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isHovered = hoveredFeature === feature.title
            return (
              <div
                key={feature.title}
                className="group bg-(--color-bg-card) rounded-2xl p-6 space-y-4 transition-all duration-400"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : `translateY(${20 + index * 6}px)`,
                  boxShadow: isHovered ? '0 8px 24px -8px var(--color-accent-20)' : 'none',
                }}
                onMouseEnter={() => setHoveredFeature(feature.title)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div
                  className="w-12 h-12 rounded-xl bg-(--color-accent-soft) flex items-center justify-center transition-all duration-300"
                  style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                >
                  <feature.icon
                    className="text-(--color-accent) transition-transform duration-300"
                    size={24}
                    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                  />
                </div>
                <h4
                  className="text-lg font-semibold transition-colors duration-300"
                  style={{ color: isHovered ? 'var(--color-accent)' : 'inherit' }}
                >
                  {feature.title}
                </h4>
                <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
