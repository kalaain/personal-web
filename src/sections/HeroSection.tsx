import { profile } from '../data/profile'
import { Container } from '../components/layout/Container'
import avatarImage from '../assets/avatarhero.jpg'

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-5rem)] items-center py-12 md:min-h-screen md:py-20"
      style={{ backgroundColor: '#FFF0C4' }}
    >
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="order-2 mx-auto max-w-3xl space-y-4 text-center md:order-1 md:mx-0 md:space-y-5 md:text-left">
            <p className="text-xs tracking-[0.2em] uppercase sm:text-sm" style={{ color: '#8C1007' }}>
            </p>
            <h1
              className="text-3xl leading-tight font-bold sm:text-4xl md:text-6xl"
              style={{ color: '#660B05' }}
            >
              {profile.name}
            </h1>
            <h2 className="text-lg font-medium sm:text-xl md:text-2xl" style={{ color: '#8C1007' }}>
              {profile.role}
            </h2>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg" style={{ color: '#660B05' }}>
              {profile.tagline}
            </p>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-xl px-7 py-3.5 text-base font-semibold transition-colors sm:w-auto md:text-lg"
              style={{ backgroundColor: '#8C1007', color: '#FFF0C4' }}
            >
              Hit Me Up!
            </a>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <img
              src={avatarImage}
              alt="Foto profil"
              className="w-72 h-72 md:w-105 md:h-105 object-cover"
              style={{ border: '3px solid #660B05' }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}