import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/guides', label: 'Guides' },
    { to: '/strategies', label: 'Study Methods' },
    { to: '/about', label: 'About' },
  ]

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Close the mobile menu if the viewport grows past the mobile breakpoint
  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const mql = window.matchMedia('(min-width: 768px)')
    const handleChange = (event) => {
      if (event.matches) setIsOpen(false)
    }
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  return (
    <header id="top" className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold tracking-tight">
            Campus Study Guides
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`inline-flex items-center min-h-[44px] text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.to ? 'text-accent' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            className="md:hidden pb-4 border-t border-gray-700"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 min-h-[44px] text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.to ? 'text-accent' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
