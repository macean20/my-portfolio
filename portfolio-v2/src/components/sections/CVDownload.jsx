import PropTypes from 'prop-types'

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
  </svg>
)

export default function CVDownload({ cvUrl, tCv }) {
  const title = tCv?.title || '📄 Mon Curriculum Vitae'
  const desc = tCv?.desc || 'Téléchargez mon CV complet — formation, expériences, certifications et compétences'
  const btn = tCv?.btn || 'Télécharger le CV (PDF)'

  return (
    <div className="cv-download-section fade-in">
      <div className="cv-info">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href={cvUrl} download className="btn btn-primary">
        <DownloadIcon />
        {btn}
      </a>
    </div>
  )
}

CVDownload.propTypes = {
  cvUrl: PropTypes.string.isRequired,
  tCv: PropTypes.object,
}
