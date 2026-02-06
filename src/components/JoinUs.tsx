/* components/JoinUs.tsx */
import { useEffect, useRef, useState } from 'react'
import { Search, Gift, Send } from 'lucide-react'

const requirements = [
  '热爱编程，对技术充满好奇心',
  '具备自学能力，愿意持续学习',
  '积极参与团队协作',
  '计科学院在校 24/25 级学生',
]

const benefits = [
  '学长学姐悉心指导',
  '丰富的项目实践机会',
  '竞赛培训与参赛机会',
  '完善的学习资源',
  '志同道合的技术伙伴',
]

const JoinUs = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

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
      id="join"
      className="py-24 px-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(32px)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 标题区 */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-(--color-accent) uppercase">
            Join Us
          </span>
          <h2 className="text-4xl font-semibold">加入我们</h2>
          <p className="text-(--color-text-secondary)">
            与志同道合的伙伴一起，在技术的海洋中自由航行
          </p>
        </div>

        {/* 内容区 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 我们寻找 */}
          <div
            className="bg-(--color-bg-card) rounded-2xl p-6 space-y-6 transition-all duration-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              boxShadow: hoveredCard === 'search' ? '0 8px 24px -8px var(--color-accent-20)' : 'none',
            }}
            onMouseEnter={() => setHoveredCard('search')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl bg-(--color-accent-soft) flex items-center justify-center transition-transform duration-300"
                style={{ transform: hoveredCard === 'search' ? 'scale(1.05)' : 'scale(1)' }}
              >
                <Search className="text-(--color-accent)" size={20} />
              </div>
              <h3
                className="font-semibold transition-colors duration-300"
                style={{ color: hoveredCard === 'search' ? 'var(--color-accent)' : 'inherit' }}
              >
                我们寻找
              </h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-(--color-text-secondary)">
                  <span className="text-(--color-accent) mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 我们提供 */}
          <div
            className="bg-(--color-bg-card) rounded-2xl p-6 space-y-6 transition-all duration-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              boxShadow: hoveredCard === 'benefits' ? '0 8px 24px -8px var(--color-accent-20)' : 'none',
            }}
            onMouseEnter={() => setHoveredCard('benefits')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl bg-(--color-accent-soft) flex items-center justify-center transition-transform duration-300"
                style={{ transform: hoveredCard === 'benefits' ? 'scale(1.05)' : 'scale(1)' }}
              >
                <Gift className="text-(--color-accent)" size={20} />
              </div>
              <h3
                className="font-semibold transition-colors duration-300"
                style={{ color: hoveredCard === 'benefits' ? 'var(--color-accent)' : 'inherit' }}
              >
                我们提供
              </h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-(--color-text-secondary)">
                  <span className="text-(--color-accent) mt-0.5">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系我们 */}
          <div
            className="bg-(--color-bg-card) rounded-2xl p-6 space-y-6 transition-all duration-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(36px)',
              boxShadow: hoveredCard === 'contact' ? '0 8px 24px -8px var(--color-accent-20)' : 'none',
            }}
            onMouseEnter={() => setHoveredCard('contact')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="font-semibold text-lg">准备好开始你的技术之旅了吗？</h3>
            <p className="text-sm text-(--color-text-secondary) leading-relaxed">
              扫描二维码或联系我们，加入典创工作室大家庭
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-(--color-accent)">QQ</span>
              <span className="text-(--color-text-secondary)">715940323</span>
            </div>
            <a
              href="https://qm.qqq.com/cgi-bin/qm/qr?k=Y9XgCa9SyryugaAEqjm1i_CtI-cHenP6&jump_from=webapi&authKey=AiaPPy7DDEmKLfMDgVD4er1hVNq4h0HciXudWTlxhVp5SZLcusQN3yc7DPzeWRrS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-(--color-accent) hover:bg-(--color-accent-strong) text-white font-medium transition hover:scale-105 active:scale-95"
            >
              <Send size={18} />
              <span>立即申请</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs
