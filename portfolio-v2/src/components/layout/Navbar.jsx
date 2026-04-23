import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { personal } from '@data/personal'
import { SCROLL_THRESHOLD } from '@utils/constants'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact', isCta: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
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
        </ul>

        <button
          className="hamburger"
          aria-label="Menu mobile"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
