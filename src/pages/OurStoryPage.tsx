import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import Button from '@/components/ui/Button'
import './OurStoryPage.css'

export default function OurStoryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mypupandme.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Our Story', item: 'https://mypupandme.co.uk/our-story' },
    ],
  }

  return (
    <>
      <SEOHead
        title="Harnesses Designed for Little Dogs — Our Story | My Pup and Me"
        description="Why we created My Pup and Me: lightweight, properly proportioned harnesses for puppies, toy breeds and very small dogs who deserve more than scaled-down accessories."
        canonical="/our-story"
      />
      <StructuredData data={breadcrumbSchema} />

      <main id="main-content" className="our-story-page">
        <section className="section">
          <div className="container container--narrow">
            <h1>Our Story</h1>

            <div className="our-story-page__content">
              <p className="our-story-page__lead">
                My Pup and Me grew from a simple belief: small dogs deserve walking accessories that are designed for them from the start—not just scaled-down versions of products built for bigger breeds.
              </p>

              <div className="our-story-page__image-placeholder" aria-label="The My Pup and Me team with small dogs">
                <span>Brand lifestyle image</span>
              </div>

              <h2>Why We Started</h2>
              <p>
                As small-dog owners ourselves, we noticed that many harnesses on the market were heavy, bulky or simply too large in their proportions for toy breeds and puppies. Straps slipped, buckles dug in and many designs looked like they belonged on a much larger dog.
              </p>
              <p>
                We wanted to create something that felt comfortable, fitted properly and looked beautiful on genuinely small dogs.
              </p>

              <h2>What We Believe</h2>
              <p>
                Every product in the My Pup and Me range is designed with the size, comfort and personality of little dogs in mind. We use lightweight fabrics, soft padding, gentle edge binding and thoughtful proportions to create a harness that a small dog can wear all day without it weighing them down.
              </p>
              <p>
                We also believe that walking accessories should look as stylish as they feel. Each harness comes in a distinctive fabric pattern with a matching lead so your dog can step out in coordinated style.
              </p>

              <h2>A Growing Collection</h2>
              <p>
                We launched with four signature patterns and a carefully considered size range from XXS to Small. This is just the beginning. We have plans to grow the collection with new patterns, new products and useful accessories for life with a little dog.
              </p>

              <div className="our-story-page__note">
                <p>My Pup and Me is brought to you by the team behind <a href="https://mychiandme.co.uk" target="_blank" rel="noopener noreferrer">My Chi and Me</a>, a trusted UK retailer for small-dog owners.</p>
              </div>

              <div className="our-story-page__cta">
                <Button to="/collection" variant="primary" size="lg">
                  Shop the Collection
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
