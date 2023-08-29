import { Quote } from 'lucide-react'

interface DepositionProps {
  avatarUrl: string
  description: string
  name: string
  occupation: string
}

export function Deposition({
  avatarUrl,
  description,
  name,
  occupation,
}: DepositionProps) {
  return (
    <div className="flex w-full flex-col items-center rounded-sm border border-gray-50 p-6 pt-0 text-center shadow-deposition md:p-12 md:pt-0">
      <img
        src={avatarUrl}
        alt={name}
        className="mt-[-35px] h-[140px] w-[140px] rounded-full"
      />
      <Quote strokeWidth={1} className="mt-8 h-12 w-12 text-secondary" />
      <p className="mt-8 font-semibold italic leading-relaxed text-gray-650">
        {description}
      </p>

      <div className="mt-10">
        <h3 className="font-title text-lg font-bold text-gray-700">{name}</h3>
        <p className="mt-1 font-semibold text-secondary">{occupation}</p>
      </div>
    </div>
  )
}
