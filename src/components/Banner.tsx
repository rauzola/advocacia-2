import { SectionLabel } from './SectionLabel'

interface BannerProps {
  label: string
  title: string
  description?: string
}

export function Banner({ label, title, description }: BannerProps) {
  return (
    <section className="relative h-[320px] bg-[url(../assets/banners/alguns-numeros.jpg)] bg-cover bg-no-repeat md:h-[360px] lg:h-[488px]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-primary bg-opacity-75 px-8 py-10 text-center md:gap-6">
        <SectionLabel title={label} />
        <h1 className="font-title text-4xl font-bold md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="font-medium leading-relaxed md:max-w-[570px]">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
