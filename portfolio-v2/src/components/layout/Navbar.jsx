import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { personal } from '@data/personal'
import { useLanguage } from '@contexts/LanguageContext'
import { SCROLL_THRESHOLD } from '@utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, toggleLang, t } = useLanguage()

  const NAV_LINKS = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/certifications', label: t.nav.certifications },
    { to: '/contact', label: t.nav.contact, isCta: true },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <nav
      id="navbar"
      role="navigation"
      aria-label="Navigation principale"
      style={scrolled ? { boxShadow: '0 2px 20px rgba(0,0,0,0.4)' } : {}}
    >
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          {personal.displayName}<span>{personal.logoSuffix}</span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-menu">
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={[
                  location.pathname === link.to ? 'active' : '',
                  link.isCta ? 'nav-cta' : '',
                ].join(' ').trim()}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
              <span className={lang === 'fr' ? 'lang-active' : ''}>FR</span>
              <span className="lang-sep">|</span>
              <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
            </button>
          </li>
        </ul>

        <div className="nav-right">
          <button className="lang-toggle lang-toggle-desktop" onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'fr' ? 'lang-active' : ''}>FR</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
          <button
            className="hamburger"
            aria-label="Menu mobile"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
