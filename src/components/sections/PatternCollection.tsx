import { useState } from 'react'
import { Link } from 'react-router-dom'
import { patterns, getProductsByPattern } from '@/data/products'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './PatternCollection.css'

export default function PatternCollection() {
  const [activePattern, setActivePattern] = useState(patterns[0])
  const patternProducts = getProductsByPattern(activePattern)
  const harness = patternProducts.find((p) => p.category === 'harness')

  return (
    <section className="section pattern-collection" aria-labelledby="pattern-heading">
      <div className="container">
        <header className="pattern-collection__header">
          <h2 id="pattern-heading">Four designs. Your pick.</h2>
          <p>Each available as a harness with a matching lead.</p>
        </header>

        <div className="pattern-collection__selector" role="tablist" aria-label="Select a pattern">
          {patterns.map((pattern) => (
            <button
              key={pattern}
              role="tab"
              aria-selected={activePattern === pattern}
              aria-controls="pattern-display"
              className={`pattern-collection__tab ${activePattern === pattern ? 'pattern-collection__tab--active' : ''}`}
              onClick={() => setActivePattern(pattern)}
            >
              {pattern}
            </button>
          ))}
        </div>

        <div id="pattern-display" role="tabpanel" className="pattern-collection__display" aria-label={`${activePattern} harness preview`}>
          {harness && (
            <>
              <img
                src={harness.image}
                alt={harness.imageAlt}
                className="pattern-collection__image"
                width="400"
                height="400"
                loading="lazy"
              />
              <div className="pattern-collection__info">
                <h3>{harness.name.replace('Luxury ', '')}</h3>
                <p>{harness.shortDescription}</p>
                <p className="pattern-collection__price">£{harness.price.toFixed(2)}</p>
                <Link to={`/product/${harness.slug}`} className="btn btn--primary btn--md">
                  Buy Here
                </Link>
                <a
                  href={SHOP_URL}
                  className="pattern-collection__wider-link"
                  onClick={() => trackOutboundClick({ button_location: 'pattern_wider', destination_url: SHOP_URL })}
                >
                  Shop a wider range at My Chi and Me
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2v6"/>
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
