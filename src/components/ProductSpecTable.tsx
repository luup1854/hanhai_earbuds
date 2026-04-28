import type { ProductSpec } from '../data/earbudsData'

type ProductSpecTableProps = {
  specs: readonly ProductSpec[]
}

export function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <section className="bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
            PRODUCT SPECS
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">产品参数</h2>
          <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500" />
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-orange-500/35 bg-[linear-gradient(145deg,rgba(38,38,38,0.96),rgba(7,7,7,0.98))] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5">
            {specs.map((spec) => (
              <div key={spec.label} className="border-b border-r border-orange-500/20 p-5">
                <p className="text-sm text-orange-300">{spec.label}</p>
                <p className="mt-3 text-base font-medium leading-7 text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
