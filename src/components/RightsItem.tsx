import { Divider } from '@/components/Divider'

interface RightsItemProps {
  iconUrl: string
  title: string
  description: string
}

export function RightsItem({ iconUrl, title, description }: RightsItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-10 py-12 lg:h-[310px]">
      <img src={iconUrl} alt={title} />
      <h3 className="font-title text-lg lg:text-xl">{title}</h3>
      <Divider />
      <p>{description}</p>
    </div>
  )
}
