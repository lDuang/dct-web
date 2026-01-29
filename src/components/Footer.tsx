/* components/Footer.tsx */
import { useEffect, useRef, useState } from 'react'
import { Mail, Github, Code } from 'lucide-react'

const quickLinks = [
  { label: '首页', href: '#home' },
  { label: '关于我们', href: '#about' },
  { label: '技术领域', href: '#tech' },
  { label: '荣誉墙', href: '#honor-wall' },
  { label: '竞赛与成长', href: '#achievements' },
  { label: '加入我们', href: '#join' },
]

const techAreas = ['前端开发', '后端开发', '嵌入式系统', '算法竞赛']

const friendLinks = [
  { label: 'GitHub', href: 'https://github.com/dct-web' },
  { label: 'Blog', href: 'https://blog.coderpath.me' },
  { label: 'VS Code', href: 'https://code.visualstudio.com/' },
]

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)

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

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="py-16 px-6 border-t border-[var(--glass-border)] bg-[var(--color-bg-card)]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* 品牌区 */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3">
              <img
                src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png"
                alt="DCT"
                className="w-10 h-10"
              />
              <span className="font-semibold">典创工作室</span>
            </a>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              代码与梦想，自由生长。汇聚热爱编程的学子，在技术的世界里探索无限可能。
            </p>
            <div>
              <h4 className="font-semibold mb-4">友情链接</h4>
              <ul className="space-y-2">
                {friendLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 快速导航 */}
          <div>
            <h4 className="font-semibold mb-4">快速导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 技术领域 + 联系 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4">技术领域</h4>
              <ul className="space-y-3">
                {techAreas.map((area) => (
                  <li key={area}>
                    <span className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <Code size={14} />
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">联系我们</h4>
              <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <p>QQ：715940323</p>
                <p>outside@duapp.dev</p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            © 2025 典创工作室. 保留所有权利.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dct-web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:outside@duapp.dev"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
