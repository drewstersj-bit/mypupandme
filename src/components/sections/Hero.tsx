import Button from '../ui/Button'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__image-bg">
        <img
          src="/assets/lifestyle/Meadow_Floral_Izzy_5_800x800.jpg"
          alt="Small dog wearing a My Pup and Me Blue Meadow Floral harness"
          className="hero__bg-img"
          width="800"
          height="800"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__container container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 18s-7-4.5-7-10.5C3 4.5 5.5 2 8.5 2c1.5 0 2.7.8 3 1.2.3-.4 1.5-1.2 3-1.2C17.5 2 20 4.5 20 7.5 20 13.5 10 18 10 18z" fill="#ff0090" transform="translate(-3,-1) scale(0.9)"/>
            </svg>
            Designed for little dogs
          </span>
          <h1 id="hero-heading" className="hero__heading">
            Little harnesses.<br />Big personality.
          </h1>
          <p className="hero__subheading">
            Lightweight, comfortable harnesses created for puppies, toy breeds and very small dogs—with distinctive prints and matching leads.
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
          <p className="hero__trust-line">Available in XXS–S • UK small-dog specialists • Matching leads available</p>
        </div>
      </div>
    </section>
  )
}
