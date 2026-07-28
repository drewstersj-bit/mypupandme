export interface Article {
  slug: string
  title: string
  seoTitle: string
  description: string
  excerpt: string
  datePublished: string
  dateModified: string
  category: string
  relatedSlugs: string[]
  pillar: boolean
}

export const articles: Article[] = [
  {
    slug: 'best-harness-for-a-chihuahua',
    title: 'Best Harness for a Chihuahua',
    seoTitle: 'Best Harness for a Chihuahua | My Pup and Me',
    description: 'What to look for in a Chihuahua harness: lightweight materials, XXS sizing, secure buckles and comfortable padding. Practical buying guidance.',
    excerpt: 'Chihuahuas need genuinely lightweight harnesses with narrow straps and XXS chest sizing. Here is what to prioritise.',
    datePublished: '2025-01-10',
    dateModified: '2025-01-10',
    category: 'Breed Guide',
    relatedSlugs: ['best-harness-for-a-toy-breed', 'xxs-dog-harness-size-guide'],
    pillar: false,
  },
  {
    slug: 'how-to-measure-a-small-dog-for-a-harness',
    title: 'How to Measure a Small Dog for a Harness',
    seoTitle: 'How to Measure a Small Dog for a Harness | My Pup and Me',
    description: 'Step-by-step chest and neck measuring guide for puppies and small dogs. Includes common mistakes, tool tips and size chart.',
    excerpt: 'Accurate chest and neck measurements are the only reliable way to choose the right harness size for a small dog.',
    datePublished: '2024-12-01',
    dateModified: '2025-01-15',
    category: 'Size Guide',
    relatedSlugs: ['xxs-dog-harness-size-guide', 'how-should-a-puppy-harness-fit'],
    pillar: false,
  },
  {
    slug: 'how-should-a-puppy-harness-fit',
    title: 'How Should a Puppy Harness Fit?',
    seoTitle: 'How Should a Puppy Harness Fit? | My Pup and Me',
    description: 'A properly fitting puppy harness should be snug but not tight, with room for one finger beneath each strap. Learn the signs of a good and bad fit.',
    excerpt: 'A well-fitted puppy harness sits snugly without restricting breathing or rubbing at the armpits.',
    datePublished: '2025-01-05',
    dateModified: '2025-01-05',
    category: 'Fitting',
    relatedSlugs: ['how-to-measure-a-small-dog-for-a-harness', 'when-to-resize-a-puppy-harness'],
    pillar: false,
  },
  {
    slug: 'xxs-dog-harness-size-guide',
    title: 'XXS Dog Harness Size Guide',
    seoTitle: 'XXS Dog Harness Size Guide | My Pup and Me',
    description: 'Which dogs fit an XXS harness? Chest measurements, breed guidance and measuring tips for the smallest harness size.',
    excerpt: 'An XXS harness typically fits dogs with a chest measurement of 20–25 cm, including very small Chihuahuas and tiny puppies.',
    datePublished: '2025-01-12',
    dateModified: '2025-01-12',
    category: 'Size Guide',
    relatedSlugs: ['how-to-measure-a-small-dog-for-a-harness', 'best-harness-for-a-chihuahua'],
    pillar: false,
  },
  {
    slug: 'step-in-vs-overhead-dog-harness',
    title: 'Step-In vs Overhead Dog Harness',
    seoTitle: 'Step-In vs Overhead Dog Harness: Which Suits Small Dogs? | My Pup and Me',
    description: 'Comparing step-in and overhead harness styles for small dogs and puppies. Pros, cons and which is easier to put on a wriggly dog.',
    excerpt: 'Overhead harnesses are often easier for small dogs, while step-in styles suit calmer dogs who dislike things going over their head.',
    datePublished: '2025-01-08',
    dateModified: '2025-01-08',
    category: 'Buying Guide',
    relatedSlugs: ['how-should-a-puppy-harness-fit', 'best-harness-for-a-toy-breed'],
    pillar: false,
  },
  {
    slug: 'best-harness-for-a-toy-breed',
    title: 'What Makes a Good Harness for a Toy Breed?',
    seoTitle: 'Best Harness for a Toy Breed | My Pup and Me',
    description: 'Why toy breeds need purpose-built harnesses: lightweight materials, proportionate straps and compact hardware. Key features explained.',
    excerpt: 'Toy breeds need harnesses designed for their proportions—not scaled-down versions of medium-dog products.',
    datePublished: '2024-11-01',
    dateModified: '2025-01-10',
    category: 'Breed Guide',
    relatedSlugs: ['best-harness-for-a-chihuahua', 'step-in-vs-overhead-dog-harness'],
    pillar: false,
  },
  {
    slug: 'when-to-resize-a-puppy-harness',
    title: 'When to Resize a Puppy Harness',
    seoTitle: 'When to Resize a Puppy Harness | My Pup and Me',
    description: 'How to tell when your growing puppy has outgrown their harness. Signs to watch for, remeasuring schedule and size-up guidance.',
    excerpt: 'Puppies grow quickly. Check harness fit every two weeks and remeasure the chest before ordering the next size.',
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
    category: 'Fitting',
    relatedSlugs: ['how-should-a-puppy-harness-fit', 'xxs-dog-harness-size-guide'],
    pillar: false,
  },
  {
    slug: 'how-to-match-a-dog-harness-and-lead',
    title: 'How to Match a Dog Harness and Lead',
    seoTitle: 'How to Match a Dog Harness and Lead | My Pup and Me',
    description: 'Why coordinating your dog\'s harness and lead looks better and how My Pup and Me designs matching sets in every pattern.',
    excerpt: 'A matching harness and lead creates a polished, intentional look for walks and photographs alike.',
    datePublished: '2025-01-18',
    dateModified: '2025-01-18',
    category: 'Style',
    relatedSlugs: ['best-harness-for-a-chihuahua', 'best-harness-for-a-toy-breed'],
    pillar: false,
  },
  {
    slug: 'choosing-a-comfortable-harness-for-a-puppy',
    title: 'Choosing a Comfortable Harness for a Puppy',
    seoTitle: 'Choosing a Comfortable Harness for a Puppy | My Pup and Me',
    description: 'What to look for when choosing a first puppy harness: weight, padding, adjustability and fit. A practical guide for new puppy owners.',
    excerpt: 'A comfortable puppy harness should be lightweight, well-padded and easy to adjust as your puppy grows.',
    datePublished: '2024-11-15',
    dateModified: '2025-01-10',
    category: 'Buying Guide',
    relatedSlugs: ['how-should-a-puppy-harness-fit', 'when-to-resize-a-puppy-harness'],
    pillar: false,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(slug: string): Article[] {
  const article = getArticleBySlug(slug)
  if (!article) return []
  return article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => a !== undefined)
}
