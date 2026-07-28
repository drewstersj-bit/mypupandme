import Button from '../ui/Button'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__container container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 18s-7-4.5-7-10.5C3 4.5 5.5 2 8.5 2c1.5 0 2.7.8 3 1.2.3-.4 1.5-1.2 3-1.2C17.5 2 20 4.5 20 7.5 20 13.5 10 18 10 18z" fill="#F20D19" transform="translate(-3,-1) scale(0.9)"/>
            </svg>
            Designed for little dogs
          </span>
          <h1 id="hero-heading" className="hero__heading">
            Little harnesses.<br />Big personality.
          </h1>
          <p className="hero__subheading">
            Lightweight, comfortable harnesses created for puppies, toy breeds and very small dogs—with distinctive prints and matching leads for beautifully coordinated walks.
          </p>
          <div className="hero__ctas">
            <a
              href={SHOP_URL}
              className="btn btn--primary btn--lg"
              onClick={() => trackOutboundClick({ button_location: 'hero_primary', destination_url: SHOP_URL })}
            >
              Shop at My Chi and Me
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6"/>
              </svg>
            </a>
            <Button to="/size-guide" variant="outline" size="lg">
              Find Their Size
            </Button>
          </div>
          <p className="hero__cta-note">You'll be taken to our sister website to complete your purchase securely.</p>
          <p className="hero__trust-line">Available in XXS–S • UK small-dog specialists • Matching leads available</p>
        </div>
        <div className="hero__image-wrap">
          <div className="hero__image-fallback">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="1" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="2"/>
              <path d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 18l5-5 3 3 4-4 8 8"/>
            </svg>
            <span>Hero lifestyle image<br/>Small dog wearing harness</span>
          </div>
        </div>
      </div>
    </section>
  )
}
