import { Link } from 'react-router-dom'
import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import './JournalPage.css'

export const articles = [
  {
    slug: 'how-to-measure-a-small-dog-for-a-harness',
    title: 'How to Measure a Small Dog for a Harness',
    excerpt: 'A simple step-by-step guide to getting accurate chest and neck measurements for a comfortable harness fit.',
    date: '2024-12-01',
  },
  {
    slug: 'choosing-a-comfortable-harness-for-a-puppy',
    title: 'Choosing a Comfortable Harness for a Puppy',
    excerpt: 'What to look for when choosing your puppy\'s first harness, from weight to padding to adjustability.',
    date: '2024-11-15',
  },
  {
    slug: 'what-makes-a-good-harness-for-a-toy-breed',
    title: 'What Makes a Good Harness for a Toy Breed?',
    excerpt: 'Why toy breeds need more than a scaled-down version of a larger harness, and what makes a real difference.',
    date: '2024-11-01',
  },
]

export default function JournalPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mypupandme.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Little Dog Journal', item: 'https://mypupandme.co.uk/journal' },
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
              <p>Useful advice and inspiration for life with a small dog.</p>
            </header>

            <div className="journal-page__list">
              {articles.map((article) => (
                <article key={article.slug} className="journal-page__article">
                  <div className="journal-page__article-image" aria-hidden="true">
                    <span>Article image</span>
                  </div>
                  <div className="journal-page__article-content">
                    <h2>
                      <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p>{article.excerpt}</p>
                    <Link to={`/journal/${article.slug}`} className="journal-page__read-more">
                      Read Article →
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
