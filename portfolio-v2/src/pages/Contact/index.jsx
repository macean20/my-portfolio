import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { useContactForm } from '@hooks/useContactForm'
import { useLanguage } from '@contexts/LanguageContext'
import { personal } from '@data/personal'
import SectionHeader from '@components/ui/SectionHeader'

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

export default function Contact() {
  const { t } = useLanguage()
  const { fields, fieldErrors, isLoading, isSuccess, isError, errorMessage, handleChange, handleSubmit } = useContactForm()
  useScrollAnimation()

  const contactItems = [
    { icon: '📧', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: '📍', label: t.contact.locationLabel, value: t.contact.locationValue, href: null },
    { icon: '💼', label: t.contact.linkedinLabel, value: t.contact.linkedinValue, href: personal.social.linkedin, external: true },
    { icon: '🐙', label: t.contact.githubLabel, value: t.contact.githubValue, href: personal.social.github, external: true },
    { icon: '🎓', label: t.contact.formationLabel, value: t.contact.formationValue, href: null },
  ]

  return (
    <section id="contact" aria-label="Contact">
      <div className="section">
        <SectionHeader tag={t.contact.tag} title={t.contact.title} highlightWord={t.contact.highlightWord} />

        <div className="contact-grid">
          <div className="contact-info stagger">
            {contactItems.map(item => (
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
              <label className="form-label" htmlFor="name">{t.contact.labels.name}</label>
              <input
                type="text" id="name" name="name" className="form-input"
                placeholder={t.contact.placeholders.name}
                required autoComplete="name" maxLength={100}
                value={fields.name} onChange={handleChange}
              />
              {fieldErrors.name && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{fieldErrors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">{t.contact.labels.email}</label>
              <input
                type="email" id="email" name="email" className="form-input"
                placeholder={t.contact.placeholders.email}
                required autoComplete="email"
                value={fields.email} onChange={handleChange}
              />
              {fieldErrors.email && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{fieldErrors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">{t.contact.labels.subject}</label>
              <input
                type="text" id="subject" name="subject" className="form-input"
                placeholder={t.contact.placeholders.subject}
                maxLength={200}
                value={fields.subject} onChange={handleChange}
              />
              {fieldErrors.subject && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{fieldErrors.subject}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">{t.contact.labels.message}</label>
              <textarea
                id="message" name="message" className="form-textarea"
                placeholder={t.contact.placeholders.message}
                required maxLength={2000}
                value={fields.message} onChange={handleChange}
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
              {isLoading ? t.contact.sending : t.contact.send}
            </button>

            {isSuccess && (
              <div className="form-status success" role="alert">{t.contact.success}</div>
            )}
            {isError && (
              <div className="form-status error" role="alert">{t.contact.error} {errorMessage}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
