import { useEffect, useState } from 'react'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')

  if (saved === 'light' || saved === 'dark') {
    return saved
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Header({ lang, setLang, labels }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const navItems = [
    { label: labels.about, href: '#about' },
    { label: labels.projects, href: '#projects' },
    { label: labels.experience, href: '#experience' },
    { label: labels.resume, href: '#resume' },
    { label: labels.contact, href: '#contact' },
  ]

  return (
    <header className="site-header">
      <a className="site-name" href="#home">
        Macy Xiang
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <button
          className="text-toggle"
          type="button"
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
        >
          {labels.language}
        </button>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '●'}</span>
        </button>
      </nav>
    </header>
  )
}

export default Header
