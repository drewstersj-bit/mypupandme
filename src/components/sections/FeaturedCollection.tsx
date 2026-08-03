import { getFeaturedHarnesses } from '@/data/products'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './FeaturedCollection.css'

export default function FeaturedCollection() {
  const featured = getFeaturedHarnesses()

  return (
    <section id="collection" className="section featured-collection" aria-labelledby="featured-heading">
      <div className="container">
        <header className="featured-collection__header">
          <h2 id="featured-heading">Made for small dogs. Styled for big personalities.</h2>
          <p>Finding a harness for a very small dog should not mean compromising on comfort or style. Discover lightweight harnesses in four distinctive prints, with sizes starting at XXS and matching leads to complete the look.</p>
        </header>
        <div className="featured-collection__grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="featured-collection__footer">
          <Button to="/collection" variant="primary" size="md">
            Shop the Collection
          </Button>
          <a
            href={SHOP_URL}
            className="featured-collection__wider-link"
            onClick={() => trackOutboundClick({ button_location: 'featured_collection_wider', destination_url: SHOP_URL })}
          >
            Or shop a wider range of products at My Chi and Me
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
