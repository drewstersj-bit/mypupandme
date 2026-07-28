import { getFeaturedHarnesses } from '@/data/products'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'
import './FeaturedCollection.css'

export default function FeaturedCollection() {
  const featured = getFeaturedHarnesses()

  return (
    <section id="collection" className="section featured-collection" aria-labelledby="featured-heading">
      <div className="container">
        <header className="featured-collection__header">
          <h2 id="featured-heading">Made to be noticed.</h2>
          <p>Four distinctive prints. One lightweight fit created especially for little dogs.</p>
        </header>
        <div className="featured-collection__grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="featured-collection__cta">
          <Button to="/collection" variant="outline" size="md">
            Shop the collection
          </Button>
        </div>
      </div>
    </section>
  )
}
