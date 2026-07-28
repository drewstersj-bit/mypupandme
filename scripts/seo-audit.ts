/**
 * SEO Audit Script
 * Checks prerendered HTML files for common SEO issues.
 * Run: npx tsx scripts/seo-audit.ts
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

const SITE_URL = process.env.VITE_SITE_URL || 'https://mypupandme.co.uk'

// All routes that should have prerendered HTML
const expectedRoutes = [
  '/',
  '/collection',
  '/size-guide',
  '/our-story',
  '/journal',
  '/journal/how-to-measure-a-small-dog-for-a-harness',
  '/journal/choosing-a-comfortable-harness-for-a-puppy',
  '/journal/what-makes-a-good-harness-for-a-toy-breed',
  '/contact',
  '/privacy',
  '/terms',
]

// Outbound My Chi and Me links that must be valid
const expectedOutboundLinks = [
  'https://mychiandme.co.uk/collections/my-pup-and-me',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/meadow-floral-harness-by-my-pup-and-me-copy',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-blue-meadow-floral-lead-by-my-pup-and-me',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/white-vintage-floral-harness-by-my-pup-and-me-copy',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-white-vintage-floral-lead-by-my-pup-and-me',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/my-pup-and-me-brown-tartan-harness',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-brown-tartan-lead-by-my-pup-and-me',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/tweed-harness-by-my-pup-and-me',
  'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-tweed-lead-by-my-pup-and-me',
]

interface Issue {
  severity: 'error' | 'warning'
  route: string
  message: string
}

const issues: Issue[] = []

function getHtmlPath(route: string): string {
  if (route === '/') return path.join(distDir, 'index.html')
  return path.join(distDir, route, 'index.html')
}

function checkRoute(route: string) {
  const filePath = getHtmlPath(route)

  if (!fs.existsSync(filePath)) {
    issues.push({ severity: 'error', route, message: 'Prerendered HTML file missing' })
    return
  }

  const html = fs.readFileSync(filePath, 'utf-8')

  // Check title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/)
  if (!titleMatch) {
    issues.push({ severity: 'error', route, message: 'Missing <title> tag' })
  } else {
    const title = titleMatch[1]
    if (title === 'My Pup and Me - Beautifully Designed for Little Dogs' && route !== '/') {
      issues.push({ severity: 'error', route, message: `Title appears to be generic/default: "${title}"` })
    }
    if (title.length > 70) {
      issues.push({ severity: 'warning', route, message: `Title is ${title.length} chars (recommended ≤ 60): "${title}"` })
    }
  }

  // Check description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/)
  if (!descMatch) {
    issues.push({ severity: 'error', route, message: 'Missing meta description' })
  } else if (descMatch[1].length > 170) {
    issues.push({ severity: 'warning', route, message: `Description is ${descMatch[1].length} chars (recommended ≤ 160)` })
  }

  // Check canonical
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)
  if (!canonicalMatch) {
    issues.push({ severity: 'error', route, message: 'Missing canonical URL' })
  } else if (!canonicalMatch[1].startsWith(SITE_URL)) {
    issues.push({ severity: 'warning', route, message: `Canonical does not match SITE_URL: ${canonicalMatch[1]}` })
  }

  // Check JSON-LD
  const jsonLdMatches = html.match(/<script type="application\/ld\+json">/g)
  if (route === '/' && (!jsonLdMatches || jsonLdMatches.length < 2)) {
    issues.push({ severity: 'warning', route, message: 'Homepage should have multiple structured data blocks' })
  }

  // Check for valid JSON-LD syntax
  const jsonLdBlocks = html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)
  for (const match of jsonLdBlocks) {
    try {
      JSON.parse(match[1])
    } catch {
      issues.push({ severity: 'error', route, message: 'Invalid JSON-LD syntax' })
    }
  }
}

function checkSitemap() {
  const sitemapPath = path.join(distDir, 'sitemap.xml')
  if (!fs.existsSync(sitemapPath)) {
    issues.push({ severity: 'error', route: 'sitemap.xml', message: 'Sitemap file missing from dist' })
    return
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf-8')

  for (const route of expectedRoutes) {
    const expectedUrl = `${SITE_URL}${route === '/' ? '/' : route}`
    if (!sitemap.includes(expectedUrl)) {
      issues.push({ severity: 'error', route, message: `Route not found in sitemap.xml` })
    }
  }
}

function checkRobotsTxt() {
  const robotsPath = path.join(distDir, 'robots.txt')
  if (!fs.existsSync(robotsPath)) {
    issues.push({ severity: 'error', route: 'robots.txt', message: 'robots.txt missing from dist' })
    return
  }

  const robots = fs.readFileSync(robotsPath, 'utf-8')
  if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
    issues.push({ severity: 'warning', route: 'robots.txt', message: `Sitemap URL in robots.txt does not match SITE_URL` })
  }
}

function checkDuplicateTitles() {
  const titles: Record<string, string[]> = {}

  for (const route of expectedRoutes) {
    const filePath = getHtmlPath(route)
    if (!fs.existsSync(filePath)) continue

    const html = fs.readFileSync(filePath, 'utf-8')
    const titleMatch = html.match(/<title>([^<]+)<\/title>/)
    if (titleMatch) {
      const title = titleMatch[1]
      if (!titles[title]) titles[title] = []
      titles[title].push(route)
    }
  }

  for (const [title, routes] of Object.entries(titles)) {
    if (routes.length > 1) {
      issues.push({ severity: 'error', route: routes.join(', '), message: `Duplicate title: "${title}"` })
    }
  }
}

// Run all checks
console.log('\n🔍 Running SEO audit on prerendered files...\n')

for (const route of expectedRoutes) {
  checkRoute(route)
}

checkSitemap()
checkRobotsTxt()
checkDuplicateTitles()

// Report
const errors = issues.filter((i) => i.severity === 'error')
const warnings = issues.filter((i) => i.severity === 'warning')

if (errors.length > 0) {
  console.log(`❌ ${errors.length} error(s):\n`)
  errors.forEach((i) => console.log(`  [ERROR] ${i.route}: ${i.message}`))
  console.log('')
}

if (warnings.length > 0) {
  console.log(`⚠️  ${warnings.length} warning(s):\n`)
  warnings.forEach((i) => console.log(`  [WARN] ${i.route}: ${i.message}`))
  console.log('')
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All SEO checks passed.\n')
}

// Exit with error code if critical issues found
if (errors.length > 0) {
  process.exit(1)
}

console.log(`📋 Checked ${expectedRoutes.length} routes, ${expectedOutboundLinks.length} outbound links registered.\n`)
