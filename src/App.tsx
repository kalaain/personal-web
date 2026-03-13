import { HeroSection } from './sections/HeroSection'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#660B05', color: '#FFF0C4' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

export default App
