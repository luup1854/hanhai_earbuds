import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import type { CarouselImage } from '../data/earbudsData'

type CarouselProps = {
  images: readonly CarouselImage[]
  interval?: number
}

export function Carousel({ images, interval = 4000 }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + images.length) % images.length)
    },
    [images.length],
  )

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    if (isPaused || images.length <= 1) return

    const timer = window.setInterval(goNext, interval)
    return () => window.clearInterval(timer)
  }, [goNext, images.length, interval, isPaused])

  if (images.length === 0) return null

  return (
    <section
      className="relative isolate overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[260px] bg-black sm:h-[420px] lg:h-[620px]">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-contain transition duration-700 ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_46%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      <button
        type="button"
        aria-label="上一张"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400/40 bg-black/35 text-orange-200 backdrop-blur transition hover:border-orange-300 hover:bg-orange-500 hover:text-white sm:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="下一张"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400/40 bg-black/35 text-orange-200 backdrop-blur transition hover:border-orange-300 hover:bg-orange-500 hover:text-white sm:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`切换到第 ${index + 1} 张`}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition ${
              activeIndex === index ? 'w-8 bg-orange-400' : 'w-2.5 bg-white/70 hover:bg-orange-200'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
