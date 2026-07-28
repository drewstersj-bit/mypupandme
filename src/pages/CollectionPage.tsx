import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import ProductCard from '@/components/ui/ProductCard'
import { products, patterns } from '@/data/products'
import './CollectionPage.css'

type FilterCategory = 'all' | 'harness' | 'lead'

export default function CollectionPage() {
  const [category, setCategory] = useState<FilterCategory>('all')
  const [pattern, setPattern] = useState<string>('all')

  const filtered = products.filter((p) => {
    if (category !== 'all' && p.category !== category) return false
    if (pattern !== 'all' && p.pattern !== pattern) return false
    return p.status === 'active'
  })

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'My Pup and Me — Full Collection',
    numberOfItems: products.filter((p) => p.status === 'active').length,
    itemListElement: products
      .filter((p) => p.status === 'active')
      .map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
          image: `https://mypupandme.co.uk${product.image}`,
          offers: {
            '@type': 'Offer',
            price: product.price.toFixed(2),
            priceCurrency: 'GBP',
            availability: 'https://schema.org/InStock',
            url: product.shopUrl,
          },
        },
      })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mypupandme.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Shop the Collection', item: 'https://mypupandme.co.uk/collection' },
    ],
  }

  return (
    <>
      <SEOHead
        title="Shop the Collection"
        description="Browse the My Pup and Me collection of luxury harnesses and matching leads for small dogs. Available in Blue Meadow Floral, White Vintage Floral, Brown Tartan and Classic Tweed."
        canonical="/collection"
      />
      <StructuredData data={itemListSchema} />
      <StructuredData data={breadcrumbSchema} />

      <main id="main-content" className="collection-page">
        <section className="section">
          <div className="container">
            <header className="collection-page__header">
              <h1>The Collection</h1>
              <p>Stylish harnesses and matching leads designed for puppies, toy breeds and small dogs.</p>
            </header>

            <div className="collection-page__filters" aria-label="Filter products">
              <div className="collection-page__filter-group">
                <label htmlFor="filter-category" className="collection-page__filter-label">Type</label>
                <select
                  id="filter-category"
                  className="collection-page__select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as FilterCategory)}
                >
                  <option value="all">All Products</option>
                  <option value="harness">Harnesses</option>
                  <option value="lead">Leads</option>
                </select>
              </div>
              <div className="collection-page__filter-group">
                <label htmlFor="filter-pattern" className="collection-page__filter-label">Pattern</label>
                <select
                  id="filter-pattern"
                  className="collection-page__select"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                >
                  <option value="all">All Patterns</option>
                  {patterns.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <p className="collection-page__count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

            <div className="collection-page__grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="collection-page__empty">No products match the current filters. Try adjusting your selection.</p>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
