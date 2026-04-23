import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export default function SkillBar({ icon, name, level }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [level])

  return (
    <div className="skill-card" ref={ref}>
      <div className="skill-card-head">
        <div className="skill-icon">{icon}</div>
        <span className="skill-card-name">{name}</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: `${width}%`, transition: 'width 1.5s ease' }}
        />
      </div>
    </div>
  )
}

SkillBar.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
}
