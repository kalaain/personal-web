import { useEffect, useRef, useState } from 'react'
import { Container } from './Container'
import { navigationMenus } from '../../data/navigation'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [isTopHoverActive, setIsTopHoverActive] = useState(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const lastScrollY = lastScrollYRef.current

      if (currentScrollY < 24) {
        setIsNavbarVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shouldShowNavbar = isNavbarVisible || isTopHoverActive || isMenuOpen

  return (
    <>
      <div
        className="fixed top-0 left-0 z-60 h-4 w-full"
        onMouseEnter={() => setIsTopHoverActive(true)}
        onMouseLeave={() => setIsTopHoverActive(false)}
      />

      <header
        className={`sticky top-0 z-50 transform backdrop-blur transition-transform duration-300 ${shouldShowNavbar ? 'translate-y-0' : '-translate-y-full'}`}
        onMouseEnter={() => setIsTopHoverActive(true)}
        onMouseLeave={() => setIsTopHoverActive(false)}
        style={{ borderBottom: '1px solid #8C1007', backgroundColor: 'rgba(102, 11, 5, 0.95)' }}
      >
        <Container>
          <nav className="relative flex h-20 items-center justify-center md:h-24" aria-label="Main navigation">
            <ul className="hidden items-center gap-6 sm:gap-10 md:flex">
              {navigationMenus.map((menu) => (
                <li key={menu.label}>
                  <a
                    href={menu.href}
                    className="rounded-md px-3 py-2 text-base font-semibold text-[#FFF0C4] transition-colors duration-200 hover:bg-[#FFF0C4] hover:text-[#660B05]"
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="absolute right-0 rounded-lg border border-[#FFF0C4] bg-[#8C1007] px-4 py-2 text-sm font-semibold text-[#FFF0C4] transition-colors duration-200 hover:bg-[#FFF0C4] hover:text-[#660B05] md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              <span aria-hidden="true" className="text-xl leading-none">
                ☰
              </span>
            </button>

            {isMenuOpen && (
              <ul
                id="mobile-navigation"
                className="absolute top-full right-0 left-0 mt-2 space-y-3 rounded-xl border p-4 md:hidden"
                style={{ borderColor: '#8C1007', backgroundColor: '#660B05' }}
              >
                {navigationMenus.map((menu) => (
                  <li key={menu.label}>
                    <a
                      href={menu.href}
                      className="block rounded-md px-3 py-2 text-sm font-semibold text-[#FFF0C4] transition-colors duration-200 hover:bg-[#FFF0C4] hover:text-[#660B05]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menu.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </Container>
      </header>
    </>
  )
}
