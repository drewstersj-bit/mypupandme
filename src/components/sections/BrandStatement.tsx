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
            <h2 id="brand-heading">Properly proportioned for little dogs.</h2>
            <p>
              Small dogs are not simply smaller versions of large dogs. Their harnesses need thoughtful proportions, lightweight materials and comfortable adjustment. My Pup and Me was created to give puppies, toy breeds and little dogs a better choice—without losing any of the personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
