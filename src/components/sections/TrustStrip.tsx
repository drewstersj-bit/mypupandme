import './TrustStrip.css'

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s-6-4.5-8-9.5A5 5 0 0 1 9 7c1.5 0 2.5.8 3 1.5.5-.7 1.5-1.5 3-1.5a5 5 0 0 1 5 5.5c-2 5-8 9.5-8 9.5z"/>
      </svg>
    ),
    title: 'Designed for little dogs',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12h.01M8 12h.01M12 12h.01M16 12h.01M20 12h.01"/>
        <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      </svg>
    ),
    title: 'Lightweight and breathable',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    title: 'Adjustable for a secure fit',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
        <rect x="3" y="3" width="18" height="18" rx="3" ry="3"/>
      </svg>
    ),
    title: 'Matching leads available',
  },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Product benefits">
      <div className="container">
        <ul className="trust-strip__list">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="trust-strip__item">
              <span className="trust-strip__icon">{benefit.icon}</span>
              <span className="trust-strip__text">{benefit.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
