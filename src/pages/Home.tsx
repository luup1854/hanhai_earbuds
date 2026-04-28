import { ArrowRight, BatteryCharging, Clock3, Headphones, Mail, Mic2, MapPin, Phone, Store, Wifi } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
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

const productPointIcons: Record<string, LucideIcon> = {
  低延迟: Clock3,
  清晰通话: Mic2,
  舒适佩戴: Headphones,
  稳定连接: Wifi,
}

export function Home() {
  const { hero, about, business, advantages, earbudsEntry } = siteData.home

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

      <section
        id="business"
        className="relative isolate scroll-mt-24 overflow-hidden bg-neutral-950 py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_28%),linear-gradient(180deg,#0a0a0a_0%,#111_48%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
              CORE BUSINESS
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">核心业务</h2>
            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {business.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title} className="relative">
                  <article className="group relative min-h-[330px] overflow-hidden rounded-lg border border-orange-500/45 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.16),transparent_42%),linear-gradient(145deg,rgba(38,38,41,0.96),rgba(8,8,8,0.98))] px-7 py-9 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_24px_80px_rgba(249,115,22,0.2)]">
                    <div className="absolute inset-x-8 bottom-0 h-24 opacity-25 [background-image:repeating-radial-gradient(ellipse_at_center,rgba(249,115,22,0.45)_0_1px,transparent_1px_6px)] [mask-image:linear-gradient(180deg,transparent,black)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />

                    <div className="relative mx-auto flex h-28 w-28 items-center justify-center text-orange-500 transition duration-300 group-hover:scale-105 group-hover:text-orange-400">
                      <div className="absolute inset-0 rounded-full border border-orange-500/25" />
                      <div className="absolute inset-4 rounded-full border border-orange-500/20" />
                      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" />
                      <div className="absolute bottom-0 top-0 left-1/2 w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />
                      <Icon className="relative h-14 w-14" strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-7 text-center text-2xl font-semibold text-white">{item.title}</h3>
                    <div className="mx-auto mt-4 h-1 w-8 rounded-full bg-orange-500" />
                    <p className="mt-5 text-left text-base leading-8 text-neutral-300">{item.description}</p>
                    {item.note ? (
                      <p className="mt-4 text-left text-base leading-8 text-neutral-300">
                        {item.note}
                      </p>
                    ) : null}
                  </article>
                </div>
              )
            })}
          </div>

        </div>
      </section>
      <section
        id="platform"
        className="scroll-mt-24 bg-[radial-gradient(circle_at_50%_0%,rgba(15,23,42,0.08),transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-20 text-neutral-950 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-orange-600">
              PLATFORM MATRIX
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-neutral-900 sm:text-5xl">平台矩阵</h2>
            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-orange-500" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => {
              const badge = platformBadges[platform.name] ?? {
                mark: platform.name.slice(0, 1),
                className: 'bg-neutral-950 text-white ring-neutral-200',
              }

              return (
                <div
                  key={platform.name}
                  className="group flex min-h-32 items-center gap-6 rounded-xl border border-neutral-100 bg-white px-8 py-7 shadow-[0_18px_54px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-[0_24px_70px_rgba(249,115,22,0.16)]"
                >
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-xl font-semibold shadow-lg ring-1 transition duration-300 group-hover:scale-105 ${badge.className}`}
                  >
                    {badge.mark}
                  </div>
                  <p className="text-2xl font-semibold text-neutral-900 transition duration-300 group-hover:text-orange-600">
                    {platform.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 text-neutral-950 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              OUR ADVANTAGES
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">我们的优势</h2>
            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group rounded-lg border border-neutral-100 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_54px_rgba(249,115,22,0.12)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-orange-50 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
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

      <section className="bg-white pb-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(110deg,#050505_0%,#151515_48%,#050505_100%)] px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:px-10 lg:px-12">
            <img
              src={earbudsEntry.image.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.74)_38%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.35)_100%)]" />
            <div className="absolute inset-y-0 left-0 -z-10 w-2/3 bg-[radial-gradient(circle_at_18%_50%,rgba(249,115,22,0.24),transparent_36%)]" />

            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
                Product Entry
              </p>
              <h2 className="mt-3 bg-gradient-to-r from-[#fff5d8] via-[#d8b56f] to-[#fff8df] bg-clip-text text-3xl font-semibold text-transparent drop-shadow-[0_0_18px_rgba(216,181,111,0.24)] sm:text-4xl">
                {earbudsEntry.name}
              </h2>
              <p className="mt-3 bg-gradient-to-r from-[#fff1cf] via-[#c9a35d] to-[#f6dfad] bg-clip-text text-lg font-medium text-transparent">
                {earbudsEntry.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {earbudsEntry.sellingPoints.map((point) => {
                  const Icon = productPointIcons[point] ?? BatteryCharging
                  const label = point === '清晰通话' ? '高清音质' : point

                  return (
                    <div key={point} className="flex items-center gap-2 text-sm text-neutral-200">
                      <Icon className="h-5 w-5 text-orange-400" strokeWidth={1.8} />
                      {label}
                    </div>
                  )
                })}
              </div>

              <Link
                to={earbudsEntry.action.href}
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition duration-300 hover:-translate-y-0.5 hover:from-orange-400 hover:to-orange-500"
              >
                {earbudsEntry.action.label}
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-white pb-16 text-neutral-950 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              CONTACT US
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">联系我们</h2>
            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: '电话', value: siteData.company.phone, icon: Phone },
                { label: '公司邮箱', value: siteData.company.email, icon: Mail },
                { label: '地址（中国）', value: `中国 ${siteData.company.addressCn}`, icon: MapPin, wide: true },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className={`group rounded-xl border border-neutral-100 bg-white p-5 shadow-[0_14px_42px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_54px_rgba(249,115,22,0.12)] ${
                      item.wide ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </div>
                    <p className="text-sm font-semibold text-neutral-950">{item.label}</p>
                    <p className="mt-2 break-words text-sm leading-7 text-neutral-600">{item.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="relative isolate overflow-hidden rounded-xl border border-neutral-900 bg-neutral-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(249,115,22,0.24),transparent_34%),linear-gradient(145deg,#171717,#050505)]" />
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/35 bg-orange-500/10 text-orange-400">
                      <Store className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <p className="text-sm font-semibold text-orange-300">公司英文名</p>
                    <p className="mt-2 text-base leading-8 text-neutral-200">{siteData.company.nameEn}</p>
                  </div>

                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/35 bg-orange-500/10 text-orange-400">
                      <MapPin className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <p className="text-sm font-semibold text-orange-300">英文地址</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-300">
                      {siteData.company.addressEn}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${siteData.company.phone}`}
                  className="group inline-flex items-center justify-center gap-3 self-start rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-orange-400 hover:to-orange-500"
                >
                  立即联系
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
