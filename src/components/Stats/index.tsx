import { SectionLabel } from '@/components/SectionLabel'
import { Stat } from './Stat'

interface StatType {
  id: string
  number: number
  title: string
}

const stats: StatType[] = [
  {
    id: '1',
    title: 'Clientes atendidos',
    number: 310,
  },
  {
    id: '2',
    title: 'Casos ganhos',
    number: 897,
  },
  {
    id: '3',
    title: 'Advogados qualificados',
    number: 20,
  },
  {
    id: '4',
    title: 'Áreas de atuação',
    number: 34,
  },
]

export function Stats() {
  return (
    <section className="relative h-[720px] bg-[url(../assets/banners/alguns-numeros.jpg)] bg-cover bg-no-repeat md:h-[468px]">
      <div className="absolute inset-0 bg-primary bg-opacity-75 py-12 lg:py-24">
        {/* Por que nos escolher */}
        <div className="flex flex-col items-center">
          <SectionLabel title="Alguns números" />
          <h2 className="mb-5 mt-4 font-title text-2xl font-bold md:text-3xl lg:mb-8 lg:mt-3 lg:text-4.5xl lg:leading-11">
            Por que nos escolher
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-14 md:mt-16 md:grid-cols-4 md:gap-0 lg:mx-auto lg:max-w-[1060px]">
          {stats.map((stat) => (
            <Stat key={stat.id} title={stat.title} number={stat.number} />
          ))}
        </div>
      </div>
    </section>
  )
}
