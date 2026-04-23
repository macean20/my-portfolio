import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useContactForm } from './useContactForm'

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn().mockResolvedValue({ status: 200 }) },
}))

vi.mock('@utils/constants', () => ({
  EMAILJS_CONFIG: { serviceId: 'svc', templateId: 'tpl', publicKey: 'key' },
  MIN_LOADING_MS: 0,
}))

describe('useContactForm', () => {
  it('rejette un email invalide', async () => {
    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Jean' } })
      result.current.handleChange({ target: { name: 'email', value: 'pas-un-email' } })
      result.current.handleChange({ target: { name: 'message', value: 'Message suffisamment long.' } })
    })

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() })
    })

    expect(result.current.fieldErrors.email).toBeTruthy()
    expect(result.current.isSuccess).toBe(false)
  })

  it('bloque silencieusement si le honeypot est rempli', async () => {
    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleChange({ target: { name: 'honeypot', value: 'bot-rempli' } })
    })

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() })
    })

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.isLoading).toBe(false)
  })

  it('bloque si les champs requis sont vides', async () => {
    const { result } = renderHook(() => useContactForm())

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() })
    })

    expect(result.current.fieldErrors.name).toBeTruthy()
    expect(result.current.fieldErrors.email).toBeTruthy()
    expect(result.current.fieldErrors.message).toBeTruthy()
    expect(result.current.isSuccess).toBe(false)
  })
})
