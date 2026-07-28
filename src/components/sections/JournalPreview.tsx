import { Link } from 'react-router-dom'
import './JournalPreview.css'

const articles = [
  {
    slug: 'how-to-measure-a-small-dog-for-a-harness',
    title: 'How to Measure a Small Dog for a Harness',
    excerpt: 'A simple step-by-step guide to getting accurate chest and neck measurements for a comfortable harness fit.',
    image: 'Article image: measuring tape around a small dog',
  },
  {
    slug: 'choosing-a-comfortable-harness-for-a-puppy',
    title: 'Choosing a Comfortable Harness for a Puppy',
    excerpt: 'What to look for when choosing your puppy\'s first harness, from weight to padding to adjustability.',
    image: 'Article image: puppy wearing a lightweight harness',
  },
  {
    slug: 'what-makes-a-good-harness-for-a-toy-breed',
    title: 'What Makes a Good Harness for a Toy Breed?',
    excerpt: 'Why toy breeds need more than a scaled-down version of a larger harness, and what makes a real difference.',
    image: 'Article image: toy breed dog on a lead',
  },
]

export default function JournalPreview() {
  return (
    <section className="section journal-preview" aria-labelledby="journal-heading">
      <div className="container">
        <header className="journal-preview__header">
          <h2 id="journal-heading">Little Dog Journal</h2>
          <p>Useful advice and inspiration for life with a small dog.</p>
        </header>
        <div className="journal-preview__grid">
          {articles.map((article) => (
            <article key={article.slug} className="journal-card">
              <div className="journal-card__image" role="img" aria-label={article.image}>
                <span className="journal-card__image-placeholder">{article.image}</span>
              </div>
              <div className="journal-card__body">
                <h3 className="journal-card__title">{article.title}</h3>
                <p className="journal-card__excerpt">{article.excerpt}</p>
                <Link to={`/journal/${article.slug}`} className="journal-card__link">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
