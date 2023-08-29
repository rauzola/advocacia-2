import { RightsItem } from '@/components/RightsItem'

import direitoPenalImg from '@/assets/icons/direito-penal.svg'
import direitoCivilImg from '@/assets/icons/direito-civil.svg'
import direitoConsumidorImg from '@/assets/icons/direito-consumidor.svg'

export function Rights() {
  return (
    <div className="grid grid-cols-1 bg-primary text-center md:absolute md:left-[50%] md:w-full md:max-w-[996px] md:translate-x-[-50%] md:grid-cols-3 lg:mt-[-155px] lg:rounded-sm">
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
  )
}
