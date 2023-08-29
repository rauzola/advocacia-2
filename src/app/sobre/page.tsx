import { SectionLabel } from '@/components/SectionLabel'
import { RightsItem } from '@/components/RightsItem'
import { Stats } from '@/components/Stats'

import carlosAugustoImg from '@/assets/carlos-augusto-sobre.jpg'
import direitoPenalImg from '@/assets/icons/direito-penal.svg'
import direitoCivilImg from '@/assets/icons/direito-civil.svg'
import direitoConsumidorImg from '@/assets/icons/direito-consumidor.svg'
import { Depositions } from '@/components/Depositions'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Sobre | Carlos Augusto Advogados',
}

export default function About() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[320px] bg-[url(../assets/banners/alguns-numeros.jpg)] bg-cover bg-no-repeat md:h-[360px] lg:h-[488px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary bg-opacity-75 px-8 py-10 text-center md:gap-6">
          <div className="md:hidden">
            <SectionLabel title="Sobre" />
            <h1 className="mt-5 font-title text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Carlos Augusto Advogados
            </h1>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="relative w-full px-6 py-12 md:mx-auto md:mt-[-360px] md:grid md:grid-cols-2 md:gap-8 md:pt-20 lg:max-w-[996px] lg:gap-32 lg:pb-32 lg:pt-16">
        <div className="text-center md:text-left">
          <div className="hidden md:mb-[120px] md:block">
            <SectionLabel title="Sobre" />
            <h1 className="mt-4 font-title text-5xl font-bold lg:text-6xl">
              Carlos Augusto Advogados
            </h1>
          </div>
          <p className="font-semibold leading-relaxed text-gray-700">
            Trabalhamos com a máxima excelência, agilidade e transparência,
            tendo sempre como pilar a prática da justiça com ética.
          </p>
          <p className="mt-6 text-sm leading-7 text-gray-600 md:mt-8 md:text-base">
            A equipe do escritório CARLOS AUGUSTO ADVOGADOS é formada por
            profissionais graduados em renomadas instituições de ensino
            brasileiras, com especializações em diversas áreas do direito. Esses
            profissionais têm uma ampla experiência na advocacia empresarial,
            incluindo passagens pelo departamento jurídico de empresas nacionais
            e multinacionais estabelecidas no país.
          </p>
        </div>

        <img
          src={carlosAugustoImg.src}
          alt="Carlos Augusto"
          className="mt-8 flex w-full rounded-sm object-cover md:mt-0"
        />
      </section>

      {/* Rights */}
      <section className="md:mx-auto md:w-full md:max-w-[996px] lg:pb-40">
        <div className="grid grid-cols-1 bg-primary text-center md:grid-cols-3 lg:rounded-sm">
          <RightsItem
            iconUrl={direitoPenalImg.src}
            title="Direito Penal"
            description="Defesa de pessoas físicas ou jurídicas"
          />
          <RightsItem
            iconUrl={direitoCivilImg.src}
            title="Direito Civil"
            description="Ações referentes a propriedade e posse de bens"
          />
          <RightsItem
            iconUrl={direitoConsumidorImg.src}
            title="Direito do Consumidor"
            description="Defesa dos interesses de clientes"
          />
        </div>
      </section>

      <Stats />

      <Depositions />

      <Footer />
    </>
  )
}
