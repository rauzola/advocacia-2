'use client'

import { useInView } from '@react-spring/web'
import { NumberStat } from '../NumberStat'

interface StatProps {
  number: number
  title: string
}

export function Stat({ number, title }: StatProps) {
  const [ref, inView] = useInView({
    once: true,
  })

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-title text-4.5xl font-bold text-secondary">
        {inView ? <NumberStat n={number} /> : ''}
      </span>
      <p className="font-title font-normal tracking-widest">{title}</p>
    </div>
  )
}
