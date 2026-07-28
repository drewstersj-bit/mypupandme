import type { Product } from '@/data/products'
import { trackOutboundClick } from '@/utils/tracking'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

function getShortName(name: string): string {
  return name.replace('Luxury ', '').replace(' Dog ', ' ').replace(' by My Pup and Me', '')
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleClick = () => {
    trackOutboundClick({
      product_name: product.name,
      product_pattern: product.pattern,
      button_location: 'product_card',
      destination_url: product.shopUrl,
    })
  }

  return (
    <article className="product-card">
      <a href={product.shopUrl} className="product-card__link" aria-label={`Buy ${getShortName(product.name)} at My Chi and Me`} onClick={handleClick}>
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
          <span className="product-card__cta">
            Buy at My Chi and Me
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6"/>
            </svg>
          </span>
        </div>
      </a>
    </article>
  )
}
