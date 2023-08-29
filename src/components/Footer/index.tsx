import { Divider } from '../Divider'
import { SectionLabel } from '../SectionLabel'
import { FooterContactForm } from './FooterContactForm'

import logoImg from '@/assets/logo.svg'
import { FooterNav } from './FooterNav'

export function Footer() {
  return (
    <section className="relative h-[840px] bg-[url(../assets/banners/footer.jpg)] bg-cover bg-no-repeat md:mt-40">
      <div className="absolute left-0 right-0 mx-auto max-w-[720px] rounded-sm bg-primary px-6 py-12 md:top-[-120px] md:px-28 md:py-20">
        <div className="flex flex-col items-center">
          <SectionLabel title="Entre em contato" />
          <h2 className="mb-5 mt-4 font-title text-2xl font-bold md:text-3xl lg:mb-8 lg:mt-3 lg:text-4.5xl lg:leading-11">
            Consulta gratuita
          </h2>
          <Divider />
          <p className="mt-5 text-center text-sm leading-relaxed md:text-base lg:mt-10">
            Faça uma consulta gratuita agora mesmo e veremos como podemos te
            ajudar!
          </p>
        </div>

        <FooterContactForm />
      </div>

      <footer className="absolute bottom-0 left-[50%] right-0 flex w-full translate-x-[-50%] flex-col items-center justify-center px-5 py-12 lg:flex-row lg:justify-between lg:px-16">
        <img src={logoImg.src} alt="Carlos Augusto Advogados" />
        <FooterNav />
      </footer>
    </section>
  )
}
