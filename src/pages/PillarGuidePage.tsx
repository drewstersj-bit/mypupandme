import { Link } from 'react-router-dom'
import SEOHead from '@/components/seo/SEOHead'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/config/site'
import { sizeGuide } from '@/data/products'
import RetailCTA from '@/components/ui/RetailCTA'
import '@/components/ui/ArticleLayout.css'

export default function PillarGuidePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Small Dog Harness Guide', item: `${SITE_URL}/small-dog-harness-guide` },
    ],
  }

  return (
    <>
      <SEOHead
        title="The Complete Guide to Choosing a Harness for a Small Dog | My Pup and Me"
        description="Everything you need to know about choosing, measuring and fitting a harness for a puppy, Chihuahua or toy breed. Sizes, styles, materials and common mistakes."
        canonical="/small-dog-harness-guide"
      />
      <StructuredData data={breadcrumbSchema} />

      <main id="main-content" className="article-layout">
        <article className="section">
          <div className="container container--narrow">
            <nav className="article-layout__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">Small Dog Harness Guide</span>
            </nav>

            <header className="article-layout__header">
              <span className="article-layout__category">Complete Guide</span>
              <h1>The Complete Guide to Choosing a Harness for a Small Dog</h1>
              <p className="article-layout__meta">By the My Pup and Me team · Updated January 2025</p>
            </header>

            <div className="article-layout__body">
              <p>
                Choosing the right harness for a small dog means understanding that puppies, toy breeds and miniature dogs have genuinely different needs from larger breeds. A harness that works well on a Labrador will not work on a Chihuahua — even in a smaller size. This guide covers everything from measuring and fitting to materials, styles and common mistakes.
              </p>

              <div className="summary-box">
                <h3>Quick summary</h3>
                <ul>
                  <li>Measure your dog's chest and neck before ordering — breed alone does not determine size</li>
                  <li>Small dogs benefit from lightweight harnesses with soft padding and compact hardware</li>
                  <li>Overhead harnesses are typically easier to put on wriggly small dogs</li>
                  <li>Remeasure puppies every 2–4 weeks during growth</li>
                  <li>My Pup and Me harnesses are available in XXS (20–25 cm chest), XS (25–30 cm) and S (30–38 cm)</li>
                </ul>
              </div>

              <h2>Why fit matters for little dogs</h2>
              <p>
                A poorly fitting harness on a small dog is more than uncomfortable — it can restrict breathing, rub bare skin and make walks stressful. Small dogs have less body mass to absorb pressure from straps, so every millimetre of adjustment matters more than it does on a larger breed.
              </p>
              <p>
                Dogs under 5 kg are particularly sensitive to harness weight. A heavy buckle or thick strap that a 20 kg dog wouldn't notice can feel burdensome on a 2 kg Chihuahua or Papillon.
              </p>

              <h2>Common harness styles for small dogs</h2>
              <p>
                The two main styles are <strong>overhead</strong> (over the head, fastening at the side or beneath) and <strong>step-in</strong> (legs step through loops, fastening on the back). For a detailed comparison, see our guide to <Link to="/journal/step-in-vs-overhead-dog-harness">step-in vs overhead harnesses</Link>.
              </p>
              <p>
                My Pup and Me harnesses use the overhead style with a fully adjustable ribcage strap and a secure branded buckle at the side.
              </p>

              <h2>How to measure your dog</h2>
              <p>
                You need two measurements: chest circumference and neck circumference. Our <Link to="/journal/how-to-measure-a-small-dog-for-a-harness">measuring guide</Link> walks you through the process step by step.
              </p>
              <ol>
                <li><strong>Chest:</strong> Wrap a soft tape measure around the widest part of the ribcage, just behind the front legs. Keep it snug but not tight.</li>
                <li><strong>Neck:</strong> Measure around the base of the neck where a collar naturally sits.</li>
                <li>Compare both measurements to the size chart and choose the size that accommodates the larger measurement.</li>
              </ol>

              <h2>My Pup and Me size chart</h2>
              <table>
                <thead>
                  <tr><th>Size</th><th>Chest</th><th>Neck</th></tr>
                </thead>
                <tbody>
                  {sizeGuide.map((row) => (
                    <tr key={row.size}><td><strong>{row.size}</strong></td><td>{row.chest}</td><td>{row.neck}</td></tr>
                  ))}
                </tbody>
              </table>
              <p>
                For detailed guidance on the smallest size, see our <Link to="/journal/xxs-dog-harness-size-guide">XXS harness size guide</Link>.
              </p>

              <h2>Choosing between sizes</h2>
              <p>
                If your dog's chest measurement falls between two sizes, choose the larger one. All My Pup and Me harnesses have an adjustable strap to tighten the fit. Starting slightly larger gives room for comfortable adjustment and — for puppies — a little growth before the next size is needed.
              </p>
              <p>
                See our guide on <Link to="/journal/when-to-resize-a-puppy-harness">when to resize a puppy harness</Link> for growth remeasuring advice.
              </p>

              <h2>Puppy growth and adjustment</h2>
              <p>
                Puppies grow rapidly in their first year. A harness that fits perfectly at 10 weeks may be too tight by 14 weeks. We recommend remeasuring your puppy's chest every two weeks until growth stabilises, then monthly.
              </p>
              <p>
                For detailed fitting guidance, read <Link to="/journal/how-should-a-puppy-harness-fit">how should a puppy harness fit</Link>.
              </p>

              <h2>Lightweight materials</h2>
              <p>
                The best harnesses for very small dogs use lightweight components: silky webbing straps rather than thick nylon, anodised aluminium hardware rather than steel, and compact buckles that don't add unnecessary bulk.
              </p>
              <p>
                A breathable mesh lining against the chest helps with temperature regulation — important for small dogs who can overheat more easily than larger breeds.
              </p>

              <h2>Matching leads</h2>
              <p>
                A coordinating lead completes the look and ensures that lead and harness hardware are compatible in weight and proportion. Our guide to <Link to="/journal/how-to-match-a-dog-harness-and-lead">matching a harness and lead</Link> explains the styling and practical benefits.
              </p>

              <h2>Common fitting mistakes</h2>
              <ul>
                <li><strong>Choosing by breed alone</strong> — individual dogs vary significantly. Always measure.</li>
                <li><strong>Buying too large "to grow into"</strong> — a loose harness can slip and rub. Choose the correct size now and remeasure as needed.</li>
                <li><strong>Tightening too much</strong> — you should be able to slide one flat finger beneath each strap.</li>
                <li><strong>Not checking after exercise</strong> — straps can shift during play. Check the fit after the first few walks.</li>
                <li><strong>Ignoring the neck</strong> — most attention goes to chest size, but neck comfort matters too.</li>
              </ul>

              <h2>When to remeasure</h2>
              <p>
                Remeasure if your dog gains or loses weight, after a growth spurt (puppies), after a seasonal coat change, or if the harness starts leaving marks or sitting differently.
              </p>

              <RetailCTA location="pillar_guide_mid" />

              <h2>Further reading</h2>
              <ul>
                <li><Link to="/journal/best-harness-for-a-chihuahua">Best harness for a Chihuahua</Link></li>
                <li><Link to="/journal/best-harness-for-a-toy-breed">What makes a good harness for a toy breed?</Link></li>
                <li><Link to="/journal/choosing-a-comfortable-harness-for-a-puppy">Choosing a comfortable harness for a puppy</Link></li>
                <li><Link to="/journal/step-in-vs-overhead-dog-harness">Step-in vs overhead harness comparison</Link></li>
                <li><Link to="/size-guide">My Pup and Me size guide</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
