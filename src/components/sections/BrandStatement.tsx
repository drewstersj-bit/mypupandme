import './BrandStatement.css'

export default function BrandStatement() {
  return (
    <section className="section brand-statement" aria-labelledby="brand-heading">
      <div className="container">
        <div className="brand-statement__grid">
          <div className="brand-statement__images">
            <div className="brand-statement__img brand-statement__img--main">
              <div className="brand-statement__img-fallback">
                <span>Lifestyle image<br/>Small dog on a walk</span>
              </div>
            </div>
            <div className="brand-statement__img brand-statement__img--detail">
              <div className="brand-statement__img-fallback brand-statement__img-fallback--dark">
                <span>Detail crop<br/>Harness close-up</span>
              </div>
            </div>
          </div>
          <div className="brand-statement__content">
            <h2 id="brand-heading">Designed around little dogs.</h2>
            <p>
              Because the smallest dogs deserve more than scaled-down accessories. Our harnesses combine lightweight comfort, adjustable proportions and prints with real personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
