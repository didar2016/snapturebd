import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './MobileMenu.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function MobileMenu({ isOpen, onClose }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__overlay" onClick={onClose} />
      <div className="mobile-menu__content">
        <div className="mobile-menu__header">
          <h2>Navigate</h2>
          <button 
            className="mobile-menu__close" 
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <nav className="mobile-menu__nav">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
          
          <Link 
            to="/contact" 
            className="btn btn-solid mobile-menu__cta" 
            onClick={onClose}
          >
            Book Session
          </Link>
        </nav>
      </div>
    </div>
  )
}