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
  const [menuOpen, setMenuOpen] = useState(false)

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

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'zh' : 'en')
  }

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="site-header">
      <a className="site-name" href="#home">
        Macy Xiang
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <nav
        className={`site-nav ${menuOpen ? 'is-open' : ''}`}
        id="mobile-navigation"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <button
          className="text-toggle"
          type="button"
          onClick={() => {
            toggleLanguage()
            setMenuOpen(false)
          }}
        >
          {labels.language}
        </button>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={toggleTheme}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '●'}</span>
        </button>
      </nav>
    </header>
  )
}

export default Header
