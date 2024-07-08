import { Menu, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import Switcher from '../Switcher'

export function Header() {
  const myName = '<Garbo/>'

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-light-900 dark:text-dark-900">
          {myName}
        </h1>

        <section className="hidden lg:flex items-center gap-6">
          <nav className="border-r-2 pr-8 border-light-100 dark:border-dark-100">
            <ul className="flex items-center gap-5 leading-6 font-medium">
              <li>Sobre</li>
              <li>Tecnologias</li>
              <li>Experiência</li>
              <li>Projetos</li>
            </ul>
          </nav>
          <Switcher />
          <a
            href="src\assets\cv\Curriculo_PauloAlex.pdf"
            download
            className="px-4 py-[6px] bg-light-900 dark:bg-dark-900 text-light-50 dark:text-dark-50 rounded-xl"
          >
            Baixar CV
          </a>
        </section>
        <section className="lg:hidden flex items-center">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="dark:text-dark-600 text-light-600 hover:text-black focus:outline-none">
                <Menu size={30} />
              </button>
            </Dialog.Trigger>
            <Dialog.Overlay className="fixed inset-0 dark:bg-dark-600 bg-light-600 opacity-20 z-40" />{' '}
            <Dialog.Content className="fixed top-0 right-0 bottom-0 w-96 lg:w-96 dark:bg-dark-Default bg-light-Default z-50">
              <div className="flex justify-between items-center border-b-2 border-light-100 dark:border-dark-100 p-4 py-6">
                <h1 className="font-bold text-2xl text-light-900 dark:text-dark-900">
                  {myName}
                </h1>
                <Dialog.Close asChild>
                  <button className="dark:text-dark-600 text-light-600 hover:text-black focus:outline-none">
                    <X size={24} />
                  </button>
                </Dialog.Close>
              </div>
              <div className="p-4 py-6 text-light-600 dark:text-dark-600 leading font-medium border-b-2 border-light-100 dark:border-dark-100">
                <nav>
                  <ul className="flex flex-col gap-6">
                    <li>Sobre</li>
                    <li>Tecnologias</li>
                    <li>Experiência</li>
                    <li>Projetos</li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col gap-6 px-4 py-6">
                <div className="flex justify-between px-1">
                  <p>Switch Theme</p>
                  <Switcher />
                </div>
                <a
                  href="src\assets\cv\Curriculo_PauloAlex.pdf"
                  download
                  className="px-4 py-2 bg-light-900 dark:bg-dark-900 text-light-50 dark:text-dark-50 rounded-xl w-full text-center font-medium"
                >
                  Baixar CV
                </a>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </section>
      </div>
    </div>
  )
}
