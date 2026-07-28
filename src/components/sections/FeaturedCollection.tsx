import { getFeaturedHarnesses } from '@/data/products'
import ProductCard from '../ui/ProductCard'
import './FeaturedCollection.css'

export default function FeaturedCollection() {
  const featured = getFeaturedHarnesses()

  return (
    <section id="collection" className="section featured-collection" aria-labelledby="featured-heading">
      <div className="container">
        <header className="featured-collection__header">
          <h2 id="featured-heading">The Collection</h2>
          <p>Four beautifully designed harnesses, each with a matching lead. Perfect for puppies, toy breeds and small dogs.</p>
        </header>
        <div className="featured-collection__grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
