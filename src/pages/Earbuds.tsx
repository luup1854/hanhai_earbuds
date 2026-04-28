import { ArrowRight } from "lucide-react";
import { Carousel } from "../components/Carousel";
import { ProductFeature } from "../components/ProductFeature";
import { ProductSpecTable } from "../components/ProductSpecTable";
import { earbudsData } from "../data/earbudsData";

export function Earbuds() {
  return (
    <div className="bg-black">
      <Carousel images={earbudsData.carouselImages} />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#151515_0%,#050505_100%)] py-16 text-white sm:py-20">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
              CORE HIGHLIGHTS
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              核心亮点
            </h1>
            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {earbudsData.highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-orange-500/35 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.16),transparent_42%),linear-gradient(145deg,rgba(39,39,42,0.95),rgba(8,8,8,0.98))] p-6 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_24px_80px_rgba(249,115,22,0.18)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-orange-500/35 text-orange-400 transition duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {earbudsData.quickPoints.map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200"
                >
                  <Icon className="h-4 w-4 text-orange-400" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {earbudsData.productSections.map((section) => (
        <ProductFeature key={section.title} section={section} />
      ))}

      <ProductSpecTable specs={earbudsData.specs} />

      <section id="download" className="relative scroll-mt-24 overflow-hidden bg-neutral-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-2xl border border-orange-500/30 bg-black p-8 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
            <img
              src={earbudsData.appEntry.image.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-20 h-full w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.66)_45%,rgba(0,0,0,0.2)_100%)]" />

            <div className="max-w-2xl">
              <h2 className="bg-gradient-to-r from-[#fff5d8] via-[#d8b56f] to-[#fff8df] bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-[0_0_18px_rgba(216,181,111,0.24)] sm:text-4xl">
                {earbudsData.appEntry.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-neutral-300 sm:text-lg">
                {earbudsData.appEntry.description}
              </p>
              {/* TODO: 后续接入真实 APP 下载链接。 */}
              <a
                href={earbudsData.appEntry.actionHref}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition duration-300 hover:-translate-y-0.5 hover:from-orange-400 hover:to-orange-500"
              >
                {earbudsData.appEntry.actionLabel}
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
