import { sizeGuide } from '@/data/products'
import Button from '../ui/Button'
import './SizeGuidePreview.css'

export default function SizeGuidePreview() {
  return (
    <section className="section size-guide-preview" aria-labelledby="size-heading">
      <div className="container">
        <div className="size-guide-preview__grid">
          <div className="size-guide-preview__content">
            <h2 id="size-heading">Find the Perfect Fit</h2>
            <p>
              Measure around the widest part of your dog's chest and around the base of the neck where the collar naturally sits.
            </p>
            <div className="size-guide-preview__table-wrap">
              <table className="size-guide-preview__table" aria-label="Harness size guide">
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
            </div>
            <p className="size-guide-preview__tip">
              If your puppy is between sizes, choose the larger size to allow room for comfortable adjustment and growth.
            </p>
            <Button to="/size-guide" variant="outline" size="md">
              View the Full Size Guide
            </Button>
          </div>
          <div className="size-guide-preview__illustration">
            <div className="size-guide-preview__placeholder" aria-label="Illustration showing how to measure a small dog for a harness">
              <svg width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
                <ellipse cx="100" cy="120" rx="50" ry="35" fill="none" stroke="var(--color-warm-grey)" strokeWidth="1.5" strokeDasharray="6 3"/>
                <ellipse cx="80" cy="80" rx="25" ry="20" fill="none" stroke="var(--color-warm-grey)" strokeWidth="1.5"/>
                <path d="M95 95c10 5 15 20 15 25" fill="none" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="4 2"/>
                <text x="125" y="120" fontSize="10" fill="var(--color-warm-grey)">Chest</text>
                <text x="95" y="75" fontSize="10" fill="var(--color-warm-grey)">Neck</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
