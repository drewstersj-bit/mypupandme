import { sizeGuide } from '@/data/products'
import Button from '../ui/Button'
import './ComfortSection.css'

export default function ComfortSection() {
  return (
    <section className="section comfort-section" aria-labelledby="comfort-heading">
      <div className="container">
        <div className="comfort-section__grid">
          <div className="comfort-section__visual">
            <img
              src="/assets/products/MPAM_tartan_harness_close.jpg"
              alt="Close-up of a Brown Tartan harness showing the air-mesh lining, buckle and webbing strap"
              className="comfort-section__img"
              width="600"
              height="450"
              loading="lazy"
            />
            <div className="comfort-section__features">
              <div className="comfort-section__feature">
                <span className="comfort-section__dot" aria-hidden="true" />
                <span>Soft padded chest</span>
              </div>
              <div className="comfort-section__feature">
                <span className="comfort-section__dot" aria-hidden="true" />
                <span>Breathable air-mesh lining</span>
              </div>
              <div className="comfort-section__feature">
                <span className="comfort-section__dot" aria-hidden="true" />
                <span>Lightweight adjustable fit</span>
              </div>
            </div>
          </div>
          <div className="comfort-section__sizing">
            <h2 id="comfort-heading">A comfortable fit starts with the right size.</h2>
            <p>Measure around the widest part of your dog's chest before ordering. Our harnesses are available in XXS, XS and S, making them suitable for many puppies, Chihuahuas and toy breeds.</p>
            <table className="comfort-section__table" aria-label="Harness sizes">
              <thead>
                <tr>
                  <th scope="col">Size</th>
                  <th scope="col">Chest</th>
                  <th scope="col">Neck</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((row) => (
                  <tr key={row.size}>
                    <td><strong>{row.size}</strong></td>
                    <td>{row.chest}</td>
                    <td>{row.neck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="comfort-section__tip">Between sizes? Go up for growing puppies. Breed references are guidance only—measurements determine the correct fit.</p>
            <Button to="/size-guide" variant="outline" size="md">
              Measure your dog in two minutes
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
