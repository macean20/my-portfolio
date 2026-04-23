import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { certifications, upcomingCerts } from '@data/certifications'
import SectionHeader from '@components/ui/SectionHeader'
import CertCard from '@components/ui/CertCard'
import Tag from '@components/ui/Tag'

export default function Certifications() {
  useScrollAnimation()

  return (
    <section id="certifications" aria-label="Mes certifications">
      <div className="section">
        <SectionHeader tag="Certifications" title="Mes certifications" highlightWord="certifications" />
        <p style={{ color: 'var(--muted)', maxWidth: '600px', marginBottom: '2rem' }}>
          Certifications obtenues dans le cadre de ma formation et de mon apprentissage autonome,
          couvrant les réseaux, la cybersécurité et le marketing digital.
        </p>

        <div className="certs-grid stagger">
          {certifications.map(cert => (
            <CertCard key={cert.id} {...cert} />
          ))}
        </div>

        <div style={{
          marginTop: '2rem', padding: '1.5rem',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Objectifs en préparation</div>
          <div className="tools-list">
            {upcomingCerts.map(cert => (
              <Tag key={cert.label} label={cert.label} variant={cert.variant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
