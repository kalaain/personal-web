import { Container } from '../components/layout/Container'
import { briefBio, coreSkills, workPrinciples } from '../data/about'

export function AboutSection() {
  return (
    <section id="about-me" className="py-16 md:py-24" style={{ backgroundColor: '#660B05' }}>
      <Container>
        <div className="space-y-10">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: '#FFF0C4' }}>
              About Me
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="space-y-3 rounded-2xl border p-6" style={{ borderColor: '#8C1007' }}>
              <p className="text-sm leading-relaxed sm:text-base" style={{ color: '#FFF0C4' }}>
                {briefBio}
              </p>
            </article>

            <article className="space-y-3 rounded-2xl border p-6" style={{ borderColor: '#8C1007' }}>
              <h3 className="text-xl font-semibold" style={{ color: '#FFF0C4' }}>
                Work Principles
              </h3>
              <div className="space-y-3" style={{ color: '#FFF0C4' }}>
                {workPrinciples.map((principle) => (
                  <div key={principle.title} className="space-y-1">
                    <h4 className="text-sm font-semibold sm:text-base">{principle.title}</h4>
                    <p className="text-sm leading-relaxed sm:text-base">{principle.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <section className="space-y-8 rounded-2xl px-6 py-10 md:px-10 md:py-12" style={{ backgroundColor: '#660B05' }}>
            <h3
              className="text-center text-2xl font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#FFF0C4' }}
            >
              Core Skills
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              {coreSkills.map((skill) => (
                <article key={skill.name} className="flex items-center justify-center" title={skill.name}>
                  <div className="flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={`${skill.name} logo`}
                        className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                      />
                    ) : (
                      <span className="text-[10px] tracking-wider uppercase" style={{ color: '#FFF0C4' }}>
                        PNG
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  )
}
