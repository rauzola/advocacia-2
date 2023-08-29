interface ServicesItemProps {
  iconUrl: string
  title: string
  description: string
}

export function ServicesItem({
  iconUrl,
  title,
  description,
}: ServicesItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={iconUrl} alt={title} />
      <h3 className="font-title text-lg lg:text-xl">{title}</h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  )
}
