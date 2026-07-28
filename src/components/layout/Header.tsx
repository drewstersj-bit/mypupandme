import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Shop the Collection' },
  { to: '/size-guide', label: 'Find Your Size' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/journal', label: 'Little Dog Journal' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header" role="banner">
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="My Pup and Me — Home">
          <svg className="header__logo-icon" viewBox="0 0 200 50" aria-hidden="true" width="160" height="40">
            <text x="10" y="38" fontFamily="'Playfair Display', serif" fontSize="22" fontWeight="700" fill="#252525">
              my<tspan fontStyle="italic" fontSize="28">Pup</tspan><tspan fontSize="14" dy="-2">and</tspan><tspan fontSize="22" dy="2">me</tspan>
            </text>
            <path d="M155 5c-2 0-3.5 1-4 1.3-.5-.3-2-1.3-4-1.3-3.5 0-6 3-6 6.5 0 6.3 10 12.5 10 12.5s10-6.2 10-12.5c0-3.5-2.5-6.5-6-6.5z" fill="#C94045"/>
          </svg>
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`header__nav-link ${location.pathname === link.to ? 'header__nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social-link"
            aria-label="Follow us on Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <Link to="/collection" className="header__cta btn btn--primary btn--sm">
            Shop Now
          </Link>
          <button
            className="header__menu-toggle"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="mobile-menu__list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`mobile-menu__link ${location.pathname === link.to ? 'mobile-menu__link--active' : ''}`}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/collection"
                className="btn btn--primary mobile-menu__cta"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                Shop Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
