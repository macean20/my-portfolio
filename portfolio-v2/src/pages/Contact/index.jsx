import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { useContactForm } from '@hooks/useContactForm'
import { personal } from '@data/personal'
import SectionHeader from '@components/ui/SectionHeader'

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

const CONTACT_ITEMS = (email) => [
  { icon: '📧', label: 'Email', value: email, href: `mailto:${email}` },
  { icon: '📍', label: 'Localisation', value: 'Dakar, Sénégal', href: null },
  { icon: '💼', label: 'LinkedIn', value: 'Voir mon profil →', href: personal.social.linkedin, external: true },
  { icon: '🐙', label: 'GitHub', value: 'Voir mes repos →', href: personal.social.github, external: true },
  { icon: '🎓', label: 'Formation', value: 'ISM Dakar · Génie Logiciel R&S', href: null },
]

export default function Contact() {
  const { fields, fieldErrors, isLoading, isSuccess, isError, errorMessage, handleChange, handleSubmit } = useContactForm()
  useScrollAnimation()

  return (
    <section id="contact" aria-label="Contact">
      <div className="section">
        <SectionHeader tag="Contact" title="Travaillons ensemble" highlightWord="ensemble" />

        <div className="contact-grid">
          <div className="contact-info stagger">
            {CONTACT_ITEMS(personal.email).map(item => (
              <div key={item.label} className="contact-item">
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-text">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-item-val"
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-item-val">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form fade-in" onSubmit={handleSubmit} noValidate>
            {/* Honeypot anti-bot */}
            <input
              type="text"
              name="honeypot"
              value={fields.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="form-group">
              <label className="form-label" htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Jean Dupont"
                required
                autoComplete="name"
                maxLength={100}
                value={fields.name}
                onChange={handleChange}
              />
              {fieldErrors.name && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{fieldErrors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Adresse email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="jean@exemple.com"
                required
                autoComplete="email"
                value={fields.email}
                onChange={handleChange}
              />
              {fieldErrors.email && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{fieldErrors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Stage, collaboration, projet..."
                maxLength={200}
                value={fields.subject}
                onChange={handleChange}
              />
              {fieldErrors.subject && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{fieldErrors.subject}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Décrivez votre projet, opportunité ou question..."
                required
                maxLength={2000}
                value={fields.message}
                onChange={handleChange}
              />
              {fieldErrors.message && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{fieldErrors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isLoading}
            >
              <SendIcon />
              {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {isSuccess && (
              <div className="form-status success" role="alert">
                ✔ Message envoyé ! Je vous réponds sous 24h.
              </div>
            )}
            {isError && (
              <div className="form-status error" role="alert">
                ✘ {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
