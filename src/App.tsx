import { Presentation } from './components/Presentation'
import { Header } from './components/Header'
import { ThemeProvider } from './context/ThemeContext'

export function App() {
  return (
    <ThemeProvider>
      <div className="bg-light-Default dark:bg-dark-Default min-h-screen text-light-600 dark:text-dark-600">
        <Header />
        <Presentation />
        <section className="bg-light-50 dark:bg-dark-50">
          <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <h1>Projetos</h1>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
