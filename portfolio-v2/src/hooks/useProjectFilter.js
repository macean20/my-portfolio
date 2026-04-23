import { useState, useMemo } from 'react'

export function useProjectFilter(projects) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(
    () => activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter),
    [projects, activeFilter]
  )

  return { activeFilter, setActiveFilter, filtered }
}
