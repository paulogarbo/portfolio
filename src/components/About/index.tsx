import { Label } from '../Label'
import fotoDePerfil from './../../assets/foto.jpg'

export function About() {
  return (
    <section className="bg-light-50 dark:bg-dark-50">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div>
          <Label title="Sobre" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="grid place-items-center">
            <img
              src={fotoDePerfil}
              alt="foto de perfil"
              className="
                  col-start-1 row-start-1 z-10 h-[360px] w-[280px] 
                  border-[10px] border-light-50 dark:border-dark-50 md:h-[420px] 
                  md:w-[340px] lg:h-[480px] lg:w-[400px] "
            />
            <div
              className="
                  col-start-1 row-start-1 mr-16 mt-16 md:mr-20 md:mt-20 h-[360px] w-[280px] 
                  border-8 border-transparent bg-light-200 dark:bg-dark-200 
                  md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
            />
          </div>
          <div className="flex flex-col gap-4 mt-12">
            <h2 className="font-bold text-2xl md:text-3xl dark:text-dark-900 text-light-900">
              Curioso sobre mim? 🤔
            </h2>
            <p>
              Sou apaixonado pelo desenvolvimento de aplicações web e estou
              sempre aprendendo e aprimorando minhas habilidades. Sou
              especialista em JavaScript, TypeScript, React, Next.js e Node.js.
            </p>
            <p>
              Minha jornada profissional como desenvolvedor começou em 2022,
              quando iniciei meus estudos sobre desenvolvimento de jogos. Sempre
              fui um fã de jogos e, nesse ano, descobri que um dos meus
              favoritos, Bioshock, foi desenvolvido na Unreal Engine. Isso me
              deu a direção de onde começar a desenvolver jogos. Comecei a
              estudar Blueprints, uma &quot;linguagem de programação&quot;
              visual da Unreal Engine, dando meus primeiros passos no mundo da
              programação.
            </p>
            <p>
              No início de 2023, entrei na faculdade de Ciência da Computação e
              comecei a estudar a linguagem de programação C, o que me fez ter
              certeza de que era essa a área que eu queria seguir. A partir daí,
              comecei a explorar o desenvolvimento web, onde conheci o trio do
              Front-end: HTML, CSS e JavaScript. Estudei sobre desenvolvimento
              de aplicações web e aprendi sobre React, Next.js e TypeScript, o
              que me levou ao ponto em que estou atualmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
