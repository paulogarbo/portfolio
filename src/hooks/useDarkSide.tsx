import { useEffect, useState } from 'react'

export function useDarkSide() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme:garboportfolio') || 'dark',
  )
  const colorTheme: string = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    localStorage.setItem('theme:garboportfolio', theme)
  }, [theme, colorTheme])

  return { colorTheme, setTheme }
}
