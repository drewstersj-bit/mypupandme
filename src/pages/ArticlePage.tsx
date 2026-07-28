import { useParams, Link } from 'react-router-dom'
import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import Button from '@/components/ui/Button'
import { articles } from './JournalPage'
import './ArticlePage.css'

interface ArticleContent {
  title: string
  excerpt: string
  body: string[]
}

const articleContent: Record<string, ArticleContent> = {
  'how-to-measure-a-small-dog-for-a-harness': {
    title: 'How to Measure a Small Dog for a Harness',
    excerpt: 'A simple step-by-step guide to getting accurate chest and neck measurements for a comfortable harness fit.',
    body: [
      'Getting the right harness size for a small dog starts with accurate measurements. Unlike larger breeds where a slightly loose harness might still work, small dogs and puppies need a precise fit to stay comfortable and secure.',
      'You will need a soft measuring tape—the kind used for sewing. If you don\'t have one, a piece of string and a ruler will work.',
      'For the chest measurement, wrap the tape around the widest part of your dog\'s ribcage, just behind the front legs. Keep the tape snug but not tight—you should be able to slide one finger beneath it.',
      'For the neck measurement, measure around the base of the neck, where a collar naturally sits. Again, leave room for one finger between the tape and your dog\'s skin.',
      'Once you have both measurements, check them against the size guide. If your dog falls between two sizes, the larger size is usually the better choice, particularly for puppies who are still growing.',
      'Try to measure your dog when they are standing calmly. If your dog won\'t stay still, a few treats can help keep them in place long enough to get an accurate reading.',
    ],
  },
  'choosing-a-comfortable-harness-for-a-puppy': {
    title: 'Choosing a Comfortable Harness for a Puppy',
    excerpt: 'What to look for when choosing your puppy\'s first harness, from weight to padding to adjustability.',
    body: [
      'A puppy\'s first harness is an important purchase. Get it right and your puppy will be happy and confident on walks from the start. Get it wrong and you could be dealing with a pup that refuses to move or constantly tries to wriggle free.',
      'The most important factor for a puppy harness is weight. Puppies are sensitive to anything that feels heavy or restrictive. Look for harnesses described as lightweight, and check that the buckles and clips are proportionate to the dog\'s size.',
      'Padding matters too. A padded chest panel distributes pressure evenly and prevents the harness from digging in. Air-mesh lining helps keep a puppy cool and prevents overheating during energetic walks.',
      'Adjustability is essential for a growing puppy. A harness with an adjustable strap means you can adapt the fit as your puppy grows, without needing to buy a new harness every few weeks.',
      'The over-the-head style of harness—where the head goes through a loop and the harness clips at the side or underneath—is often easier to put on a wriggling puppy than a step-in design.',
      'Finally, consider the fabrics. Soft webbing straps and gentle edge binding are kinder to a puppy\'s delicate coat and skin than rough nylon or hard plastic edges.',
    ],
  },
  'what-makes-a-good-harness-for-a-toy-breed': {
    title: 'What Makes a Good Harness for a Toy Breed?',
    excerpt: 'Why toy breeds need more than a scaled-down version of a larger harness, and what makes a real difference.',
    body: [
      'Toy breeds present unique challenges when it comes to finding the right harness. Dogs like Chihuahuas, Papillons, Toy Poodles and Russian Toys often weigh less than 3kg, which means every gram of harness weight matters.',
      'Many harnesses marketed for small dogs are simply scaled-down versions of products designed for medium or large breeds. The proportions may be smaller, but the materials—thick nylon, heavy metal hardware, bulky buckles—remain the same. On a 2kg dog, this can feel like wearing a heavy backpack.',
      'A genuinely good toy-breed harness uses materials chosen specifically for small dogs. Lightweight webbing, anodised aluminium rather than heavy steel, and compact buckles all make a tangible difference to comfort.',
      'The fit is equally important. Toy breeds tend to have different body proportions compared to larger dogs. A good harness should sit behind the front legs without rubbing in the armpit area, and the chest panel should be wide enough to distribute pressure without overwhelming the dog\'s small frame.',
      'Breathability matters too. Toy breeds can overheat more easily than larger dogs, so a harness with air-mesh lining helps regulate temperature during walks.',
      'Finally, look for reinforced construction at stress points—particularly around the D-ring where the lead attaches. Just because a harness is lightweight doesn\'t mean it should compromise on durability.',
    ],
  },
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? articleContent[slug] : null
  const meta = articles.find((a) => a.slug === slug)

  if (!article || !meta) {
    return (
      <main id="main-content" className="article-page">
        <div className="section container container--narrow">
          <h1>Article Not Found</h1>
          <p>Sorry, this article could not be found.</p>
          <Button to="/journal" variant="primary" size="md">Back to Journal</Button>
        </div>
      </main>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: meta.date,
    publisher: {
      '@type': 'Organization',
      name: 'My Pup and Me',
      url: 'https://mypupandme.co.uk',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mypupandme.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: 'https://mypupandme.co.uk/journal' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://mypupandme.co.uk/journal/${slug}` },
    ],
  }

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        canonical={`/journal/${slug}`}
        article
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <main id="main-content" className="article-page">
        <article className="section">
          <div className="container container--narrow">
            <nav className="article-page__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/journal">Journal</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{article.title}</span>
            </nav>

            <h1>{article.title}</h1>

            <div className="article-page__body">
              {article.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="article-page__ctas">
              <Button to="/size-guide" variant="primary" size="md">
                View the Size Guide
              </Button>
              <Button to="/collection" variant="outline" size="md">
                Shop the Collection
              </Button>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
