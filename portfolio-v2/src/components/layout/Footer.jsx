import { Link } from 'react-router-dom'
import { personal } from '@data/personal'
import { useLanguage } from '@contexts/LanguageContext'

/* ── Monogramme MC ─────────────────────────────────────── */
const MCMonogram = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="mc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00e5ff" />
        <stop offset="100%" stopColor="#7b61ff" />
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="54" height="54" rx="15" stroke="url(#mc-grad)" strokeWidth="1.5" fill="rgba(17,19,24,0.9)" />
    <text
      x="28" y="36"
      textAnchor="middle"
      fontFamily="Syne, sans-serif"
      fontWeight="800"
      fontSize="22"
      letterSpacing="-1"
      fill="url(#mc-grad)"
    >
      MC
    </text>
  </svg>
)

/* ── Icônes sociales ───────────────────────────────────── */
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const GitHubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
)
const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

/* ── React · Vite · Cloudflare mini-badges ─────────────── */
const TechBadge = ({ label }) => (
  <span className="footer-tech-badge">{label}</span>
)

const NAV_LINKS = [
  { to: '/', labelKey: 'home' },
  { to: '/about', labelKey: 'about' },
  { to: '/projects', labelKey: 'projects' },
  { to: '/certifications', labelKey: 'certifications' },
  { to: '/contact', labelKey: 'contact' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer role="contentinfo">
      <div className="footer-top">
        {/* Col 1 — Brand */}
        <div className="footer-brand-col">
          <MCMonogram />
          <div>
            <div className="footer-brand-name">{personal.displayName}</div>
            <div className="footer-brand-tagline">{t.footer.tagline}</div>
          </div>
          <div className="footer-social-row">
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link" title="LinkedIn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={personal.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-link" title="Instagram" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Col 2 — Liens rapides */}
        <div className="footer-nav-col">
          <div className="footer-col-title">{t.footer.quickLinks}</div>
          <nav>
            {NAV_LINKS.map(link => (
              <Link key={link.to} to={link.to} className="footer-nav-link">
                {t.nav[link.labelKey]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div className="footer-contact-col">
          <div className="footer-col-title">{t.footer.contact}</div>
          <div className="footer-contact-list">
            <a href={`tel:${personal.phone}`} className="footer-contact-item">
              <PhoneIcon />
              <span>{personal.phone}</span>
            </a>
            <a href={`mailto:${personal.email}`} className="footer-contact-item">
              <EmailIcon />
              <span>{personal.email}</span>
            </a>
            <div className="footer-contact-item">
              <MapPinIcon />
              <span>Dakar, Sénégal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-tech-row">
            <TechBadge label="React" />
            <TechBadge label="Vite" />
            <TechBadge label="Cloudflare" />
          </span>
          <span className="footer-built">{t.footer.builtWith}</span>
        </div>
        <p className="footer-copy">
          © 2026 <span>{personal.displayName}</span> · {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
