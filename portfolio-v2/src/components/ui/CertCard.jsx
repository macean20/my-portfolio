import PropTypes from 'prop-types'

export default function CertCard({ icon, name, issuer, logoClass, date }) {
  return (
    <div className="cert-card">
      <div className={`cert-logo ${logoClass}`}>{icon}</div>
      <div className="cert-body">
        <div className="cert-name">{name}</div>
        <div className="cert-issuer">{issuer}</div>
        <span className="cert-date">{date}</span>
      </div>
    </div>
  )
}

CertCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  logoClass: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}
