import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { useLanguage } from '@contexts/LanguageContext'
import { certifications } from '@data/certifications'
import SectionHeader from '@components/ui/SectionHeader'
import CertCard from '@components/ui/CertCard'

export default function Certifications() {
  const { t } = useLanguage()
  useScrollAnimation()

  return (
    <section id="certifications" aria-label="Mes certifications">
      <div className="section">
        <SectionHeader tag={t.certifications.tag} title={t.certifications.title} highlightWord={t.certifications.highlightWord} />
        <p style={{ color: 'var(--muted)', maxWidth: '600px', marginBottom: '2rem' }}>
          {t.certifications.description}
        </p>

        <div className="certs-grid stagger">
          {certifications.map(cert => (
            <CertCard key={cert.id} {...cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
