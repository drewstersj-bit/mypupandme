import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__brand-summary">
              Beautifully designed harnesses and matching leads for puppies, toy breeds and small dogs with big personalities.
            </p>
          </div>

          <div>
            <h3 className="footer__heading">Shop</h3>
            <ul className="footer__list">
              <li><Link to="/collection" className="footer__link">All Products</Link></li>
              <li><Link to="/size-guide" className="footer__link">Size Guide</Link></li>
              <li><a href="https://mychiandme.co.uk/pages/delivery-and-returns-info" target="_blank" rel="noopener noreferrer" className="footer__link">Delivery &amp; Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Discover</h3>
            <ul className="footer__list">
              <li><Link to="/our-story" className="footer__link">Our Story</Link></li>
              <li><Link to="/journal" className="footer__link">Little Dog Journal</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Legal</h3>
            <ul className="footer__list">
              <li><Link to="/privacy" className="footer__link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer__link">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} My Pup and Me. All rights reserved.
            </p>
            <p className="footer__parent-note">
              My Pup and Me is brought to you by the team behind My Chi and Me.
            </p>
          </div>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/mychiandme"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
