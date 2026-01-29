/* components/Hero.tsx */
import { useEffect, useState } from 'react'

const Hero = () => {
  const title = '典创工作室'
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(title.slice(0, i + 1))
      i += 1
      if (i === title.length) clearInterval(timer)
    }, 90)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center space-y-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            {text}
            <span className="inline-block ml-1 w-1.5 h-10 md:h-14 bg-[var(--color-accent)] animate-pulse rounded-sm" />
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)]">
            代码与创造力并行生长
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)]">
          典创工作室聚焦工程能力与长期主义，覆盖前端、后端、系统开发与算法方向。
          我们重视实践、协作与技术深度，让想法落地，让作品说话。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#tech"
            className="px-6 py-2.5 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-strong)] text-white font-medium transition"
          >
            技术方向
          </a>
          <a
            href="#join"
            className="px-6 py-2.5 rounded-full border-2 border-[var(--color-text-secondary)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] font-medium transition"
          >
            加入我们
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero