import { Link } from 'react-router-dom'
import './JournalPreview.css'

const articles = [
  {
    slug: 'how-to-measure-a-small-dog-for-a-harness',
    title: 'How to Measure Your Dog for a Harness',
    label: 'Guide',
  },
  {
    slug: 'choosing-a-comfortable-harness-for-a-puppy',
    title: 'Choosing a Harness for a Puppy',
    label: 'Guide',
  },
  {
    slug: 'best-harness-for-a-toy-breed',
    title: 'What Makes a Good Toy-Breed Harness?',
    label: 'Guide',
  },
]

function GuideIcon() {
  return (
    <svg className="journal-card__icon" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M16 24s-5.5-3.5-5.5-8.2c0-2.4 1.8-4.3 4-4.3 1.1 0 2 .6 2.2.9.2-.3 1.1-.9 2.2-.9 2.2 0 4 1.9 4 4.3 0 4.7-5.5 8.2-5.5 8.2z" fill="#ff0090" opacity="0.9"/>
    </svg>
  )
}

export default function JournalPreview() {
  return (
    <section className="section journal-preview" aria-labelledby="journal-heading">
      <div className="container">
        <header className="journal-preview__header">
          <h2 id="journal-heading">Handy Guides</h2>
        </header>
        <div className="journal-preview__grid">
          {articles.map((article) => (
            <Link key={article.slug} to={`/journal/${article.slug}`} className="journal-card">
              <div className="journal-card__icon-wrap">
                <GuideIcon />
              </div>
              <p className="journal-card__label">{article.label}</p>
              <h3 className="journal-card__title">{article.title}</h3>
              <span className="journal-card__read">Read guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
