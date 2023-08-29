'use client'
import { Loading } from '@/components/Loading'
import { Check } from 'lucide-react'
import { FormEvent, useRef, useState } from 'react'

export function ContactForm() {
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
      onSubmit={handleSubmit}
      className="my-8 space-y-4 rounded-sm border border-gray-50 p-10 shadow-contact lg:p-12"
    >
      <input
        placeholder="Nome"
        required
        className="h-[54px] w-full rounded-sm border border-gray-100 p-5 text-sm text-gray-700 outline-none"
      />
      <input
        placeholder="Telefone"
        type="tel"
        required
        className="h-[54px] w-full rounded-sm border border-gray-100 p-5 text-sm text-gray-700 outline-none"
      />
      <input
        placeholder="E-mail"
        type="email"
        required
        className="h-[54px] w-full rounded-sm border border-gray-100 p-5 text-sm text-gray-700 outline-none"
      />
      <textarea
        placeholder="Mensagem"
        required
        className="h-[120px] w-full rounded-sm border border-gray-100 p-5 text-sm text-gray-700 outline-none"
      />
      <button
        type="submit"
        disabled={isSending}
        className="flex h-11 w-full items-center justify-center rounded-sm bg-secondary px-5 text-xs font-semibold uppercase leading-7 tracking-widest transition-colors hover:bg-secondary/90"
      >
        {isSending ? <Loading /> : 'Enviar'}
      </button>
      {wasSent && (
        <div className="flex items-center gap-3 text-gray-700">
          <Check />
          <span>O formulário foi enviado.</span>
        </div>
      )}
    </form>
  )
}
