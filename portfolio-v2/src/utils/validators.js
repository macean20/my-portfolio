const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm({ name, email, subject, message, honeypot }) {
  if (honeypot) return { valid: false, honeypot: true }

  const errors = {}

  if (!name || name.trim().length < 2)   errors.name    = 'Le nom doit contenir au moins 2 caractères.'
  if (name && name.trim().length > 100)  errors.name    = 'Le nom ne doit pas dépasser 100 caractères.'
  if (!email || !EMAIL_RE.test(email))   errors.email   = 'Adresse email invalide.'
  if (subject && subject.trim().length < 3)  errors.subject = 'Le sujet doit contenir au moins 3 caractères.'
  if (subject && subject.trim().length > 200) errors.subject = 'Le sujet ne doit pas dépasser 200 caractères.'
  if (!message || message.trim().length < 10)  errors.message = 'Le message doit contenir au moins 10 caractères.'
  if (message && message.trim().length > 2000) errors.message = 'Le message ne doit pas dépasser 2000 caractères.'

  return { valid: Object.keys(errors).length === 0, errors }
}
