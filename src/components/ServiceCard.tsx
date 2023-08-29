interface ServiceCardProps {
  title: string
  iconUrl: string
  description: string
  actions: string[]
}

export function ServiceCard({
  title,
  iconUrl,
  description,
  actions,
}: ServiceCardProps) {
  return (
    <div className="w-full space-y-10 rounded-sm border border-gray-50 p-5 shadow-deposition md:p-8 lg:p-12">
      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="h-[60px] w-[60px] w-fit rounded-sm bg-[#D8AE7512] p-3">
          <img src={iconUrl} alt={title} />
        </div>
        <h3 className="font-title font-bold text-gray-700 md:text-lg lg:text-[2rem]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-[2px] text-gray-500">
          Descrição
        </h4>
        <p className="text-sm leading-6 text-gray-700">{description}</p>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-[2px] text-gray-500">
          Ações
        </h4>
        <ul className="ml-6 space-y-3">
          {actions.map((action, index) => (
            <li
              key={index}
              className="text-sm font-medium leading-6 text-gray-700"
            >
              {action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
