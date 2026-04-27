import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'

function HeroTitle({ title }: { title: string }) {
  const emphasis = '3C 数码'
  const [before, after] = title.split(emphasis)

  return (
    <>
      {before}
      <span className="text-orange-500">{emphasis}</span>
      {after}
    </>
  )
}

export function Home() {
  const { hero } = siteData.home

  return (
    <>
      <section
        id="home"
        className="relative isolate flex min-h-[calc(100vh-5rem)] overflow-hidden bg-black pt-20 text-white sm:pt-24 lg:pt-0"
      >
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_30%,rgba(249,115,22,0.34),transparent_30%),radial-gradient(circle_at_15%_60%,rgba(249,115,22,0.16),transparent_34%),linear-gradient(110deg,#030303_0%,#060606_46%,#130703_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(circle,rgba(249,115,22,0.55)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(90deg,transparent_0%,black_22%,black_84%,transparent_100%)]" />
        <div className="absolute left-[44%] top-16 -z-10 hidden h-72 w-72 rounded-full border border-orange-500/20 blur-[1px] lg:block" />
        <div className="absolute right-0 top-0 -z-10 h-full w-2/3 bg-gradient-to-l from-orange-500/20 via-orange-500/5 to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-0">
          <div className="max-w-3xl py-10 lg:py-0">
            <p className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
              Haocheng Intelligent Equipment
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <HeroTitle title={hero.title} />
            </h1>

            <p className="mt-5 text-base font-medium text-neutral-100 sm:text-xl">{hero.subtitle}</p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={hero.primaryAction.href}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-orange-600/25 transition duration-300 hover:-translate-y-0.5 hover:from-orange-400 hover:to-orange-500"
              >
                {hero.primaryAction.label}
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                to={hero.secondaryAction.href}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-orange-500/70 bg-black/30 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-200"
              >
                {hero.secondaryAction.label}
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[430px] lg:min-h-[620px]">
            <div className="absolute inset-0 rounded-[2rem] bg-orange-500/10 blur-3xl" />
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="hero-float relative h-full min-h-[320px] w-full rounded-[1.5rem] object-cover object-right shadow-2xl shadow-orange-950/40 sm:min-h-[430px] lg:min-h-[620px]"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>
      </section>

      <section id="business" className="h-1 scroll-mt-24 bg-neutral-950" aria-label="核心业务占位" />
      <section id="about" className="h-1 scroll-mt-24 bg-neutral-950" aria-label="关于我们占位" />
      <section id="platform" className="h-1 scroll-mt-24 bg-neutral-950" aria-label="平台矩阵占位" />
      <section id="contact" className="h-1 scroll-mt-24 bg-neutral-950" aria-label="联系我们占位" />
    </>
  )
}
