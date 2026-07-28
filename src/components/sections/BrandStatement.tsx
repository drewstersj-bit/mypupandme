import './BrandStatement.css'

export default function BrandStatement() {
  return (
    <section className="section brand-statement" aria-labelledby="brand-heading">
      <div className="container">
        <div className="brand-statement__grid">
          <img
            src="/assets/lifestyle/brand-statement.jpg"
            alt="Small dog enjoying a walk wearing a My Pup and Me harness"
            className="brand-statement__image"
            width="600"
            height="450"
            loading="lazy"
          />
          <div className="brand-statement__content">
            <h2 id="brand-heading">Made for their size. Designed for their personality.</h2>
            <p>
              Small dogs deserve walking accessories that feel comfortable, fit properly and look every bit as distinctive as they are. My Pup and Me brings thoughtful proportions, dependable construction and beautifully selected fabrics together in one growing collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
