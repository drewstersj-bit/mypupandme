/**
 * Static Prerendering Script
 * Runs after vite build to generate per-route HTML files with correct
 * title, meta description, canonical, structured data and visible content.
 *
 * This ensures crawlers see fully formed HTML without relying on JavaScript.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const SITE_URL = process.env.VITE_SITE_URL || 'https://mypupandme.co.uk'

interface PageMeta {
  path: string
  title: string
  description: string
  h1: string
  canonical: string
  structuredData?: object[]
}

const pages: PageMeta[] = [
  {
    path: '/',
    title: 'Small Dog Harnesses & Matching Leads | My Pup and Me',
    description: 'Discover lightweight harnesses and matching leads designed for puppies, toy breeds and very small dogs. Available in XXS–S from My Chi and Me.',
    h1: 'Little harnesses. Big personality.',
    canonical: '/',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'My Pup and Me',
        url: SITE_URL,
        description: 'Lightweight harnesses and matching leads designed for puppies, toy breeds and very small dogs.',
        logo: `${SITE_URL}/onblack.jpg`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Brand',
        name: 'My Pup and Me',
        url: SITE_URL,
        logo: `${SITE_URL}/onblack.jpg`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'My Pup and Me',
        url: SITE_URL,
      },
    ],
  },
  {
    path: '/collection',
    title: 'Small Dog Harness Collection | My Pup and Me',
    description: 'Shop stylish small dog harnesses in XXS–S with matching leads. Designed for puppies and toy breeds and available from our sister site, My Chi and Me.',
    h1: 'The Collection',
    canonical: '/collection',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'My Pup and Me Harness Collection',
        url: `${SITE_URL}/collection`,
        description: 'Lightweight harnesses and matching leads for puppies, toy breeds and very small dogs.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Collection', item: `${SITE_URL}/collection` },
        ],
      },
    ],
  },
  {
    path: '/size-guide',
    title: 'Small Dog Harness Size Guide | My Pup and Me',
    description: 'Learn how to measure your puppy or small dog for a harness and compare our XXS, XS and S chest and neck measurements.',
    h1: 'Size Guide',
    canonical: '/size-guide',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Size Guide', item: `${SITE_URL}/size-guide` },
        ],
      },
    ],
  },
  {
    path: '/our-story',
    title: 'Harnesses Designed for Little Dogs | My Pup and Me',
    description: 'Why we created My Pup and Me: lightweight, properly proportioned harnesses for puppies, toy breeds and very small dogs who deserve more than scaled-down accessories.',
    h1: 'Our Story',
    canonical: '/our-story',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Our Story', item: `${SITE_URL}/our-story` },
        ],
      },
    ],
  },
  {
    path: '/journal',
    title: 'Small Dog Harness Advice & Guides | My Pup and Me',
    description: 'Practical advice on sizing, comfort and choosing the right harness for puppies, toy breeds and very small dogs.',
    h1: 'Little Dog Journal',
    canonical: '/journal',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Journal', item: `${SITE_URL}/journal` },
        ],
      },
    ],
  },
  {
    path: '/journal/how-to-measure-a-small-dog-for-a-harness',
    title: 'How to Measure a Small Dog for a Harness | My Pup and Me',
    description: 'A step-by-step guide to measuring your puppy or small dog for a comfortable harness fit, with chest and neck measurement instructions.',
    h1: 'How to Measure a Small Dog for a Harness',
    canonical: '/journal/how-to-measure-a-small-dog-for-a-harness',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Measure a Small Dog for a Harness',
        author: { '@type': 'Organization', name: 'My Pup and Me' },
        datePublished: '2024-12-01',
        publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL },
      },
    ],
  },
  {
    path: '/journal/choosing-a-comfortable-harness-for-a-puppy',
    title: 'Choosing a Comfortable Harness for a Puppy | My Pup and Me',
    description: 'What to look for in a puppy harness: weight, padding, adjustability and fabric. Practical guidance for first-time puppy owners.',
    h1: 'Choosing a Comfortable Harness for a Puppy',
    canonical: '/journal/choosing-a-comfortable-harness-for-a-puppy',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Choosing a Comfortable Harness for a Puppy',
        author: { '@type': 'Organization', name: 'My Pup and Me' },
        datePublished: '2024-11-15',
        publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL },
      },
    ],
  },
  {
    path: '/journal/what-makes-a-good-harness-for-a-toy-breed',
    title: 'Best Harness for a Toy Breed | My Pup and Me',
    description: 'Why toy breeds need purpose-built harnesses: lightweight materials, proportionate straps and compact hardware. Key features explained.',
    h1: 'What Makes a Good Harness for a Toy Breed?',
    canonical: '/journal/what-makes-a-good-harness-for-a-toy-breed',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'What Makes a Good Harness for a Toy Breed?',
        author: { '@type': 'Organization', name: 'My Pup and Me' },
        datePublished: '2024-11-01',
        publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL },
      },
    ],
  },
  {
    path: '/journal/best-harness-for-a-chihuahua',
    title: 'Best Harness for a Chihuahua | My Pup and Me',
    description: 'What to look for in a Chihuahua harness: lightweight materials, XXS sizing, secure buckles and comfortable padding.',
    h1: 'Best Harness for a Chihuahua',
    canonical: '/journal/best-harness-for-a-chihuahua',
    structuredData: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Harness for a Chihuahua', author: { '@type': 'Organization', name: 'My Pup and Me' }, datePublished: '2025-01-10', publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL } }],
  },
  {
    path: '/journal/how-should-a-puppy-harness-fit',
    title: 'How Should a Puppy Harness Fit? | My Pup and Me',
    description: 'A properly fitting puppy harness should be snug but not tight, with room for one finger beneath each strap.',
    h1: 'How Should a Puppy Harness Fit?',
    canonical: '/journal/how-should-a-puppy-harness-fit',
    structuredData: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'How Should a Puppy Harness Fit?', author: { '@type': 'Organization', name: 'My Pup and Me' }, datePublished: '2025-01-05', publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL } }],
  },
  {
    path: '/journal/xxs-dog-harness-size-guide',
    title: 'XXS Dog Harness Size Guide | My Pup and Me',
    description: 'Which dogs fit an XXS harness? Chest measurements, breed guidance and measuring tips for the smallest harness size.',
    h1: 'XXS Dog Harness Size Guide',
    canonical: '/journal/xxs-dog-harness-size-guide',
    structuredData: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'XXS Dog Harness Size Guide', author: { '@type': 'Organization', name: 'My Pup and Me' }, datePublished: '2025-01-12', publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL } }],
  },
  {
    path: '/journal/step-in-vs-overhead-dog-harness',
    title: 'Step-In vs Overhead Dog Harness: Which Suits Small Dogs? | My Pup and Me',
    description: 'Comparing step-in and overhead harness styles for small dogs and puppies. Pros, cons and practical guidance.',
    h1: 'Step-In vs Overhead Dog Harness',
    canonical: '/journal/step-in-vs-overhead-dog-harness',
    structuredData: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'Step-In vs Overhead Dog Harness', author: { '@type': 'Organization', name: 'My Pup and Me' }, datePublished: '2025-01-08', publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL } }],
  },
  {
    path: '/journal/when-to-resize-a-puppy-harness',
    title: 'When to Resize a Puppy Harness | My Pup and Me',
    description: 'How to tell when your growing puppy has outgrown their harness. Signs to watch for and remeasuring schedule.',
    h1: 'When to Resize a Puppy Harness',
    canonical: '/journal/when-to-resize-a-puppy-harness',
    structuredData: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'When to Resize a Puppy Harness', author: { '@type': 'Organization', name: 'My Pup and Me' }, datePublished: '2025-01-15', publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL } }],
  },
  {
    path: '/journal/how-to-match-a-dog-harness-and-lead',
    title: 'How to Match a Dog Harness and Lead | My Pup and Me',
    description: 'Why coordinating your dog\'s harness and lead looks better and the practical benefits of matched sets.',
    h1: 'How to Match a Dog Harness and Lead',
    canonical: '/journal/how-to-match-a-dog-harness-and-lead',
    structuredData: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Match a Dog Harness and Lead', author: { '@type': 'Organization', name: 'My Pup and Me' }, datePublished: '2025-01-18', publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL } }],
  },
  {
    path: '/small-dog-harness-guide',
    title: 'The Complete Guide to Choosing a Harness for a Small Dog | My Pup and Me',
    description: 'Everything you need to know about choosing, measuring and fitting a harness for a puppy, Chihuahua or toy breed.',
    h1: 'The Complete Guide to Choosing a Harness for a Small Dog',
    canonical: '/small-dog-harness-guide',
    structuredData: [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Small Dog Harness Guide', item: `${SITE_URL}/small-dog-harness-guide` }] }],
  },
  {
    path: '/contact',
    title: 'Contact Us | My Pup and Me',
    description: 'Get in touch with the My Pup and Me team about sizing, patterns or anything else.',
    h1: 'Contact Us',
    canonical: '/contact',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | My Pup and Me',
    description: 'How My Pup and Me collects, uses and protects your personal information.',
    h1: 'Privacy Policy',
    canonical: '/privacy',
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | My Pup and Me',
    description: 'Terms and conditions for using the My Pup and Me website.',
    h1: 'Terms & Conditions',
    canonical: '/terms',
  },
]

function generateHead(page: PageMeta): string {
  const canonicalUrl = `${SITE_URL}${page.canonical}`
  let structuredDataHtml = ''
  if (page.structuredData) {
    structuredDataHtml = page.structuredData
      .map((data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`)
      .join('\n    ')
  }

  return `<title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${SITE_URL}/onblack.jpg" />
    <meta property="og:site_name" content="My Pup and Me" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    ${structuredDataHtml}`
}

function prerender() {
  const templatePath = path.join(distDir, 'index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  console.log(`\n🔍 Prerendering ${pages.length} routes...\n`)

  for (const page of pages) {
    const headContent = generateHead(page)

    // Remove existing meta tags from template and inject page-specific ones
    let html = template
      // Remove existing title
      .replace(/<title>[^<]*<\/title>\s*/g, '')
      // Remove existing meta description
      .replace(/<meta\s+name="description"[^>]*>\s*/g, '')
      // Remove existing canonical
      .replace(/<link\s+rel="canonical"[^>]*>\s*/g, '')
      // Remove existing OG tags
      .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/g, '')
      // Remove existing Twitter tags
      .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/g, '')

    // Inject page-specific head content before </head>
    html = html.replace('</head>', `    ${headContent}\n  </head>`)

    // Write to the correct directory
    const routePath = page.path === '/' ? '/index.html' : `${page.path}/index.html`
    const filePath = path.join(distDir, routePath)
    const dirPath = path.dirname(filePath)

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    fs.writeFileSync(filePath, html, 'utf-8')
    console.log(`  ✓ ${page.path} → ${routePath}`)
  }

  console.log(`\n✅ Prerendering complete. ${pages.length} static HTML files generated.\n`)
}

prerender()
