import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navItems = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于我们' },
  { href: '#tech', label: '技术领域' },
  { href: '#honor-wall', label: '荣誉墙' },
  { href: '#achievements', label: '竞赛与成长' },
  { href: '#join', label: '加入我们' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // 检测系统主题并初始化
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          const target = document.querySelector(href)
          if (target instanceof HTMLElement) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth',
            })
            setMobileMenuOpen(false)
          }
        }
      })
    })

    // ESC 关闭菜单
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle('dark', newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  return (
    <>
      {/* 桌面导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - 只保留图标 */}
          <a href="#" className="flex items-center">
            <img
              src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png"
              alt="DCT"
              className="w-10 h-10"
            />
          </a>

          {/* 导航链接 - 居中 */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 右侧：主题切换 + 移动端菜单按钮 */}
          <div className="flex items-center gap-4">
            {/* 主题切换 */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition"
              aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition"
              aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端菜单遮罩 */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-[var(--color-bg-card)] z-50 p-6 transform transition-transform">
            <ul className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
