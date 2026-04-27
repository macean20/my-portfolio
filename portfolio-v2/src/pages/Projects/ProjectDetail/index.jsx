import { Link, useParams, Navigate } from 'react-router-dom'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { useLanguage } from '@contexts/LanguageContext'
import { projects } from '@data/projects'
import Tag from '@components/ui/Tag'

export default function ProjectDetail() {
  const { id } = useParams()
  const { t } = useLanguage()
  const project = projects.find(p => p.id === id)
  useScrollAnimation()

  if (!project) return <Navigate to="/projects" replace />

  const tItem = t.projects.items[id] || {}
  const title = tItem.title || project.title
  const description = tItem.description || project.description
  const categoryLabel = tItem.categoryLabel || project.categoryLabel

  const detail = project.detail || {}
  const displayTags = detail.tags || project.tags
  const features = detail.features || []

  return (
    <main className="page">
      <div className="proj-hero">
        <Link to="/projects" className="back-link">{t.projectDetail.back}</Link>
        <div className="hero-eyebrow">{categoryLabel}</div>
        <h1 className="hero-name" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '1rem' }}>
          <img
            src={project.icon}
            alt={title}
            style={{ width: 48, height: 48, verticalAlign: 'middle', marginRight: '0.5rem', objectFit: 'contain' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          {title}
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '600px', marginBottom: '2rem' }}>
          {detail.subtitle || description}
        </p>
        <div className="proj-meta">
          <span className={`project-category ${project.categoryClass}`}>{categoryLabel}</span>
          {displayTags.map(tag => (
            <Tag key={tag.label} label={tag.label} variant={tag.variant} />
          ))}
        </div>
        <div className="hero-btns">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.projectDetail.github}
            </a>
          )}
          <Link to="/contact" className="btn btn-outline">{t.projectDetail.contactBtn}</Link>
        </div>
      </div>

      <div className="proj-content fade-in">
        <h3>{t.projectDetail.descTitle}</h3>
        <p>{detail.subtitle || description}</p>

        <h3>{t.projectDetail.techTitle}</h3>
        <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
          {project.tags.map(tag => (
            <Tag key={tag.label} label={tag.label} variant={tag.variant} />
          ))}
        </div>

        {features.length > 0 && (
          <>
            <h3>{t.projectDetail.featuresTitle}</h3>
            <ul className="feature-list">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </>
        )}

        <div style={{ marginTop: '2rem' }}>
          <Link to="/contact" className="btn btn-primary">{t.projectDetail.discuss}</Link>
        </div>
      </div>
    </main>
  )
}
