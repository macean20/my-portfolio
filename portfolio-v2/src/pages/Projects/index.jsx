import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { useProjectFilter } from '@hooks/useProjectFilter'
import { projects, filterCategories } from '@data/projects'
import { personal } from '@data/personal'
import SectionHeader from '@components/ui/SectionHeader'
import ProjectCard from '@components/ui/ProjectCard'
import CVDownload from '@components/sections/CVDownload'

export default function Projects() {
  const { activeFilter, setActiveFilter, filtered } = useProjectFilter(projects)
  useScrollAnimation()

  return (
    <section id="projects" aria-label="Mes projets">
      <div className="section">
        <SectionHeader tag="Projets" title="Réalisations techniques" highlightWord="techniques" />

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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <CVDownload cvUrl={personal.cv} />
      </div>
    </section>
  )
}
