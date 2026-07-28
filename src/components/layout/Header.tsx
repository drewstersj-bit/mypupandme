import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Shop' },
  { to: '/size-guide', label: 'Size Guide' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/journal', label: 'Journal' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header" role="banner">
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="My Pup and Me — Home" onClick={closeMenu}>
          <svg className="header__logo-img" viewBox="0 0 220 40" aria-hidden="true" width="180" height="36">
            <text x="2" y="32" fontFamily="'Brush Script MT', cursive" fontSize="26" fill="#0B0B0B" fontStyle="italic">my</text>
            <text x="38" y="33" fontFamily="'Brush Script MT', cursive" fontSize="34" fontWeight="700" fill="#0B0B0B" fontStyle="italic">Pup</text>
            <text x="98" y="32" fontFamily="'Inter', sans-serif" fontSize="11" fill="#0B0B0B" letterSpacing="0.5">and</text>
            <text x="127" y="32" fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="700" fill="#0B0B0B">me</text>
            <path d="M116 4c-1.5 0-2.8.9-3.2 1.1-.4-.2-1.7-1.1-3.2-1.1-2.8 0-5 2.6-5 5.5 0 5.2 8.2 10.5 8.2 10.5s8.2-5.3 8.2-10.5c0-2.9-2.2-5.5-5-5.5z" fill="#F20D19"/>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                className="btn btn--primary btn--lg mobile-menu__cta"
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
