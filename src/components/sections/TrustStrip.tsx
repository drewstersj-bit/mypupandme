import './TrustStrip.css'

const benefits = [
  'Designed for little dogs',
  'Lightweight comfort',
  'Sizes XXS–S',
  'Matching leads',
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Product benefits">
      <div className="container">
        <ul className="trust-strip__list">
          {benefits.map((benefit, i) => (
            <li key={benefit} className="trust-strip__item">
              {i > 0 && <span className="trust-strip__divider" aria-hidden="true" />}
              <span className="trust-strip__text">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
