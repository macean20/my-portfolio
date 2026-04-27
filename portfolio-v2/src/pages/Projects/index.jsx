import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { useProjectFilter } from '@hooks/useProjectFilter'
import { useLanguage } from '@contexts/LanguageContext'
import { projects } from '@data/projects'
import { personal } from '@data/personal'
import SectionHeader from '@components/ui/SectionHeader'
import ProjectCard from '@components/ui/ProjectCard'
import CVDownload from '@components/sections/CVDownload'

export default function Projects() {
  const { t } = useLanguage()

  const localizedProjects = projects.map(p => ({
    ...p,
    ...t.projects.items[p.id],
  }))

  const filterCategories = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'prog', label: t.projects.filters.prog },
    { id: 'devops', label: t.projects.filters.devops },
    { id: 'linux', label: t.projects.filters.linux },
    { id: 'network', label: t.projects.filters.network },
    { id: 'docker', label: t.projects.filters.docker },
  ]

  const { activeFilter, setActiveFilter, filtered } = useProjectFilter(localizedProjects)
  useScrollAnimation()

  return (
    <section id="projects" aria-label="Mes projets">
      <div className="section">
        <SectionHeader tag={t.projects.tag} title={t.projects.title} highlightWord={t.projects.highlightWord} />

        <div className="projects-filter">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid stagger">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} tProjects={t.projects} />
          ))}
        </div>

        <CVDownload cvUrl={personal.cv} tCv={t.cv} />
      </div>
    </section>
  )
}
