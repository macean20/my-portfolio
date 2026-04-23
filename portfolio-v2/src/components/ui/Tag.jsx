import PropTypes from 'prop-types'

export default function Tag({ label, variant = '' }) {
  return <span className={`tag${variant ? ` ${variant}` : ''}`}>{label}</span>
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
}
