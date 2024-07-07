import { useState } from 'react'
import { useDarkSide } from '../../hooks/useDarkSide'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Switcher() {
  const { colorTheme, setTheme } = useDarkSide()
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light')

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
    setDarkSide(checked)
  }

  return (
    <div>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={24} />
    </div>
  )
}
