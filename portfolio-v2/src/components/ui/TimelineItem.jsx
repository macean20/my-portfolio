import PropTypes from 'prop-types'

export default function TimelineItem({ dot, title, period, company, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot">{dot}</div>
      <div className="timeline-content">
        <div className="timeline-head">
          <span className="timeline-title">{title}</span>
          <span className="timeline-period">{period}</span>
        </div>
        <div className="timeline-company">{company}</div>
        <ul className="timeline-desc">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  dot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
}
