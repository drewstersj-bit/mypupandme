import type { Product } from '@/data/products'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

function getShortName(name: string): string {
  return name.replace('Luxury ', '').replace(' Dog ', ' ').replace(' by My Pup and Me', '')
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <a href={product.shopUrl} target="_blank" rel="noopener noreferrer" className="product-card__link" aria-label={`View ${product.name} on shop`}>
        <div className="product-card__image-wrap">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="product-card__image"
            loading="lazy"
            width="400"
            height="500"
          />
          {product.matchingProduct && product.category === 'harness' && (
            <span className="product-card__badge">+ Matching Lead</span>
          )}
        </div>
        <div className="product-card__body">
          <h3 className="product-card__title">{getShortName(product.name)}</h3>
          <div className="product-card__meta">
            <span className="product-card__price">£{product.price.toFixed(2)}</span>
            {product.sizes.length > 0 && (
              <span className="product-card__sizes">{product.sizes.join(' / ')}</span>
            )}
          </div>
        </div>
      </a>
    </article>
  )
}
