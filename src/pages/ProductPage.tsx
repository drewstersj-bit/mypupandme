import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import './ProductPage.css'

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? products.find((p) => p.slug === slug) : null
  const [selectedSize, setSelectedSize] = useState('')
  const { addItem } = useCart()

  if (!product) {
    return (
      <main id="main-content" className="product-page">
        <div className="section container">
          <h1>Product Not Found</h1>
          <p>Sorry, this product could not be found.</p>
          <Button to="/collection" variant="primary" size="md">Back to Collection</Button>
        </div>
      </main>
    )
  }

  const matchingProduct = product.matchingProduct ? getProductById(product.matchingProduct) : null

  const handleAddToBag = () => {
    if (product.sizes.length > 0 && !selectedSize) return
    addItem({
      productId: product.id,
      name: product.name.replace('Luxury ', ''),
      pattern: product.pattern,
      size: selectedSize || 'One Size',
      price: product.price,
      image: product.image,
    })
  }

  return (
    <>
      <SEOHead
        title={`${product.name} | My Pup and Me`}
        description={product.shortDescription}
        canonical={`/product/${product.slug}`}
      />

      <main id="main-content" className="product-page">
        <section className="section">
          <div className="container">
            <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/collection">Collection</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{product.name.replace('Luxury ', '')}</span>
            </nav>

            <div className="product-page__grid">
              <div className="product-page__images">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="product-page__main-image"
                  width="600"
                  height="750"
                />
              </div>

              <div className="product-page__info">
                <span className="product-page__pattern">{product.pattern}</span>
                <h1 className="product-page__title">{product.name.replace('Luxury ', '')}</h1>
                <p className="product-page__price">£{product.price.toFixed(2)}</p>
                <p className="product-page__description">{product.shortDescription}</p>

                {product.sizes.length > 0 && (
                  <div className="product-page__sizes">
                    <label className="product-page__sizes-label">
                      Size
                      <Link to="/size-guide" className="product-page__size-guide-link">Size guide</Link>
                    </label>
                    <div className="product-page__size-options">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          className={`product-page__size-btn ${selectedSize === size ? 'product-page__size-btn--active' : ''}`}
                          onClick={() => setSelectedSize(size)}
                          aria-pressed={selectedSize === size}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  className="btn btn--primary btn--lg product-page__add-btn"
                  onClick={handleAddToBag}
                  disabled={product.sizes.length > 0 && !selectedSize}
                >
                  {product.sizes.length > 0 && !selectedSize ? 'Select a size' : 'Add to Bag'}
                </button>

                <div className="product-page__features">
                  <h3>Details</h3>
                  <ul>
                    {product.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                {matchingProduct && (
                  <div className="product-page__matching">
                    <h3>Complete the look</h3>
                    <Link to={`/product/${matchingProduct.slug}`} className="product-page__matching-link">
                      <img src={matchingProduct.image} alt={matchingProduct.imageAlt} width="64" height="80" />
                      <div>
                        <p>{matchingProduct.name.replace('Luxury ', '')}</p>
                        <span>£{matchingProduct.price.toFixed(2)}</span>
                      </div>
                    </Link>
                  </div>
                )}

                <div className="product-page__fulfilment">
                  <p>Shipping and returns handled by My Chi and Me</p>
                  <p>Secure payment via PayPal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile sticky Add to Bag */}
      <div className="product-page__sticky-bar">
        <span className="product-page__sticky-price">£{product.price.toFixed(2)}</span>
        <button
          className="btn btn--primary btn--md"
          onClick={handleAddToBag}
          disabled={product.sizes.length > 0 && !selectedSize}
        >
          {product.sizes.length > 0 && !selectedSize ? 'Select size' : 'Add to Bag'}
        </button>
      </div>
    </>
  )
}
