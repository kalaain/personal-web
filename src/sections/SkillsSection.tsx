import { useState } from 'react'
import { Container } from '../components/layout/Container'
import { skillCategories } from '../data/skills'
import htmlLogo from '../assets/coreSkills/HTML.svg'
import cssLogo from '../assets/coreSkills/CSS.svg'
import javascriptLogo from '../assets/coreSkills/javascript-logo-svgrepo-com.svg'
import typescriptLogo from '../assets/coreSkills/TypeScript.svg'
import reactLogo from '../assets/coreSkills/React.svg'
import tailwindLogo from '../assets/coreSkills/Tailwind CSS.svg'
import nodeLogo from '../assets/coreSkills/Node.js.svg'
import pythonLogo from '../assets/coreSkills/Python.svg'
import expressLogo from '../assets/coreSkills/Express.svg'
import djangoLogo from '../assets/coreSkills/Django.svg'
import gitLogo from '../assets/coreSkills/Git.svg'
import dockerLogo from '../assets/coreSkills/Docker.svg'
import awsLogo from '../assets/coreSkills/AWS.svg'
import jenkinsLogo from '../assets/coreSkills/Jenkins.svg'

const frontEndSkillLogos = [
  { name: 'HTML', image: htmlLogo },
  { name: 'CSS', image: cssLogo },
  { name: 'JavaScript', image: javascriptLogo },
  { name: 'TypeScript', image: typescriptLogo },
  { name: 'React', image: reactLogo },
  { name: 'Tailwind CSS', image: tailwindLogo },
]

const backEndSkillLogos = [
  { name: 'Node.js', image: nodeLogo },
  { name: 'Express', image: expressLogo },
  { name: 'Python', image: pythonLogo },
  { name: 'Django', image: djangoLogo },
]

const devopsSkillLogos = [
  { name: 'Git', image: gitLogo },
  { name: 'Docker', image: dockerLogo },
  { name: 'AWS', image: awsLogo },
  { name: 'Jenkins', image: jenkinsLogo },
]

const skillLogosByCategory: Record<string, Array<{ name: string; image: string }>> = {
  frontend: frontEndSkillLogos,
  backend: backEndSkillLogos,
  'devops-tools': devopsSkillLogos,
}

export function SkillsSection() {
  const [expandedId, setExpandedId] = useState(skillCategories[0]?.id ?? '')

  return (
    <section id="skills" className="py-16 md:py-24" style={{ backgroundColor: '#FFF0C4' }}>
      <Container>
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl" style={{ color: '#660B05' }}>
              Skills
            </h2>
          </div>

          <div>
            {skillCategories.map((category) => {
              const isExpanded = expandedId === category.id
              const categoryLogos = skillLogosByCategory[category.id] ?? []

              return (
                <article
                  key={category.id}
                  className="border-b py-5 md:py-7"
                  style={{ borderColor: 'rgba(140, 16, 7, 0.25)' }}
                >
                  <button
                    type="button"
                    className="grid w-full items-start gap-5 text-left md:grid-cols-[1.2fr_1.4fr_auto] md:gap-8"
                    onClick={() => setExpandedId(isExpanded ? '' : category.id)}
                    aria-expanded={isExpanded}
                  >
                    <h3
                      className="text-2xl font-bold md:text-4xl"
                      style={{ color: isExpanded ? '#8C1007' : '#660B05' }}
                    >
                      {category.title}
                    </h3>
                    <p className="text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                      {category.summary}
                    </p>
                    <span
                      className="text-4xl leading-none md:text-5xl"
                      style={{ color: '#660B05' }}
                      aria-hidden="true"
                    >
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="mt-6 grid gap-5 md:grid-cols-[1.2fr_1.4fr_auto] md:gap-8">
                      {categoryLogos.length > 0 ? (
                        <div className="md:col-start-2">
                          <div className="flex flex-wrap items-center gap-5 md:gap-6">
                            {categoryLogos.map((logo) => (
                              <div
                                key={logo.name}
                                className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#FFF0C4] p-2 md:h-24 md:w-24"
                              >
                                <img
                                  src={logo.image}
                                  alt={`${logo.name} logo`}
                                  className="h-16 w-16 object-contain md:h-20 md:w-20"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p
                          className="text-sm leading-relaxed md:col-start-2 md:text-base"
                          style={{ color: '#660B05' }}
                        >
                          {category.details}
                        </p>
                      )}
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
