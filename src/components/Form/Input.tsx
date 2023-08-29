import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="h-[54px] w-full rounded-sm border-none p-5 text-sm text-gray-700 outline-none"
      {...rest}
    />
  )
}
