import { useState } from 'react'
import { patterns, getProductsByPattern } from '@/data/products'
import './PatternCollection.css'

export default function PatternCollection() {
  const [activePattern, setActivePattern] = useState(patterns[0])
  const patternProducts = getProductsByPattern(activePattern)
  const harness = patternProducts.find((p) => p.category === 'harness')

  return (
    <section className="section section--white pattern-collection" aria-labelledby="pattern-heading">
      <div className="container">
        <header className="pattern-collection__header">
          <h2 id="pattern-heading">Four Beautiful Designs</h2>
          <p>Each pattern available as a harness with a matching lead for a coordinated look.</p>
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
            <div className="pattern-collection__preview">
              <img
                src={harness.image}
                alt={harness.imageAlt}
                className="pattern-collection__image"
                width="400"
                height="400"
                loading="lazy"
              />
              <div className="pattern-collection__info">
                <h3>{harness.name}</h3>
                <p>{harness.shortDescription}</p>
                <p className="pattern-collection__price">£{harness.price.toFixed(2)}</p>
                <a
                  href={harness.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--md"
                >
                  Shop This Design
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
