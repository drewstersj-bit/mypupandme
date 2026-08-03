import { Link } from 'react-router-dom'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img
              src="/onblack.jpg"
              alt="My Pup and Me"
              className="footer__brand-logo"
              width="140"
              height="35"
            />
            <p className="footer__brand-summary">
              My Pup and Me is the small-dog harness and accessories brand from the team behind My Chi and Me. Products are currently available to purchase exclusively at mychiandme.co.uk.
            </p>
            <a
              href={SHOP_URL}
              className="footer__shop-link"
              onClick={() => trackOutboundClick({ button_location: 'footer', destination_url: SHOP_URL })}
            >
              Shop at My Chi and Me
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6"/>
              </svg>
            </a>
          </div>

          <div>
            <h3 className="footer__heading">Shop</h3>
            <ul className="footer__list">
              <li><Link to="/collection" className="footer__link">All Products</Link></li>
              <li><Link to="/size-guide" className="footer__link">Size Guide</Link></li>
              <li><Link to="/delivery-returns" className="footer__link">Delivery &amp; Returns</Link></li>
              <li><Link to="/returns" className="footer__link">Returns Centre</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Discover</h3>
            <ul className="footer__list">
              <li><Link to="/our-story" className="footer__link">Our Story</Link></li>
              <li><Link to="/journal" className="footer__link">Handy Guides</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Legal</h3>
            <ul className="footer__list">
              <li><Link to="/privacy" className="footer__link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer__link">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} My Pup and Me
            </p>
          </div>

          <div className="footer__socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/mychiandme" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
