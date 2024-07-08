import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from '../../context/ThemeContext'

export default function Switcher() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <div>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={24}
      />
    </div>
  )
}
