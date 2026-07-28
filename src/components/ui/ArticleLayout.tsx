import { Link } from 'react-router-dom'
import type { Article } from '@/data/articles'
import { getRelatedArticles } from '@/data/articles'
import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/config/site'
import RetailCTA from './RetailCTA'
import './ArticleLayout.css'

interface ArticleLayoutProps {
  article: Article
  children: React.ReactNode
  showRetailCTA?: boolean
}

export default function ArticleLayout({ article, children, showRetailCTA = true }: ArticleLayoutProps) {
  const related = getRelatedArticles(article.slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'My Pup and Me', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/onblack.jpg` } },
    mainEntityOfPage: `${SITE_URL}/journal/${article.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${SITE_URL}/journal` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}/journal/${article.slug}` },
    ],
  }

  return (
    <>
      <SEOHead
        title={article.seoTitle}
        description={article.description}
        canonical={`/journal/${article.slug}`}
        article
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <main id="main-content" className="article-layout">
        <article className="section">
          <div className="container container--narrow">
            <nav className="article-layout__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/journal">Handy Guides</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{article.title}</span>
            </nav>

            <header className="article-layout__header">
              <span className="article-layout__category">{article.category}</span>
              <h1>{article.title}</h1>
              <p className="article-layout__meta">
                Published {new Date(article.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                {article.dateModified !== article.datePublished && (
                  <> · Updated {new Date(article.dateModified).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</>
                )}
                {' '}· By the My Pup and Me team
              </p>
            </header>

            <div className="article-layout__body">
              {children}
            </div>

            {showRetailCTA && (
              <RetailCTA location={`article_${article.slug}`} />
            )}

            {related.length > 0 && (
              <nav className="article-layout__related" aria-label="Related articles">
                <h3>Related guides</h3>
                <ul>
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to={`/journal/${r.slug}`}>{r.title}</Link>
                    </li>
                  ))}
                </ul>
                <Link to="/small-dog-harness-guide" className="article-layout__pillar-link">
                  Read the complete small dog harness guide →
                </Link>
              </nav>
            )}
          </div>
        </article>
      </main>
    </>
  )
}
