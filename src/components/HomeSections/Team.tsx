import { SectionLabel } from '@/components/SectionLabel'
import { LawyerCard } from '../LawyerCard'
import { lawyers } from '@/utils/lawyers'

export function Team() {
  return (
    <section className="px-6 py-12 lg:py-24">
      <div className="flex flex-col items-center">
        <SectionLabel title="Equipe" />
        <h2 className="mb-5 mt-4 text-center font-title text-2xl font-bold text-gray-700 md:text-3xl lg:mb-8 lg:mt-3 lg:text-4.5xl lg:leading-11">
          Conheça alguns dos nossos advogados
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:mx-auto lg:max-w-[1120px] lg:grid-cols-4">
        {lawyers.map((lawyer) => (
          <LawyerCard
            key={lawyer.id}
            name={lawyer.name}
            occupation={lawyer.occupation}
            photoUrl={lawyer.photoUrl}
          />
        ))}
      </div>
    </section>
  )
}
