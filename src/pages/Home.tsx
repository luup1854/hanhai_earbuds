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
  const { hero, about } = siteData.home

  return (
    <>
      <section
        id="home"
        className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-black text-white"
      >
        <img
          src={hero.image.src}
          alt=""
          aria-hidden="true"
          className="hero-bg-drift absolute inset-0 -z-30 h-full w-full object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.94)_27%,rgba(3,3,3,0.62)_47%,rgba(3,3,3,0.08)_76%,rgba(3,3,3,0.14)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.56)_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle,rgba(249,115,22,0.55)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(90deg,black_0%,black_52%,transparent_92%)]" />
        <div className="absolute left-[43%] top-[14%] -z-10 hidden h-80 w-80 rounded-full border border-orange-500/20 lg:block" />
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

        <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[720px]">
            <p className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
              Haocheng Intelligent Equipment
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl xl:text-7xl">
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
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-16 text-neutral-950 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
              About Haocheng
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
              {about.title}
            </h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-orange-500" />

            <div className="mt-8 space-y-5 text-base leading-8 text-neutral-700">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {about.highlights.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group rounded-lg border border-neutral-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_70px_rgba(249,115,22,0.14)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-orange-100 bg-orange-50 text-orange-600 transition duration-300 group-hover:border-orange-200 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="business" className="h-1 scroll-mt-24 bg-neutral-950" aria-label="核心业务占位" />
      <section id="platform" className="h-1 scroll-mt-24 bg-neutral-950" aria-label="平台矩阵占位" />
      <section id="contact" className="h-1 scroll-mt-24 bg-neutral-950" aria-label="联系我们占位" />
    </>
  )
}
