import { getFeaturedHarnesses } from '@/data/products'
import ProductCard from '../ui/ProductCard'
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
          <p className="featured-collection__note">Purchases are completed securely through My Chi and Me, our sister website and small-dog specialist.</p>
          <a
            href={SHOP_URL}
            className="btn btn--outline btn--md"
            onClick={() => trackOutboundClick({ button_location: 'featured_collection_cta', destination_url: SHOP_URL })}
          >
            Shop the full collection at My Chi and Me
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
