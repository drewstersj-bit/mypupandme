import { useState, useEffect, useCallback } from 'react'
import './BannerCarousel.css'

const banners = [
  {
    src: '/assets/banners/my_pup_and_me_banner.jpg',
    alt: 'My Pup and Me - harnesses designed for little dogs',
  },
  {
    src: '/assets/banners/royal_mail.jpg',
    alt: 'Delivered by Royal Mail',
  },
]

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="banner-carousel" aria-label="Promotional banners" aria-roledescription="carousel">
      <div className="banner-carousel__track">
        {banners.map((banner, i) => (
          <div
            key={banner.src}
            className={`banner-carousel__slide ${i === current ? 'banner-carousel__slide--active' : ''}`}
            aria-hidden={i !== current}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${banners.length}`}
          >
            <img
              src={banner.src}
              alt={banner.alt}
              className="banner-carousel__image"
              width="1320"
              height="200"
              loading={i === 0 ? undefined : 'lazy'}
            />
          </div>
        ))}
      </div>
      <div className="banner-carousel__dots" role="tablist" aria-label="Banner navigation">
        {banners.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Show banner ${i + 1}`}
            className={`banner-carousel__dot ${i === current ? 'banner-carousel__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
