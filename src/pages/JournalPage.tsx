import { Link } from 'react-router-dom'
import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/config/site'
import { articles } from '@/data/articles'
import './JournalPage.css'

export default function JournalPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${SITE_URL}/journal` },
    ],
  }

  return (
    <>
      <SEOHead
        title="Small Dog Harness Advice & Guides | My Pup and Me"
        description="Practical advice on sizing, comfort and choosing the right harness for puppies, toy breeds and very small dogs."
        canonical="/journal"
      />
      <StructuredData data={breadcrumbSchema} />

      <main id="main-content" className="journal-page">
        <section className="section">
          <div className="container container--narrow">
            <header className="journal-page__header">
              <h1>Little Dog Journal</h1>
              <p>Practical advice on choosing, measuring and fitting harnesses for small dogs.</p>
              <Link to="/small-dog-harness-guide" className="journal-page__pillar-link">
                Read the complete small dog harness guide →
              </Link>
            </header>

            <div className="journal-page__list">
              {articles.map((article) => (
                <article key={article.slug} className="journal-page__article">
                  <div className="journal-page__article-content">
                    <span className="journal-page__category">{article.category}</span>
                    <h2>
                      <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p>{article.excerpt}</p>
                    <Link to={`/journal/${article.slug}`} className="journal-page__read-more">
                      Read guide →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
