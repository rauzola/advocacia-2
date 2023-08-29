import { Divider } from '@/components/Divider'
import { SectionLabel } from '@/components/SectionLabel'
import { ServicesItem } from './ServicesItem'
import { services } from '@/utils/services'

export function Services() {
  return (
    <section className="bg-primary px-6 py-12 lg:py-24">
      <div className="flex flex-col items-center">
        <SectionLabel title="Serviços" />
        <h2 className="mb-5 mt-4 font-title text-2xl font-bold md:text-3xl lg:mb-8 lg:mt-3 lg:text-4.5xl lg:leading-11">
          Áreas de atuação
        </h2>
        <Divider />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:mx-auto lg:mt-20 lg:max-w-[840px] lg:items-start lg:gap-16">
        {services.map((service) => (
          <ServicesItem
            key={service.id}
            iconUrl={service.iconUrl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}
