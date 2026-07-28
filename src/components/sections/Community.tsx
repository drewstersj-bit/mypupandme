import './Community.css'

const placeholders = [
  { id: 1, label: 'Portrait: small dog in harness', large: true },
  { id: 2, label: 'Puppy on walk', large: false },
  { id: 3, label: 'Harness close-up', large: false },
  { id: 4, label: 'Dog and owner', large: false },
]

export default function Community() {
  return (
    <section className="section community" aria-labelledby="community-heading">
      <div className="container">
        <header className="community__header">
          <h2 id="community-heading">Little dogs. Big personalities.</h2>
          <p>Real dogs wearing the collection.</p>
        </header>
        <div className="community__grid">
          {placeholders.map((item) => (
            <div key={item.id} className="community__item">
              <div className={`community__placeholder ${item.id % 2 === 0 ? 'community__placeholder--dark' : ''}`} role="img" aria-label={item.label}>
                <span className="community__placeholder-text">{item.label}</span>
                {item.id === 1 && (
                  <svg className="community__heart" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 18s-7-4.5-7-10.5C3 4.5 5.5 2 8.5 2c1.5 0 2.7.8 3 1.2.3-.4 1.5-1.2 3-1.2C17.5 2 20 4.5 20 7.5 20 13.5 10 18 10 18z" fill="#ff0090" transform="translate(-3,-1) scale(0.9)"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="community__cta"
        >
          Follow our adventures →
        </a>
      </div>
    </section>
  )
}
