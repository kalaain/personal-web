import type { FormEvent } from 'react'
import { Container } from '../components/layout/Container'
import { contactEmail, socialLinks } from '../data/contact'
import linkedinLogo from '../assets/Social/linkedin.png'
import githubLogo from '../assets/Social/github.png'
import instagramLogo from '../assets/Social/instagram.png'

const socialLogoMap: Record<string, string> = {
  LinkedIn: linkedinLogo,
  GitHub: githubLogo,
  Instagram: instagramLogo,
}

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#660B05' }}>
      <Container>
        <div className="space-y-8 md:space-y-10">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl" style={{ color: '#FFF0C4' }}>
            Contact Me!
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: '#FFF0C4' }}>
              <div className="space-y-5">
                <h3 className="text-2xl font-bold md:text-3xl" style={{ color: '#660B05' }}>
                  Let&apos;s Work Together
                </h3>
                <p className="text-sm leading-relaxed md:text-base" style={{ color: '#660B05' }}>
                  Punya project atau ingin diskusi kolaborasi? Kirim pesan lewat form atau hubungi saya melalui
                  email dan social platform berikut.
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase" style={{ color: '#8C1007' }}>
                    Email
                  </p>
                  <a href={`mailto:${contactEmail}`} className="text-base font-semibold" style={{ color: '#660B05' }}>
                    {contactEmail}
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase" style={{ color: '#8C1007' }}>
                    Social Links
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    {socialLinks.map((socialLink) => (
                      <a
                        key={socialLink.label}
                        href={socialLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center"
                        aria-label={socialLink.label}
                        title={socialLink.label}
                      >
                        <img
                          src={socialLogoMap[socialLink.label]}
                          alt={socialLink.label}
                          className="h-8 w-8 object-contain md:h-9 md:w-9"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: '#FFF0C4' }}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-sm font-semibold" style={{ color: '#660B05' }}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border px-3 py-2 text-sm md:text-base"
                    style={{ borderColor: '#8C1007', color: '#660B05' }}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-sm font-semibold" style={{ color: '#660B05' }}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border px-3 py-2 text-sm md:text-base"
                    style={{ borderColor: '#8C1007', color: '#660B05' }}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-sm font-semibold" style={{ color: '#660B05' }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border px-3 py-2 text-sm md:text-base"
                    style={{ borderColor: '#8C1007', color: '#660B05' }}
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg px-5 py-2.5 text-sm font-semibold md:text-base"
                  style={{ backgroundColor: '#660B05', color: '#FFF0C4' }}
                >
                  Send Message
                </button>
              </form>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}
