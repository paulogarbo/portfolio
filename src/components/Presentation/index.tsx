import { MapPin, Linkedin, Github } from 'lucide-react'
import { StatusIndicator } from '../StatusIndicator'
import person from '../../assets/person.png'

export function Presentation() {
  return (
    <section className="container mx-auto px-6 lg:px-2 2xl:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4">
        <div className="order-2 lg:order-1 flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-3xl leading-relaxed xl:text-4xl xl:font-bold 2xl:text-5xl 2xl:leading-loose lg:leading-relaxed dark:text-dark-900 text-light-900">
              Olá, Eu sou o Garba! 👋
            </h1>
            <p className="text-light-600 text-sm lg:text-base dark:text-dark-600 leading-6">
              Sou desenvolvedor full stack com um ano de experiência e estudante
              de Ciência da Computação no quarto semestre. Foco em criar
              experiências digitais excepcionais que são rápidas, acessíveis,
              atraentes e responsivas. Sou apaixonado pelo desenvolvimento de
              aplicações web e estou sempre aprendendo e aprimorando minhas
              habilidades.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={24} />
              <p>Taubaté - SP</p>
            </div>
            <div className="ml-1">
              <StatusIndicator />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/paulo-alexgarba/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/paulogarbo"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex h-full justify-center lg:justify-end">
          <img src={person} alt="Meu perfil" />
        </div>
      </div>
    </section>
  )
}
