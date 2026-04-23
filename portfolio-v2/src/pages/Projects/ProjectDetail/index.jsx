import { Link, useParams, Navigate } from 'react-router-dom'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { projects } from '@data/projects'
import Tag from '@components/ui/Tag'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  useScrollAnimation()

  if (!project) return <Navigate to="/projects" replace />

  const detail = project.detail || {}
  const displayTags = detail.tags || project.tags
  const features = detail.features || []

  return (
    <main className="page">
      <div className="proj-hero">
        <Link to="/projects" className="back-link">← Retour aux projets</Link>
        <div className="hero-eyebrow">{project.categoryLabel}</div>
        <h1 className="hero-name" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '1rem' }}>
          {project.icon} {project.title}
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '600px', marginBottom: '2rem' }}>
          {detail.subtitle || project.description}
        </p>
        <div className="proj-meta">
          <span className={`project-category ${project.categoryClass}`}>{project.categoryLabel}</span>
          {displayTags.map(tag => (
            <Tag key={tag.label} label={tag.label} variant={tag.variant} />
          ))}
        </div>
        <div className="hero-btns">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              🐙 Voir sur GitHub
            </a>
          )}
          <Link to="/contact" className="btn btn-outline">💬 Me contacter</Link>
        </div>
      </div>

      <div className="proj-content fade-in">
        <h3>📋 Description du projet</h3>
        <p>{detail.subtitle || project.description}</p>

        <h3>⚙️ Technologies utilisées</h3>
        <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
          {project.tags.map(tag => (
            <Tag key={tag.label} label={tag.label} variant={tag.variant} />
          ))}
        </div>

        {features.length > 0 && (
          <>
            <h3>✅ Fonctionnalités principales</h3>
            <ul className="feature-list">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </>
        )}

        <div style={{ marginTop: '2rem' }}>
          <Link to="/contact" className="btn btn-primary">📧 Discuter de ce projet</Link>
        </div>
      </div>
    </main>
  )
}
