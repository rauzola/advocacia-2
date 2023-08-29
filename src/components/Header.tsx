'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { ButtonLink } from './ButtonLink'
import { ActiveLink } from './ActiveLink'
import logoImg from '@/assets/logo.svg'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((prevState) => !prevState)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-10 h-20 w-full bg-primary  shadow-header">
      {/* Mobile Header */}
      <div className="flex h-full items-center justify-between px-5 lg:hidden">
        <img src={logoImg.src} alt="Carlos Augusto Advogados" />

        <button onClick={handleToggle}>
          {isOpen ? (
            <X className="text-secondary" />
          ) : (
            <Menu className="text-secondary" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex w-full flex-col items-center gap-12 bg-primary px-5 py-3 lg:hidden">
          <ActiveLink
            href="/"
            title="Home"
            hasNotDownLine
            onClick={handleClose}
          />
          <ActiveLink
            href="/servicos"
            title="Serviços"
            hasNotDownLine
            onClick={handleClose}
          />
          <ActiveLink
            href="/advogados"
            title="Advogados"
            hasNotDownLine
            onClick={handleClose}
          />
          <ActiveLink
            href="/sobre"
            title="Sobre"
            hasNotDownLine
            onClick={handleClose}
          />
          <ActiveLink
            href="/contato"
            title="Contato"
            hasNotDownLine
            onClick={handleClose}
          />
        </div>
      )}

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
