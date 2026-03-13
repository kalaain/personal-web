import { useState } from 'react'
import { Container } from '../components/layout/Container'
import { portfolioProjects } from '../data/portfolio'
import reactLogo from '../assets/coreSkills/React.svg'
import nodeLogo from '../assets/coreSkills/Node.js.svg'
import awsLogo from '../assets/coreSkills/AWS.svg'
import typescriptLogo from '../assets/coreSkills/TypeScript.svg'
import expressLogo from '../assets/coreSkills/Express.svg'
import tailwindLogo from '../assets/coreSkills/Tailwind CSS.svg'
import pythonLogo from '../assets/coreSkills/Python.svg'

const technologyLogoMap: Record<string, string> = {
  React: reactLogo,
  'Node.js': nodeLogo,
  AWS: awsLogo,
  TypeScript: typescriptLogo,
  Express: expressLogo,
  'Tailwind CSS': tailwindLogo,
  Python: pythonLogo,
}

const technologySubstituteMap: Record<string, string> = {
  MongoDB: 'Node.js',
  PostgreSQL: 'Express',
}

export function PortfolioSection() {
  const [expandedProjectId, setExpandedProjectId] = useState('')

  const visibleProjects = expandedProjectId
    ? portfolioProjects.filter((project) => project.id === expandedProjectId)
    : portfolioProjects

  return (
    <section id="portofolio" className="py-16 md:py-24" style={{ backgroundColor: '#660B05' }}>
      <Container>
        <div className="space-y-10 md:space-y-12">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl" style={{ color: '#FFF0C4' }}>
            Recent Project
          </h2>

          <div className={`grid gap-6 ${expandedProjectId ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
            {visibleProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id
              const displayTechnologies = Array.from(
                new Set(
                  project.technologies
                    .map((technology) => technologySubstituteMap[technology] ?? technology)
                    .filter((technology) => technologyLogoMap[technology]),
                ),
              )

              return (
                <article
                  key={project.id}
                  className={`rounded-2xl p-4 sm:p-5 ${expandedProjectId ? 'mx-auto w-full max-w-5xl' : ''}`}
                  style={{ backgroundColor: '#FFF0C4' }}
                >
                  <button
                    type="button"
                    className="grid w-full items-center gap-4 text-left sm:grid-cols-[1fr_1.25fr]"
                    onClick={() => setExpandedProjectId(isExpanded ? '' : project.id)}
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-3">
                      <p className="text-sm font-semibold italic" style={{ color: '#8C1007' }}>
                        {project.label}
                      </p>
                      <h3 className="text-3xl leading-tight font-bold" style={{ color: '#660B05' }}>
                        {project.title}
                      </h3>
                      <span
                        className="inline-flex items-center justify-center text-4xl leading-none"
                        style={{ color: '#660B05' }}
                        aria-hidden="true"
                      >
                        {isExpanded ? '−' : '↗'}
                      </span>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full rounded-xl object-cover"
                    />
                  </button>

                  {isExpanded && (
                    <div
                      className="mt-5 space-y-4 rounded-xl p-4"
                      style={{ backgroundColor: '#FFF0C4' }}
                    >
                      <div className="space-y-1">
                        <h4 className="text-xl font-semibold md:text-2xl" style={{ color: '#660B05' }}>
                          Project Brief
                        </h4>
                        <p className="text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                          {project.projectBrief}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold md:text-2xl" style={{ color: '#660B05' }}>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {displayTechnologies.map((technology) => (
                            <div
                              key={technology}
                              className="flex h-14 w-14 items-center justify-center rounded-lg"
                              title={technology}
                            >
                              <img
                                src={technologyLogoMap[technology]}
                                alt={`${technology} logo`}
                                className="h-10 w-10 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h4 className="text-xl font-semibold md:text-2xl" style={{ color: '#660B05' }}>
                            Situation
                          </h4>
                          <p className="text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                            {project.situation}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-xl font-semibold md:text-2xl" style={{ color: '#660B05' }}>
                            Task
                          </h4>
                          <p className="text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                            {project.task}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-xl font-semibold md:text-2xl" style={{ color: '#660B05' }}>
                            Action
                          </h4>
                          <p className="text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                            {project.action}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-xl font-semibold md:text-2xl" style={{ color: '#660B05' }}>
                            Result
                          </h4>
                          <p className="text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                            {project.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}
