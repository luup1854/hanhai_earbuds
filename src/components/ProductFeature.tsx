import { useEffect, useRef, useState } from 'react'
import type { ProductSection } from '../data/earbudsData'

type ProductFeatureProps = {
  section: ProductSection
}

export function ProductFeature({ section }: ProductFeatureProps) {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`fade-up-section relative overflow-hidden border-t border-white/10 bg-neutral-950 py-16 text-white sm:py-20 lg:py-24 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.18),transparent_30%),linear-gradient(135deg,#0a0a0a,#151515_54%,#050505)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className={section.reverse ? 'lg:order-2' : ''}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {section.title}
          </h2>
          <div className="mt-5 h-1 w-12 rounded-full bg-orange-500" />
          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
            {section.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {section.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={section.reverse ? 'lg:order-1' : ''}>
          <div className="relative overflow-hidden rounded-2xl border border-orange-500/25 bg-black shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
            <img src={section.image.src} alt={section.image.alt} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.18),transparent_38%,rgba(0,0,0,0.22))]" />
          </div>
        </div>
      </div>
    </section>
  )
}
