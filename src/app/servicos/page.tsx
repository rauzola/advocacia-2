import { Banner } from '@/components/Banner'
import { ServiceCard } from '@/components/ServiceCard'

import seguroImg from '@/assets/services/seguro.svg'
import bancoImg from '@/assets/services/banco.svg'
import legislacaoImg from '@/assets/services/legislacao.svg'
import familiaImg from '@/assets/services/familia.svg'
import empresasImg from '@/assets/services/empresas.svg'
import criminalImg from '@/assets/services/criminal.svg'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Serviços | Carlos Augusto Advogados',
}

interface Service {
  id: string
  title: string
  iconUrl: string
  description: string
  actions: string[]
}

const services: Service[] = [
  {
    id: '1',
    title: 'Seguro',
    iconUrl: seguroImg.src,
    description:
      'Direito Securitário é um campo do direito que se dedica às relações contratuais de seguros. Em resumo, é a área que abrange os direitos, deveres e obrigações das partes envolvidas nesses contratos. Seu foco principal é o estudo dos contratos de seguro.',
    actions: [
      'Resolução de conflitos',
      'Fiscalização e controle',
      'Proteção do segurado',
      'Regulação do mercado de seguros',
      'Regulamentação das relações contratuais de seguros',
    ],
  },
  {
    id: '2',
    title: 'Banco e Financeiro',
    iconUrl: bancoImg.src,
    description:
      'Direito Bancário é o ramo do direito que regula as atividades das instituições bancárias, as relações jurídicas entre os bancos e seus clientes, bem como os princípios e normas que governam o funcionamento do sistema financeiro.',
    actions: [
      'Regulamentação das atividades bancárias',
      'Proteção dos clientes bancários',
      'Resolução de conflitos',
      'Prevenção de crimes financeiros',
      'Regulamentação do mercado de capitais',
    ],
  },
  {
    id: '3',
    title: 'Legislação Civil',
    iconUrl: legislacaoImg.src,
    description:
      'O Direito da Legislação Civil abrange as leis e regulamentos que regem questões relacionadas a direitos e deveres das pessoas, contratos, responsabilidade civil, propriedade, sucessão de bens, casamento, divórcio, filiação, entre outros assuntos que dizem respeito às relações privadas entre indivíduos.',
    actions: [
      'Proteção dos direitos individuais',
      'Regulamentação das relações jurídicas',
      'Definição de contratos e obrigações',
      'Regulação do direito das sucessões',
      'Solução de conflitos',
    ],
  },
  {
    id: '4',
    title: 'Família',
    iconUrl: familiaImg.src,
    description:
      'O Direito da Família é o ramo do direito que trata das relações jurídicas que envolvem a estrutura familiar e as questões relacionadas a ela. Com isso, o objetivo do Direito da Família é regulamentar e proteger os direitos e deveres dos membros da família, promovendo a estabilidade e o bem-estar familiar.',
    actions: [
      'Regulamentação das relações familiares',
      'Proteção dos direitos dos membros da família',
      'Estabelecimento e dissolução do casamento',
      'Regulação da filiação e adoção',
      'Resolução de conflitos familiares',
    ],
  },
  {
    id: '5',
    title: 'Empresas',
    iconUrl: empresasImg.src,
    description:
      'O Direito Empresarial é o ramo do direito que trata das normas e regulamentações que envolvem as atividades empresariais. Ele abrange aspectos relacionados à constituição, organização, funcionamento e extinção das empresas, bem como os direitos e obrigações dos empresários e sociedades comerciais.',
    actions: [
      'Regulamentação das atividades empresariais',
      'Proteção dos interesses dos empresários e investidores',
      'Regulação da relação entre empresas e consumidores',
      'Falência e recuperação judicial',
      'Regulação das relações de trabalho',
    ],
  },
  {
    id: '6',
    title: 'Criminal',
    iconUrl: criminalImg.src,
    description:
      'Direito Criminal é o ramo do direito que trata das normas e princípios que regulam a conduta humana considerada criminosa, estabelecendo os crimes e suas respectivas penas. O objetivo do Direito Criminal é manter a ordem social, proteger os direitos individuais e coletivos e promover a justiça por meio da aplicação das leis criminais.',
    actions: [
      'Prevenção e repressão de condutas criminosas',
      'Determinação de responsabilidade criminal',
      'Imposição de penas e medidas de segurança',
      'Proteção dos direitos fundamentais',
      'Proteção da sociedade e prevenção da reincidência',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Banner
        label="Serviços"
        title="Áreas de atuação"
        description="Trabalhamos nas áreas Cível, Criminal, Empresarial, Família, Seguro e Bancário."
      />

      <section className="px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              iconUrl={service.iconUrl}
              description={service.description}
              actions={service.actions}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
