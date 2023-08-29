import Link, { LinkProps } from 'next/link'

interface ButtonProps extends LinkProps {
  title: string
}

export function ButtonLink({ title, ...rest }: ButtonProps) {
  return (
    <Link
      className="flex h-11 w-fit items-center justify-center rounded-sm bg-secondary px-5 text-xs font-semibold uppercase leading-7 tracking-widest transition-colors hover:bg-secondary/90"
      {...rest}
    >
      {title}
    </Link>
  )
}
