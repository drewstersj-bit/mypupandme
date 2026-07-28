import type { Product } from '@/data/products'
import Button from './Button'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product-card__image"
          loading="lazy"
          width="400"
          height="400"
        />
        {product.matchingProduct && (
          <span className="product-card__badge">Matching Lead Available</span>
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">£{product.price.toFixed(2)}</p>
        {product.sizes.length > 0 && (
          <p className="product-card__sizes">Sizes: {product.sizes.join(', ')}</p>
        )}
        <p className="product-card__description">{product.shortDescription}</p>
        <Button
          href={product.shopUrl}
          external
          variant="secondary"
          size="sm"
          ariaLabel={`View ${product.name} on shop`}
        >
          View Harness
        </Button>
      </div>
    </article>
  )
}
