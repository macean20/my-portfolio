import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

describe('Navbar', () => {
  it('affiche tous les liens de navigation', () => {
    renderNavbar()
    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('À propos')).toBeInTheDocument()
    expect(screen.getByText('Projets')).toBeInTheDocument()
    expect(screen.getByText('Certifications')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('affiche le logo avec le nom', () => {
    renderNavbar()
    expect(screen.getByText('Macean Christopher')).toBeInTheDocument()
  })

  it('le menu hamburger toggle la visibilité du menu', () => {
    renderNavbar()
    const hamburger = screen.getByRole('button', { name: /menu mobile/i })
    const menu = document.getElementById('nav-menu')

    expect(menu).not.toHaveClass('open')
    fireEvent.click(hamburger)
    expect(menu).toHaveClass('open')
    fireEvent.click(hamburger)
    expect(menu).not.toHaveClass('open')
  })
})
