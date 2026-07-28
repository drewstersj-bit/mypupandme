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
    slug: 'what-makes-a-good-harness-for-a-toy-breed',
    title: 'What Makes a Good Toy-Breed Harness?',
    label: 'Guide',
  },
]

export default function JournalPreview() {
  return (
    <section className="section journal-preview" aria-labelledby="journal-heading">
      <div className="container">
        <header className="journal-preview__header">
          <h2 id="journal-heading">From the journal</h2>
        </header>
        <div className="journal-preview__grid">
          {articles.map((article) => (
            <Link key={article.slug} to={`/journal/${article.slug}`} className="journal-card">
              <div className="journal-card__image">
                <span className="journal-card__image-placeholder">Article image</span>
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
