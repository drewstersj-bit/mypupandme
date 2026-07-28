import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for could not be found."
      />

      <main id="main-content" className="not-found-page">
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>Page Not Found</h1>
            <p className="not-found-page__message">
              Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
            </p>
            <div className="not-found-page__ctas">
              <Button to="/" variant="primary" size="lg">
                Go Home
              </Button>
              <Button to="/collection" variant="outline" size="lg">
                Shop the Collection
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
