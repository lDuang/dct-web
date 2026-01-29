import { useState, useEffect, useRef } from 'react'
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react'

type ThemeMode = 'system' | 'light' | 'dark'

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
  const [theme, setTheme] = useState<ThemeMode>('system')
  const [effectiveDark, setEffectiveDark] = useState(false)
  const initializedRef = useRef(false)

  // 初始化和主题切换逻辑
  useEffect(() => {
    if (initializedRef.current) return

    // 初始化：读取保存的主题，默认为 system
    const savedTheme = (localStorage.getItem('theme') as ThemeMode) || 'system'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme === 'system' ? prefersDark : savedTheme === 'dark'

    setTheme(savedTheme)
    setEffectiveDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
    initializedRef.current = true

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (theme !== 'system') return
      const newDark = mediaQuery.matches
      if (newDark !== effectiveDark) {
        setEffectiveDark(newDark)
        document.documentElement.classList.toggle('dark', newDark)
      }
    }
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  // 主题切换处理
  useEffect(() => {
    if (!initializedRef.current) return

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = theme === 'system' ? prefersDark : theme === 'dark'

    if (shouldBeDark !== effectiveDark) {
      setEffectiveDark(shouldBeDark)
      document.documentElement.classList.toggle('dark', shouldBeDark)
    }
    localStorage.setItem('theme', theme)
  }, [theme, effectiveDark])

  // 平滑滚动和键盘事件
  useEffect(() => {
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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)

  const toggleTheme = () => {
    const modes: ThemeMode[] = ['system', 'light', 'dark']
    const currentIndex = modes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % modes.length
    setTheme(modes[nextIndex])
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'system':
        return <Monitor size={20} />
      case 'light':
        return <Sun size={20} />
      case 'dark':
        return <Moon size={20} />
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case 'system':
        return '跟随系统'
      case 'light':
        return '浅色模式'
      case 'dark':
        return '深色模式'
    }
  }

  return (
    <>
      {/* 桌面导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
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
                  className="text-sm text-(--color-text-secondary) hover:text-(--color-accent) transition"
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
              className="p-2 text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
              aria-label={`当前：${getThemeLabel()}，点击切换`}
              title={getThemeLabel()}
            >
              {getThemeIcon()}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
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
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-(--color-bg-card) z-50 p-6 transform transition-transform">
            <ul className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-lg text-(--color-text-secondary) hover:text-(--color-accent) transition"
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
