import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page" aria-label="Page introuvable">
      <div className="section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="section-tag">Erreur 404</div>
        <h1 className="section-title">
          Page <span className="gradient-text">introuvable</span>
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '400px' }}>
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary">← Retour à l'accueil</Link>
      </div>
    </section>
  )
}
