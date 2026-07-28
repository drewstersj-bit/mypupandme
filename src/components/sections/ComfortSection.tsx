import { sizeGuide } from '@/data/products'
import Button from '../ui/Button'
import './ComfortSection.css'

export default function ComfortSection() {
  return (
    <section className="section comfort-section" aria-labelledby="comfort-heading">
      <div className="container">
        <div className="comfort-section__grid">
          <div className="comfort-section__visual">
            <div className="comfort-section__img-fallback">
              <span>Product close-up<br/>Mesh, buckle and webbing detail</span>
            </div>
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
            <h2 id="comfort-heading">Fit and comfort.</h2>
            <p>Sized from XXS for the smallest dogs. Measure your pup's chest and neck to find the right fit.</p>
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
            <p className="comfort-section__tip">Between sizes? Go up for growing puppies.</p>
            <Button to="/size-guide" variant="outline" size="md">
              View Size Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
