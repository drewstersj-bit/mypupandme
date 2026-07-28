import { useEffect, useRef } from 'react'
import { SITE_URL } from '@/config/site'

interface StructuredDataProps {
  data: Record<string, unknown>
  id?: string
}

export default function StructuredData({ data, id }: StructuredDataProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    if (id) script.id = id
    document.head.appendChild(script)
    scriptRef.current = script

    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current)
      }
    }
  }, [data, id])

  return null
}

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'My Pup and Me',
    url: SITE_URL,
    description: 'Lightweight harnesses and matching leads designed for puppies, toy breeds and very small dogs.',
    logo: `${SITE_URL}/onblack.jpg`,
  }
  return <StructuredData data={data} id="org-schema" />
}

export function BrandSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'My Pup and Me',
    url: SITE_URL,
    description: 'Lightweight, comfortable harnesses and matching leads created for puppies, toy breeds and very small dogs.',
    logo: `${SITE_URL}/onblack.jpg`,
  }
  return <StructuredData data={data} id="brand-schema" />
}

export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'My Pup and Me',
    url: SITE_URL,
    description: 'Discover lightweight harnesses and matching leads designed for puppies, toy breeds and very small dogs.',
  }
  return <StructuredData data={data} id="website-schema" />
}
