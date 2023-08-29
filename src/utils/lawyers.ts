import advogado01Img from '@/assets/lawyers/advogado-1.jpg'
import advogado02Img from '@/assets/lawyers/advogado-2.jpg'
import advogado03Img from '@/assets/lawyers/advogado-3.jpg'
import advogado04Img from '@/assets/lawyers/advogado-4.jpg'

interface Lawyer {
  id: string
  name: string
  occupation: string
  photoUrl: string
}

export const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Rafael Cooper',
    occupation: 'Advogado de Família',
    photoUrl: advogado01Img.src,
  },
  {
    id: '2',
    name: 'Felipe Davis',
    occupation: 'Advogado de Negócios',
    photoUrl: advogado02Img.src,
  },
  {
    id: '3',
    name: 'Henry Miller',
    occupation: 'Advogado de Seguro',
    photoUrl: advogado03Img.src,
  },
  {
    id: '4',
    name: 'Carlos Stevens',
    occupation: 'Advogado Criminal',
    photoUrl: advogado04Img.src,
  },
]
