interface LawyerCardProps {
  name: string
  occupation: string
  photoUrl: string
}

export function LawyerCard({ name, occupation, photoUrl }: LawyerCardProps) {
  return (
    <div className="overflow-hidden rounded-sm">
      <img
        src={photoUrl}
        alt={name}
        className="h-[260px] w-full object-cover md:h-[290px]"
      />
      <div className="flex flex-col items-center justify-center gap-1 bg-primary px-8 py-10">
        <h3 className="font-title text-lg font-bold">{name}</h3>
        <p className="text-center text-gray-500">{occupation}</p>
      </div>
    </div>
  )
}
