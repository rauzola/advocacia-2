'use client'

import { FormEvent, useRef, useState } from 'react'
import { Input } from '../Form/Input'
import { Loading } from '../Loading'
import { Check } from 'lucide-react'

export function FooterContactForm() {
  const [isSending, setIsSending] = useState(false)
  const [wasSent, setWasSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setIsSending(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSending(false)

    setWasSent(true)

    formRef.current?.reset()
  }

  return (
    <form
      ref={formRef}
      className="mt-6 space-y-4 lg:mt-10"
      onSubmit={handleSubmit}
    >
      <div className="space-y-4 lg:flex lg:items-center lg:gap-4 lg:space-y-0">
        <Input placeholder="Nome" required />
        <Input placeholder="Telefone" type="tel" required />
      </div>
      <Input placeholder="E-mail" type="email" required />
      <textarea
        placeholder="Mensagem"
        required
        className="h-[120px] w-full rounded-sm border-none p-5 text-sm text-gray-700 outline-none"
      />
      <button
        type="submit"
        disabled={isSending}
        className="flex h-11 w-full items-center justify-center rounded-sm bg-secondary px-5 text-xs font-semibold uppercase leading-7 tracking-widest transition-colors hover:bg-secondary/90"
      >
        {isSending ? <Loading /> : 'Enviar'}
      </button>
      {wasSent && (
        <div className="flex items-center gap-3">
          <Check />
          <span>O formulário foi enviado.</span>
        </div>
      )}
    </form>
  )
}
