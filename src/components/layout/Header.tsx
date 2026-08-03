import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import { useCart } from '@/context/CartContext'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Shop the Collection' },
  { to: '/size-guide', label: 'Size Guide' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/journal', label: 'Handy Guides' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { totalItems, openCart } = useCart()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header" role="banner">
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="My Pup and Me - Home" onClick={closeMenu}>
          <img
            src="/onwhite.jpg"
            alt="My Pup and Me"
            className="header__logo-img"
            width="160"
            height="40"
          />
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
          <button className="header__cart-btn" onClick={openCart} aria-label={`Shopping bag, ${totalItems} items`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {totalItems > 0 && <span className="header__cart-count">{totalItems}</span>}
          </button>
          <a
            href={SHOP_URL}
            className="header__cta btn btn--primary btn--sm"
            onClick={() => trackOutboundClick({ button_location: 'header_cta', destination_url: SHOP_URL })}
          >
            Buy at My Chi and Me
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6"/>
            </svg>
          </a>
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
              <a
                href={SHOP_URL}
                className="btn btn--primary btn--lg mobile-menu__cta"
                onClick={() => { closeMenu(); trackOutboundClick({ button_location: 'mobile_menu_cta', destination_url: SHOP_URL }); }}
                tabIndex={menuOpen ? 0 : -1}
              >
                Buy at My Chi and Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
