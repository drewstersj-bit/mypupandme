import './BrandStatement.css'

export default function BrandStatement() {
  return (
    <section className="section brand-statement" aria-labelledby="brand-heading">
      <div className="container">
        <div className="brand-statement__grid">
          <div className="brand-statement__images">
            <div className="brand-statement__img brand-statement__img--main">
              <img
                src="/assets/lifestyle/Tweed_Zac_2_800x800.jpg"
                alt="Small dog wearing a Classic Tweed harness by My Pup and Me on a walk"
                width="800"
                height="800"
                loading="lazy"
              />
            </div>
            <div className="brand-statement__img brand-statement__img--detail">
              <img
                src="/assets/products/MPAM_meadow_floral_harness_close.jpg"
                alt="Close-up of harness padding, mesh lining and branded buckle"
                width="400"
                height="600"
                loading="lazy"
              />
            </div>
          </div>
          <div className="brand-statement__content">
            <h2 id="brand-heading">Properly proportioned for little dogs.</h2>
            <p>
              Small dogs are not simply smaller versions of large dogs. Their harnesses need thoughtful proportions, lightweight materials and comfortable adjustment. My Pup and Me was created to give puppies, toy breeds and little dogs a better choice - without losing any of the personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
