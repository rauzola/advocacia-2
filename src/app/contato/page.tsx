import { Headphones, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { Banner } from '@/components/Banner'
import logoImg from '@/assets/logo.svg'
import { ContactForm } from './components/ContactForm'

export const metadata = {
  title: 'Contato | Carlos Augusto Advogados',
}

export default function Contact() {
  return (
    <>
      <Banner label="Entre em contato" title="Consulta gratuita" />

      <section className="grid grid-cols-1 justify-center px-6 py-12 text-center lg:grid-cols-2 lg:gap-20 lg:px-28 lg:py-24 lg:text-left">
        <div>
          <h2 className="font-title text-2xl font-bold text-gray-700 lg:text-3xl">
            Entre em contato
          </h2>

          <ContactForm />
        </div>

        <div>
          <h2 className="font-title text-2xl font-bold text-gray-700 lg:text-3xl">
            Informações de contato
          </h2>

          <div className="mt-8 flex w-full flex-col gap-5">
            <div className="flex w-full flex-col items-center gap-3 rounded-sm border border-gray-50 px-5 py-4 shadow-contact lg:flex-row lg:gap-6 lg:p-8">
              <Mail className="h-16 w-16 text-secondary" strokeWidth={1} />

              <div className="space-y-3 text-center lg:text-left">
                <h3 className="font-title text-xl text-gray-700">E-mail</h3>
                <p className="text-sm text-gray-600">
                 raul_sigoli@hotmail.com
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-3 rounded-sm border border-gray-50 px-5 py-4 shadow-contact lg:flex-row lg:gap-6 lg:p-8">
              <Headphones
                className="h-16 w-16 text-secondary"
                strokeWidth={1}
              />

              <div className="space-y-3 text-center lg:text-left">
                <h3 className="font-title text-xl text-gray-700">
                  Atendimento
                </h3>
                <p className="text-sm text-gray-600">
                  Seg - Sex: 08h às 17h • Sábado: 08h às 12h
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-3 rounded-sm border border-gray-50 px-5 py-4 shadow-contact lg:flex-row lg:gap-6 lg:p-8">
              <Phone className="h-16 w-16 text-secondary" strokeWidth={1} />

              <div className="space-y-3 text-center lg:text-left">
                <h3 className="font-title text-xl text-gray-700">Telefone</h3>
                <p className="text-sm text-gray-600">+55 044 9 9165-8351</p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-3 rounded-sm border border-gray-50 px-5 py-4 shadow-contact lg:flex-row lg:gap-6 lg:p-8">
              <MapPin className="h-16 w-16 text-secondary" strokeWidth={1} />

              <div className="space-y-3 text-center lg:text-left">
                <h3 className="font-title text-xl text-gray-700">Endereço</h3>
                <p className="text-sm text-gray-600">
                  Av. Horácio Raccanello, 000 • Maringá  - PR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex w-full flex-col items-center justify-center bg-footerGradient px-5 py-12 lg:flex-row lg:justify-between lg:px-28">
        <img src={logoImg.src} alt="Carlos Augusto Advogados" />
        <nav className="mt-4 flex items-center gap-4 lg:mt-0">
          <Link
            href="/"
            className="text-xs font-semibold uppercase transition-colors hover:text-secondary"
          >
            Home
          </Link>
          <Link
            href="/servicos"
            className="text-xs font-semibold uppercase transition-colors hover:text-secondary"
          >
            Serviços
          </Link>
          <Link
            href="/advogados"
            className="text-xs font-semibold uppercase transition-colors hover:text-secondary"
          >
            Advogados
          </Link>
          <Link
            href="/sobre"
            className="text-xs font-semibold uppercase transition-colors hover:text-secondary"
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className="text-xs font-semibold uppercase transition-colors hover:text-secondary"
          >
            Contato
          </Link>
        </nav>
      </footer>
    </>
  )
}
