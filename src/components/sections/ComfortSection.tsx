import './ComfortSection.css'

const features = [
  { title: 'Soft padded chest panel', description: 'Gentle cushioning against the chest for day-long comfort.' },
  { title: 'Breathable air-mesh lining', description: 'Keeps small dogs cool during walks and everyday adventures.' },
  { title: 'Adjustable silky webbing strap', description: 'Easy to fit with a secure, comfortable adjustment.' },
  { title: 'Secure branded buckle', description: 'Reliable fastening with a My Pup and Me branded finish.' },
  { title: 'Reinforced construction', description: 'Durable seams and materials built to last.' },
  { title: 'Anodised metal D-ring', description: 'Lightweight and strong lead attachment point.' },
  { title: 'Soft edge binding', description: 'No rough edges against your dog\'s coat and skin.' },
  { title: 'Lightweight design', description: 'Barely noticeable for small and lightweight dogs.' },
]

export default function ComfortSection() {
  return (
    <section className="section section--white comfort-section" aria-labelledby="comfort-heading">
      <div className="container">
        <header className="comfort-section__header">
          <h2 id="comfort-heading">Comfort and Construction</h2>
          <p>Every detail considered for dogs who deserve a harness built to their proportions.</p>
        </header>
        <div className="comfort-section__grid">
          {features.map((feature) => (
            <div key={feature.title} className="comfort-section__item">
              <svg className="comfort-section__icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="9" fill="none" stroke="var(--color-sage)" strokeWidth="1.5"/>
                <path d="M6 10l3 3 5-5" fill="none" stroke="var(--color-sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h3 className="comfort-section__title">{feature.title}</h3>
                <p className="comfort-section__desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
