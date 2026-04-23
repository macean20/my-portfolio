import PropTypes from 'prop-types'

export default function SectionHeader({ tag, title, highlightWord }) {
  const parts = title.split(highlightWord)
  return (
    <>
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">
        {parts[0]}
        <span className="gradient-text">{highlightWord}</span>
        {parts[1]}
      </h2>
    </>
  )
}

SectionHeader.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlightWord: PropTypes.string.isRequired,
}
