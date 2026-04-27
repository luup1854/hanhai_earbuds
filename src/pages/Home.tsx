import {
  ArrowRight,
  BarChart3,
  BatteryCharging,
  Clock3,
  Headphones,
  Mail,
  MessageCircle,
  Mic2,
  MapPin,
  PlaySquare,
  Phone,
  Radio,
  ShoppingBag,
  ShoppingCart,
  Star,
  Store,
  TrendingUp,
  Video,
  Wifi,
} from 'lucide-react'
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

const platformIcons: Record<string, LucideIcon> = {
  抖音: PlaySquare,
  淘宝: ShoppingBag,
  天猫: Store,
  京东: ShoppingCart,
  拼多多: ShoppingBag,
  小红书: MessageCircle,
  快手: Video,
  视频号: Radio,
}

const productPointIcons: Record<string, LucideIcon> = {
  低延迟: Clock3,
  清晰通话: Mic2,
  舒适佩戴: Headphones,
  稳定连接: Wifi,
}

export function Home() {
  const { hero, about, business, platforms, advantages, earbudsEntry } = siteData.home
  const businessNote = business.find((item) => item.note)?.note

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
                  </article>

                  <div className="absolute -bottom-12 left-1/2 hidden h-12 w-px bg-orange-500/60 xl:block">
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.8)]" />
                    <span className="absolute bottom-0 left-0 h-px w-28 bg-orange-500/35 odd:hidden" />
                  </div>
                </div>
              )
            })}
          </div>

          {businessNote ? (
            <div className="relative mx-auto mt-16 max-w-6xl rounded-xl border border-orange-500/55 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_55%),linear-gradient(135deg,rgba(49,28,16,0.96),rgba(8,8,8,0.98))] p-5 shadow-[0_28px_90px_rgba(249,115,22,0.18)]">
              <div className="absolute inset-2 rounded-lg border border-orange-500/20" />
              <div className="relative grid gap-6 lg:grid-cols-[1.25fr_0.75fr_1.5fr] lg:items-center">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-orange-500/45 text-orange-500">
                    <Star className="h-9 w-9" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-white">核心产品表现</p>
                    <p className="mt-2 max-w-sm text-base leading-8 text-neutral-200">
                      以宾利伯爵耳机、魔声耳机为核心产品
                    </p>
                  </div>
                </div>

                <div className="border-y border-orange-500/25 py-5 text-center lg:border-x lg:border-y-0 lg:py-0">
                  <p className="text-6xl font-semibold leading-none text-orange-500 drop-shadow-[0_0_22px_rgba(249,115,22,0.45)]">
                    5 万+
                  </p>
                  <p className="mt-2 text-lg text-neutral-200">台 / 月稳定销量</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: '音频品类核心产品', icon: Headphones },
                    { label: '多平台渠道运营', icon: BarChart3 },
                    { label: '直播增长服务', icon: TrendingUp },
                  ].map((tag) => {
                    const TagIcon = tag.icon

                    return (
                      <div
                        key={tag.label}
                        className="flex items-center justify-center gap-2 rounded-md border border-orange-500/35 bg-black/20 px-4 py-3 text-sm font-medium text-neutral-200"
                      >
                        <TagIcon className="h-5 w-5 text-orange-500" strokeWidth={1.8} />
                        {tag.label}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <section id="platform" className="scroll-mt-24 bg-white py-14 text-neutral-950 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              PLATFORM MATRIX
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">平台矩阵</h2>
            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {platforms.map((platform) => {
              const Icon = platformIcons[platform.name] ?? Store

              return (
                <div
                  key={platform.name}
                  className="group flex h-16 items-center justify-center gap-2 rounded-lg border border-neutral-100 bg-white px-4 text-base font-semibold text-neutral-900 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:text-orange-600 hover:shadow-[0_18px_44px_rgba(249,115,22,0.14)]"
                >
                  <Icon className="h-5 w-5 text-orange-500 transition duration-300 group-hover:scale-110" />
                  {platform.name}
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
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {earbudsEntry.name}
              </h2>
              <p className="mt-3 text-lg font-medium text-neutral-200">{earbudsEntry.description}</p>

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
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              CONTACT US
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">联系我们</h2>
            <div className="mt-4 h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
            <div className="grid gap-4 rounded-xl border border-neutral-100 bg-white p-6 shadow-[0_18px_54px_rgba(15,23,42,0.08)] md:grid-cols-3">
              {[
                { label: '电话', value: siteData.company.phone, icon: Phone },
                { label: '公司邮箱', value: siteData.company.email, icon: Mail },
                { label: '地址（中国）', value: `中国 ${siteData.company.addressCn}`, icon: MapPin },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-950">{item.label}</p>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-xl border border-neutral-100 bg-white p-6 shadow-[0_18px_54px_rgba(15,23,42,0.08)]">
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                    <Store className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">公司英文名</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{siteData.company.nameEn}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                    <MapPin className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">英文地址</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">
                      {siteData.company.addressEn}
                    </p>
                  </div>
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
      </section>
    </>
  )
}
