import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, MIN_LOADING_MS } from '@utils/constants'
import { validateContactForm } from '@utils/validators'
import { sleep } from '@utils/helpers'

const INITIAL_STATE = { name: '', email: '', subject: '', message: '', honeypot: '' }

export function useContactForm() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const [fieldErrors, setFieldErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) setFieldErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSuccess(false)
    setIsError(false)

    const result = validateContactForm(fields)

    if (result.honeypot) {
      setIsSuccess(true)
      return
    }

    if (!result.valid) {
      setFieldErrors(result.errors)
      return
    }

    setIsLoading(true)
    const start = Date.now()

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name:  fields.name,
          from_email: fields.email,
          subject:    fields.subject,
          message:    fields.message,
          reply_to:   fields.email,
        },
        EMAILJS_CONFIG.publicKey
      )

      const elapsed = Date.now() - start
      if (elapsed < MIN_LOADING_MS) await sleep(MIN_LOADING_MS - elapsed)

      setIsSuccess(true)
      setFields(INITIAL_STATE)
      setFieldErrors({})
    } catch {
      const elapsed = Date.now() - start
      if (elapsed < MIN_LOADING_MS) await sleep(MIN_LOADING_MS - elapsed)
      setIsError(true)
      setErrorMessage('Erreur lors de l\'envoi. Réessayez ou contactez-moi directement par email.')
    } finally {
      setIsLoading(false)
    }
  }

  return { fields, fieldErrors, isLoading, isSuccess, isError, errorMessage, handleChange, handleSubmit }
}
