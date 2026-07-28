import SEOHead from '@/components/seo/SEOHead'
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/StructuredData'
import StructuredData from '@/components/seo/StructuredData'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import FeaturedCollection from '@/components/sections/FeaturedCollection'
import BrandStatement from '@/components/sections/BrandStatement'
import ComfortSection from '@/components/sections/ComfortSection'
import PatternCollection from '@/components/sections/PatternCollection'
import Community from '@/components/sections/Community'
import JournalPreview from '@/components/sections/JournalPreview'
import PurchaseReassurance from '@/components/sections/PurchaseReassurance'
import EmailSignup from '@/components/sections/EmailSignup'
import { getFeaturedHarnesses } from '@/data/products'

export default function HomePage() {
  const featured = getFeaturedHarnesses()

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'My Pup and Me Harness Collection',
    numberOfItems: featured.length,
    itemListElement: featured.map((product, index) => ({
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

  return (
    <>
      <SEOHead
        title="Home"
        description="Lightweight harnesses and matching leads designed for puppies, toy breeds and very small dogs. Four distinctive prints, sizes XXS to S. Shop at My Chi and Me."
        canonical="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <StructuredData data={productListSchema} />

      <main id="main-content">
        <Hero />
        <TrustStrip />
        <FeaturedCollection />
        <BrandStatement />
        <ComfortSection />
        <PatternCollection />
        <Community />
        <JournalPreview />
        <PurchaseReassurance />
        <EmailSignup />
      </main>
    </>
  )
}
