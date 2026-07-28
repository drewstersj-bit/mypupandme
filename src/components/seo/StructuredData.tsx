import { useEffect, useRef } from 'react'

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
    url: 'https://mypupandme.co.uk',
    description: 'Beautifully designed harnesses and matching leads for puppies, toy breeds and small dogs.',
    logo: 'https://mypupandme.co.uk/assets/logo.png',
  }
  return <StructuredData data={data} id="org-schema" />
}

export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'My Pup and Me',
    url: 'https://mypupandme.co.uk',
    description: 'Stylish, comfortable harnesses and matching leads designed for puppies, toy breeds and small dogs.',
  }
  return <StructuredData data={data} id="website-schema" />
}
