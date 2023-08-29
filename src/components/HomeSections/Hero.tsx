import { ButtonLink } from '@/components/ButtonLink'

export function Hero() {
  return (
    <section className="relative h-[70vh] bg-[url(../assets/banners/home.jpg)] bg-cover bg-no-repeat lg:h-[120vh]">
      <div className="absolute inset-0 flex justify-center bg-primary bg-opacity-75">
        <div className="absolute flex flex-col items-center justify-center px-3 pt-20 text-center md:px-10 lg:max-w-3xl lg:px-0 lg:pt-36">
          <h1 className="font-title text-4xl font-bold leading-snug md:text-5xl lg:text-6xl lg:leading-[70px]">
            Nós somos especialistas em serviços legais
          </h1>
          <p className="mb-8 mt-5 font-medium leading-relaxed lg:mb-10">
            Atuando na advocacia de forma atualizada, em um ambiente
            descontraído e de colaboração, com ênfase na constante atualização
            técnica e ética.
          </p>
          <ButtonLink href="/contato" title="Entrar em contato" />
        </div>
      </div>
    </section>
  )
}
