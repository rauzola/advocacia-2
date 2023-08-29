'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { ActiveLink } from '../ActiveLink'
import logoImg from '@/assets/logo.svg'

export function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((prevState) => !prevState)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <>
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
    </>
  )
}
