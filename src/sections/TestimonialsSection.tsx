import { useEffect, useMemo, useRef, useState } from 'react'
import { Container } from '../components/layout/Container'
import { testimonials } from '../data/testimonials'

const LOOP_COPIES = 3
const AUTO_SCROLL_SPEED = 48

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const offsetRef = useRef(0)
  const loopWidthRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const lastTimestampRef = useRef<number>(0)
  const dragStartXRef = useRef(0)
  const dragStartOffsetRef = useRef(0)
  const isDragMovedRef = useRef(false)

  const repeatedTestimonials = useMemo(
    () => Array.from({ length: LOOP_COPIES }, () => testimonials).flat(),
    [],
  )

  const applyTransform = (offset: number) => {
    if (!trackRef.current) return
    trackRef.current.style.transform = `translate3d(-${offset}px, 0, 0)`
  }

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      loopWidthRef.current = trackRef.current.scrollWidth / LOOP_COPIES
      offsetRef.current = 0
      applyTransform(0)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    const animate = (timestamp: number) => {
      const previousTimestamp = lastTimestampRef.current || timestamp
      const deltaSeconds = (timestamp - previousTimestamp) / 1000
      lastTimestampRef.current = timestamp

      if (!isPaused && !isDragging && loopWidthRef.current > 0) {
        offsetRef.current += AUTO_SCROLL_SPEED * deltaSeconds

        while (offsetRef.current >= loopWidthRef.current) {
          offsetRef.current -= loopWidthRef.current
        }

        applyTransform(offsetRef.current)

        const cardWidth = loopWidthRef.current / testimonials.length
        const nextIndex = Math.floor(offsetRef.current / cardWidth) % testimonials.length
        setActiveIndex(nextIndex)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isPaused, isDragging])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!viewportRef.current) return
    viewportRef.current.setPointerCapture(event.pointerId)
    dragStartXRef.current = event.clientX
    dragStartOffsetRef.current = offsetRef.current
    isDragMovedRef.current = false
    setIsDragging(true)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || loopWidthRef.current <= 0) return

    const moved = Math.abs(event.clientX - dragStartXRef.current) > 4
    if (moved) isDragMovedRef.current = true

    const deltaX = event.clientX - dragStartXRef.current
    let nextOffset = dragStartOffsetRef.current - deltaX

    while (nextOffset < 0) {
      nextOffset += loopWidthRef.current
    }
    while (nextOffset >= loopWidthRef.current) {
      nextOffset -= loopWidthRef.current
    }

    offsetRef.current = nextOffset
    applyTransform(nextOffset)
  }

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (viewportRef.current?.hasPointerCapture(event.pointerId)) {
      viewportRef.current.releasePointerCapture(event.pointerId)
    }
    setIsDragging(false)
  }

  const handleClickToggle = () => {
    if (isDragMovedRef.current) return
    setIsPaused((previous) => !previous)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: '#660B05' }}>
      <Container>
        <div className="space-y-8 md:space-y-10">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl" style={{ color: '#FFF0C4' }}>
            Testimonials
          </h2>

          <div
            ref={viewportRef}
            className="overflow-hidden rounded-2xl"
            onClick={handleClickToggle}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
          >
            <div ref={trackRef} className="flex gap-5 py-1 will-change-transform md:gap-6">
              {repeatedTestimonials.map((testimonial, index) => {
                const isActive = activeIndex === index % testimonials.length

                return (
                  <article
                    key={`${testimonial.id}-${index}`}
                    className="w-75 shrink-0 rounded-2xl p-5 transition-transform duration-300 md:w-90 md:p-6"
                    style={{
                      backgroundColor: '#FFF0C4',
                      color: '#660B05',
                      transform: isActive && !isPaused ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                  >
                    <p className="text-sm leading-relaxed md:text-base">“{testimonial.quote}”</p>

                    <div className="mt-5 flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold"
                        style={{ backgroundColor: '#8C1007', color: '#FFF0C4' }}
                      >
                        {testimonial.name
                          .split(' ')
                          .map((word) => word[0])
                          .join('')
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>

                      <div>
                        <p className="text-sm font-semibold md:text-base">{testimonial.name}</p>
                        <p className="text-xs md:text-sm" style={{ color: '#8C1007' }}>
                          {testimonial.role} · {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
