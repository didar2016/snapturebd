import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import MobileMenu from './MobileMenu.jsx'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
//   { to: '/blog', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <Link to="/" className="nav__logo" onClick={closeMobileMenu}>
            <span className="nav__logo-mark">S</span>
            <span className="nav__logo-text">napture<em>bd</em></span>
          </Link>

          <nav className="nav__links">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-solid nav__cta">Book Session</Link>
          </nav> 

          <button 
            className={`nav__burger ${mobileMenuOpen ? 'is-open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}
