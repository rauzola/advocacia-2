import { ButtonLink } from '../ButtonLink'
import { ActiveLink } from '../ActiveLink'
import logoImg from '@/assets/logo.svg'
import { ResponsiveHeader } from './ResponsiveHeader'

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-20 w-full bg-primary  shadow-header">
      {/* Mobile Header */}
      <ResponsiveHeader />

      {/* Desktop Header */}
      <div className="hidden lg:flex lg:h-full lg:items-center lg:justify-between lg:px-16">
        <img src={logoImg.src} alt="Carlos Augusto Advogados" />

        <nav className="flex h-full items-center">
          <ActiveLink href="/" title="Home" />
          <ActiveLink href="/servicos" title="Serviços" />
          <ActiveLink href="/advogados" title="Advogados" />
          <ActiveLink href="/sobre" title="Sobre" />
          <ActiveLink href="/contato" title="Contato" />
        </nav>

        {/* Hamburguer (Mobile) */}
        <ButtonLink title="Entrar em contato" href="/contato" />
      </div>
    </header>
  )
}
