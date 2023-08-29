import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { LawyerCard } from '@/components/LawyerCard'
import { lawyers } from '@/utils/lawyers'

export const metadata = {
  title: 'Advogados | Carlos Augusto Advogados',
}

export default function Lawyers() {
  return (
    <>
      <Banner
        label="Equipe"
        title="Conheça nossos advogados"
        description="Nossa equipe é formada por
        profissionais graduados em renomadas instituições de ensino
        brasileiras, com especializações em diversas áreas do direito."
      />

      <section className="px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-[1120px] lg:grid-cols-4">
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

      <Footer />
    </>
  )
}
