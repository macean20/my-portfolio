import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectCard from './ProjectCard'

const mockProject = {
  id: 'ci-cd-pipeline',
  icon: '🚀',
  title: 'Pipeline CI/CD Automatisé',
  category: 'devops',
  categoryLabel: 'CI/CD',
  categoryClass: 'cat-devops',
  description: 'Pipeline GitHub Actions automatisé.',
  tags: [
    { label: 'GitHub Actions', variant: 'purple' },
    { label: 'Docker', variant: '' },
  ],
  githubUrl: 'https://github.com/macean20/ci-cd-pipeline',
}

const renderCard = () =>
  render(
    <MemoryRouter>
      <ProjectCard project={mockProject} />
    </MemoryRouter>
  )

describe('ProjectCard', () => {
  it('affiche le titre du projet', () => {
    renderCard()
    expect(screen.getByText('Pipeline CI/CD Automatisé')).toBeInTheDocument()
  })

  it('affiche les tags', () => {
    renderCard()
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  it('le lien GitHub pointe vers la bonne URL', () => {
    renderCard()
    const link = screen.getByText('⌥ Code')
    expect(link).toHaveAttribute('href', 'https://github.com/macean20/ci-cd-pipeline')
  })

  it('le lien "Voir le projet" pointe vers la route correcte', () => {
    renderCard()
    const link = screen.getByText('🔗 Voir le projet')
    expect(link).toHaveAttribute('href', '/projects/ci-cd-pipeline')
  })
})
