import { Presentation } from './components/Presentation'
import { Header } from './components/Header'
import { ThemeProvider } from './context/ThemeContext'
import { About } from './components/About'

export function App() {
  return (
    <ThemeProvider>
      <div className="bg-light-Default dark:bg-dark-Default min-h-screen text-light-600 dark:text-dark-600">
        <Header />
        <Presentation />
        <About />
      </div>
    </ThemeProvider>
  )
}
