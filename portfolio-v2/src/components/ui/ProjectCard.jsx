import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tag from './Tag'

export default function ProjectCard({ project, tProjects }) {
  const { id, icon, bgGradient, title, category, categoryLabel, categoryClass, description, tags, githubUrl } = project

  return (
    <article className="project-card" data-category={category}>
      <div
        className="project-header"
        style={bgGradient ? { background: bgGradient } : {}}
      >
        <div className="project-icon">
          <img
            src={icon}
            alt={title}
            className="project-icon-img"
            onError={e => { e.currentTarget.style.opacity = '0.3' }}
          />
        </div>
        <span className={`project-category ${categoryClass}`}>{categoryLabel}</span>
        <h3 className="project-title">{title}</h3>
      </div>
      <div className="project-body">
        <p className="project-desc">{description}</p>
        <div className="project-tech">
          {tags.map(tag => (
            <Tag key={tag.label} label={tag.label} variant={tag.variant} />
          ))}
        </div>
      </div>
      <div className="project-footer">
        <Link to={`/projects/${id}`} className="btn-project btn-live">
          {tProjects ? tProjects.viewProject : '🔗 Voir le projet'}
        </Link>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-project btn-code"
          >
            {tProjects ? tProjects.code : '⌥ Code'}
          </a>
        )}
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    bgGradient: PropTypes.string,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    categoryLabel: PropTypes.string.isRequired,
    categoryClass: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, variant: PropTypes.string })
    ).isRequired,
    githubUrl: PropTypes.string,
  }).isRequired,
  tProjects: PropTypes.object,
}
