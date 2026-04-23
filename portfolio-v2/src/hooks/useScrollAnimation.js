import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, Number(delay))
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const fadeEls = document.querySelectorAll('.fade-in')
    fadeEls.forEach((el, idx) => {
      el.dataset.delay = idx * 80
      io.observe(el)
    })

    const staggerEls = document.querySelectorAll('.stagger > *')
    staggerEls.forEach((el, idx) => {
      el.dataset.delay = idx * 100
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])
}
