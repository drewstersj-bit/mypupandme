import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import { sizeGuide } from '@/data/products'
import Button from '@/components/ui/Button'
import './SizeGuidePage.css'

export default function SizeGuidePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mypupandme.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Size Guide', item: 'https://mypupandme.co.uk/size-guide' },
    ],
  }

  return (
    <>
      <SEOHead
        title="Size Guide"
        description="Find the right harness size for your small dog. Sizing available in XXS, XS and S for puppies, toy breeds and small dogs with chest measurements from 20cm to 38cm."
        canonical="/size-guide"
      />
      <StructuredData data={breadcrumbSchema} />

      <main id="main-content" className="size-guide-page">
        <section className="section">
          <div className="container container--narrow">
            <h1>Size Guide</h1>
            <p className="size-guide-page__intro">
              Our harnesses are available in three sizes designed for puppies, toy breeds and small dogs.
              Getting the right fit ensures your dog is comfortable, safe and happy on every walk.
            </p>

            <div className="size-guide-page__table-wrap">
              <table className="size-guide-page__table" aria-label="Harness size chart">
                <thead>
                  <tr>
                    <th scope="col">Size</th>
                    <th scope="col">Chest Measurement</th>
                    <th scope="col">Neck Measurement</th>
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

            <h2>How to Measure</h2>
            <div className="size-guide-page__instructions">
              <div className="size-guide-page__step">
                <h3>Chest Measurement</h3>
                <p>Measure around the widest part of your dog's chest, just behind the front legs. Keep the tape snug but not tight.</p>
              </div>
              <div className="size-guide-page__step">
                <h3>Neck Measurement</h3>
                <p>Measure around the base of the neck where a collar would naturally sit. Leave room for one finger between the tape and your dog.</p>
              </div>
            </div>

            <div className="size-guide-page__tip">
              <p><strong>Between sizes?</strong> If your puppy is between sizes, choose the larger size to allow room for comfortable adjustment and growth.</p>
            </div>

            <div className="size-guide-page__illustration">
              <svg viewBox="0 0 300 200" width="300" height="200" aria-label="Illustration showing measurement points on a small dog" role="img">
                <ellipse cx="150" cy="130" rx="70" ry="40" fill="none" stroke="#737373" strokeWidth="1.5"/>
                <ellipse cx="110" cy="80" rx="35" ry="28" fill="none" stroke="#737373" strokeWidth="1.5"/>
                <path d="M135 100c15 8 20 25 20 30" fill="none" stroke="#F20D19" strokeWidth="2.5" strokeDasharray="6 3"/>
                <ellipse cx="150" cy="130" rx="70" ry="40" fill="none" stroke="#F20D19" strokeWidth="2.5" strokeDasharray="6 3"/>
                <text x="230" y="130" fontSize="12" fill="#999999" fontFamily="Inter, sans-serif">Chest</text>
                <text x="55" y="70" fontSize="12" fill="#999999" fontFamily="Inter, sans-serif">Neck</text>
              </svg>
            </div>

            <h2>Breeds That Suit Our Sizes</h2>
            <div className="size-guide-page__breeds">
              <div>
                <h3>XXS</h3>
                <p>Very small puppies, Chihuahuas, Russian Toys and similar tiny breeds.</p>
              </div>
              <div>
                <h3>XS</h3>
                <p>Toy Poodles, Papillons, Biewer Terriers, Maltese and young puppies of smaller breeds.</p>
              </div>
              <div>
                <h3>S</h3>
                <p>Yorkshire Terriers, Pomeranians, Miniature Dachshunds and larger puppies.</p>
              </div>
            </div>

            <div className="size-guide-page__cta">
              <Button to="/collection" variant="primary" size="lg">
                Shop the Collection
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
