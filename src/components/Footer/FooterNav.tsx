import Link from 'next/link'

export function FooterNav() {
  return (
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
  )
}
