import { Container } from '../components/layout/Container'
import { experienceItems } from '../data/experience'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24" style={{ backgroundColor: '#FFF0C4' }}>
      <Container>
        <div className="space-y-8 md:space-y-10">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl" style={{ color: '#660B05' }}>
            Experience
          </h2>

          <div className="space-y-6">
            {experienceItems.map((item, index) => {
              const isLastItem = index === experienceItems.length - 1

              return (
                <article
                  key={item.id}
                  className="grid gap-4 border-b pb-6 md:grid-cols-[88px_28px_1fr] md:gap-6 md:pb-8"
                  style={{ borderColor: 'rgba(140, 16, 7, 0.25)' }}
                >
                  <div className="md:pt-1">
                    <span
                      className="inline-flex rounded-md px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: '#660B05', color: '#FFF0C4' }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <div className="hidden items-center md:flex md:flex-col">
                    <span
                      className="h-3.5 w-3.5 rounded-full"
                      style={{ backgroundColor: '#8C1007', boxShadow: '0 0 0 4px rgba(140, 16, 7, 0.15)' }}
                    />
                    {!isLastItem && (
                      <span className="mt-2 h-full w-px" style={{ backgroundColor: 'rgba(140, 16, 7, 0.55)' }} />
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold md:text-3xl" style={{ color: '#660B05' }}>
                      {item.title}
                    </h3>
                    <p className="text-base font-semibold md:text-lg" style={{ color: '#8C1007' }}>
                      {item.company}
                    </p>
                    <p className="text-sm md:text-base" style={{ color: '#660B05' }}>
                      {item.duration}
                    </p>
                    <ul className="space-y-2 pt-1 text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>• {responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
