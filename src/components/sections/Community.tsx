import './Community.css'

const placeholders = [
  { id: 1, label: 'Small dog wearing Blue Meadow Floral harness' },
  { id: 2, label: 'Toy breed puppy on a walk with matching lead' },
  { id: 3, label: 'Chihuahua wearing White Vintage Floral harness' },
  { id: 4, label: 'Pomeranian sporting Brown Tartan harness' },
  { id: 5, label: 'Yorkshire Terrier wearing Classic Tweed harness' },
  { id: 6, label: 'Small puppy enjoying outdoor adventures' },
]

export default function Community() {
  return (
    <section className="section community" aria-labelledby="community-heading">
      <div className="container">
        <header className="community__header">
          <h2 id="community-heading">For little dogs with big personalities.</h2>
        </header>
        <div className="community__grid">
          {placeholders.map((item) => (
            <div key={item.id} className="community__item">
              <div className="community__placeholder" role="img" aria-label={item.label}>
                <span className="community__placeholder-text">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="community__cta">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--md"
          >
            Follow Our Adventures
          </a>
        </div>
      </div>
    </section>
  )
}
