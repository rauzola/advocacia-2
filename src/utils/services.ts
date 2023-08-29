import seguroImg from '@/assets/icons/seguro.svg'
import bancoImg from '@/assets/icons/banco.svg'
import legislacaoImg from '@/assets/icons/legislacao.svg'
import familiaImg from '@/assets/icons/familia.svg'
import empresasImg from '@/assets/icons/empresa.svg'
import criminalImg from '@/assets/icons/criminal.svg'

interface Service {
  id: string
  iconUrl: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: '1',
    iconUrl: seguroImg.src,
    title: 'Seguro',
    description:
      'Direitos e deveres das partes envolvidas (relações contratuais de seguros)',
  },
  {
    id: '2',
    iconUrl: bancoImg.src,
    title: 'Banco e Financeiro',
    description:
      'Direito que trata dos aspectos relacionados às relações entre bancos e seus clientes',
  },
  {
    id: '3',
    iconUrl: legislacaoImg.src,
    title: 'Legislação Civil',
    description:
      'Defesa dos interesses dos clientes em questões que envolvem o direito civil',
  },
  {
    id: '4',
    iconUrl: familiaImg.src,
    title: 'Família',
    description:
      'Questões relacionadas aos núcleos familiares e à proteção dos direitos de crianças e jovens',
  },
  {
    id: '5',
    iconUrl: empresasImg.src,
    title: 'Empresas',
    description: 'Normas disciplinadoras da atividade negocial do empresário',
  },
  {
    id: '6',
    iconUrl: criminalImg.src,
    title: 'Criminal',
    description:
      'Defesa dos direitos de cidadãos que estão sendo acusados pela prática de um crime',
  },
]
