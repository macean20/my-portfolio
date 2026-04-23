import { Link } from 'react-router-dom'
import { personal } from '@data/personal'
import HeroTerminal from '@components/sections/HeroTerminal'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const ProjectsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
  </svg>
)

const UserIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

export default function Home() {
  useScrollAnimation()

  return (
    <section id="home" className="page" aria-label="Introduction">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-status fade-in">
            <span className="pulse" />
            {personal.status}
          </div>

          <div className="hero-eyebrow fade-in">{personal.title}</div>
          <h1 className="hero-name fade-in">{personal.displayName}</h1>
          <p className="hero-role fade-in">
            Étudiant <span className="highlight" />
            <span className="gradient-text">{personal.role}</span>
          </p>

          <HeroTerminal
            formation={personal.formation}
            location={personal.location}
            stack={personal.stack}
            certs={personal.certs}
            status="open_to_internship=true"
          />

          <p className="hero-desc fade-in">{personal.bio}</p>

          <div className="hero-btns fade-in">
            <Link to="/projects" className="btn btn-primary">
              <ProjectsIcon />
              Voir mes projets
            </Link>
            <a href={personal.cv} download className="btn btn-outline">
              <DownloadIcon />
              Télécharger CV
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap fade-in">
          <div className="hero-photo-frame">
            <img
              src={personal.photo}
              alt={`Photo de profil de ${personal.displayName}`}
              className="hero-photo"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            <div className="hero-photo-placeholder" aria-hidden="true">
              <UserIcon />
              <span>Votre photo ici<br /><small>public/assets/img/profile.jpeg</small></span>
            </div>
            <div className="hero-badge">
              <span className="hero-badge-num">{personal.certCount}</span>
              Certifications
            </div>
            <div className="hero-stats">
              <div className="hero-stats-row">
                <span className="pulse" />
                ISM Dakar · En cours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
