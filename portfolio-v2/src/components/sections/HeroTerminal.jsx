import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export default function HeroTerminal({ formation, location, stack, certs, status }) {
  const cmdRef = useRef(null)

  useEffect(() => {
    const el = cmdRef.current
    if (!el) return
    const text = el.dataset.text || ''
    el.textContent = ''
    let i = 0
    let timer
    const type = () => {
      if (i < text.length) {
        el.textContent += text[i++]
        timer = setTimeout(type, 40)
      }
    }
    const delay = setTimeout(type, 800)
    return () => {
      clearTimeout(delay)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="terminal-block fade-in">
      <div>
        <span className="prompt">$ </span>
        <span className="cmd type-cmd" ref={cmdRef} data-text="whoami --verbose" />
        <span className="cursor" />
      </div>
      <div><span className="output">→ formation:  </span><span className="val">{formation}</span></div>
      <div><span className="output">→ location:   </span><span className="val">{location}</span></div>
      <div><span className="output">→ stack:      </span><span className="val">{stack}</span></div>
      <div><span className="output">→ certs:      </span><span className="val">{certs}</span></div>
      <div>
        <span className="output">→ status:     </span>
        <span className="val" style={{ color: 'var(--success)' }}>{status}</span>
      </div>
    </div>
  )
}

HeroTerminal.propTypes = {
  formation: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  certs: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}
