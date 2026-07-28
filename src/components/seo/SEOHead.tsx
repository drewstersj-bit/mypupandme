import { useEffect } from 'react'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/config/site'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  article?: boolean
  noindex?: boolean
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  article = false,
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const image = `${SITE_URL}${ogImage || DEFAULT_OG_IMAGE}`

  useEffect(() => {
    document.title = fullTitle
    setMeta('description', description)
    setLink('canonical', url)

    if (noindex) {
      setMeta('robots', 'noindex, nofollow')
    }

    // Open Graph
    setMeta('og:type', article ? 'article' : 'website', true)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:url', url, true)
    setMeta('og:image', image, true)
    setMeta('og:site_name', SITE_NAME, true)
    setMeta('og:locale', 'en_GB', true)

    // Twitter
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
  }, [fullTitle, description, url, image, article, noindex])

  return null
}
