import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getArticleBySlug } from '@/data/articles'
import ArticleLayout from '@/components/ui/ArticleLayout'
import Button from '@/components/ui/Button'
import { sizeGuide } from '@/data/products'
import './ArticlePage.css'

// Article content components
function HowToMeasure() {
  return (
    <>
      <p>Accurate chest and neck measurements are the only reliable way to choose the right harness size for a small dog. Breed guidelines give a starting point, but individual dogs vary — even within the same breed — so a tape measure is essential.</p>
      <div className="summary-box">
        <h3>What you need</h3>
        <ul>
          <li>A soft measuring tape (or string and a ruler)</li>
          <li>A calm, standing dog</li>
          <li>A few treats to keep them still</li>
        </ul>
      </div>
      <h2>Step-by-step measuring guide</h2>
      <ol>
        <li><strong>Chest measurement:</strong> Wrap the tape around the widest part of your dog's ribcage, just behind the front legs. Keep the tape snug but not tight — you should be able to slide one flat finger beneath it.</li>
        <li><strong>Neck measurement:</strong> Measure around the base of the neck, where a collar naturally sits. Leave room for one finger.</li>
        <li><strong>Record both numbers</strong> in centimetres and compare them to the size chart.</li>
      </ol>
      <h2>My Pup and Me sizes</h2>
      <table>
        <thead><tr><th>Size</th><th>Chest</th><th>Neck</th></tr></thead>
        <tbody>
          {sizeGuide.map((row) => (<tr key={row.size}><td><strong>{row.size}</strong></td><td>{row.chest}</td><td>{row.neck}</td></tr>))}
        </tbody>
      </table>
      <p>If your dog's chest falls between two sizes, choose the larger one. The adjustable strap will allow you to tighten the fit.</p>
      <h2>Common measuring mistakes</h2>
      <ul>
        <li>Measuring with the tape too loose — this gives a falsely large reading</li>
        <li>Measuring over a thick coat without pressing gently to the body</li>
        <li>Measuring while the dog is sitting or lying down</li>
        <li>Assuming a breed-based guess is accurate enough</li>
      </ul>
      <h2>When to remeasure</h2>
      <p>Remeasure before any new harness purchase. For puppies, remeasure every two weeks. For adult dogs, remeasure if their weight changes significantly or if the current harness starts fitting differently.</p>
      <p>For more on sizing the smallest dogs, see our <Link to="/journal/xxs-dog-harness-size-guide">XXS size guide</Link>. For puppy-specific fitting advice, read <Link to="/journal/how-should-a-puppy-harness-fit">how should a puppy harness fit</Link>.</p>
    </>
  )
}

function BestHarnessChihuahua() {
  return (
    <>
      <p>A Chihuahua needs a genuinely lightweight harness with narrow straps, compact buckles and sizing that starts at XXS. Most harnesses marketed as "small" are still too bulky for dogs weighing 1.5–3 kg. The right harness should feel barely noticeable to wear.</p>
      <div className="summary-box">
        <h3>Key features for Chihuahuas</h3>
        <ul>
          <li>XXS chest sizing (20–25 cm)</li>
          <li>Total weight under 50 g</li>
          <li>Soft padding without bulk</li>
          <li>Narrow, lightweight straps</li>
          <li>Compact hardware (anodised aluminium preferred)</li>
        </ul>
      </div>
      <h2>Why standard small-dog harnesses often don't work</h2>
      <p>Many brands offer "XS" as their smallest size, but an XS designed for a Pug or Jack Russell will swamp a Chihuahua. The proportions are wrong — straps sit too wide apart, chest panels cover too much of the body, and heavy buckles pull downward.</p>
      <h2>What size does a Chihuahua need?</h2>
      <p>Most adult Chihuahuas measure 20–30 cm around the chest. This typically puts them in an XXS or XS harness. However, you must measure your individual dog — a 1.5 kg Chihuahua and a 3.5 kg Chihuahua are very different animals.</p>
      <p>For measuring instructions, read our <Link to="/journal/how-to-measure-a-small-dog-for-a-harness">measuring guide</Link>.</p>
      <h2>Comfort features that matter</h2>
      <ul>
        <li><strong>Padded chest panel:</strong> Distributes pressure without adding weight</li>
        <li><strong>Breathable mesh lining:</strong> Chihuahuas can overheat quickly</li>
        <li><strong>Soft edge binding:</strong> Prevents rubbing against short-coated skin</li>
        <li><strong>Adjustable strap:</strong> Achieves a precise fit on narrow-chested dogs</li>
      </ul>
      <h2>Harness style</h2>
      <p>Overhead harnesses generally work better for Chihuahuas than step-in styles. The head opening is quick to slip on, and the side-fastening buckle avoids the dog needing to balance on two legs. See our <Link to="/journal/step-in-vs-overhead-dog-harness">step-in vs overhead comparison</Link>.</p>
      <p>My Pup and Me harnesses are available from XXS with a chest range of 20–25 cm. They weigh under 45 g in the smallest size and include matching leads in the same fabric print. Products are purchased through <a href="https://mychiandme.co.uk/collections/my-pup-and-me">My Chi and Me</a>.</p>
    </>
  )
}

function HowShouldPuppyHarnessFit() {
  return (
    <>
      <p>A properly fitting puppy harness should be snug against the body without restricting movement or breathing. You should be able to slide one flat finger beneath each strap — no more, no less. If you can fit two fingers easily, it's too loose and may slip. If you can't fit a finger, it's too tight.</p>
      <div className="summary-box">
        <h3>Quick fit check</h3>
        <ul>
          <li>One finger beneath the chest strap</li>
          <li>One finger beneath the neck loop</li>
          <li>No visible rubbing marks after a walk</li>
          <li>Dog moves freely without the harness shifting sideways</li>
          <li>Buckle sits flat, not pulling the fabric askew</li>
        </ul>
      </div>
      <h2>Signs of a poor fit</h2>
      <ul>
        <li>Harness rotates around the body during movement</li>
        <li>Straps dig into the armpit area</li>
        <li>The chest panel rides up toward the throat</li>
        <li>Redness or hair loss beneath the straps</li>
        <li>The puppy resists putting the harness on or freezes when wearing it</li>
      </ul>
      <h2>Fitting an adjustable harness</h2>
      <ol>
        <li>Put the harness on with the strap at its loosest setting</li>
        <li>Tighten gradually until the one-finger rule is met</li>
        <li>Check that the D-ring sits on top of the back, not slipping to one side</li>
        <li>Let your puppy walk around the house for five minutes before heading outside</li>
      </ol>
      <h2>Growth and refitting</h2>
      <p>Puppies grow fast. A harness that fits at 10 weeks may be too tight by 14 weeks. Remeasure every two weeks during rapid growth and check the fit at the start of every walk until the harness feels consistently comfortable.</p>
      <p>For more on growth timing, see <Link to="/journal/when-to-resize-a-puppy-harness">when to resize a puppy harness</Link>. For measuring instructions, read our <Link to="/journal/how-to-measure-a-small-dog-for-a-harness">measuring guide</Link>.</p>
    </>
  )
}

function XXSSizeGuide() {
  return (
    <>
      <p>An XXS harness typically fits dogs with a chest measurement of 20–25 cm and a neck measurement of approximately 20 cm. This includes very small adult Chihuahuas, Russian Toys, tiny puppies and some Papillon puppies. It is the smallest size available in the My Pup and Me range.</p>
      <div className="summary-box">
        <h3>XXS at a glance</h3>
        <ul>
          <li>Chest: 20–25 cm</li>
          <li>Neck: ~20 cm</li>
          <li>Typical weight range: 1–3 kg (guidance only)</li>
          <li>Suitable for: tiny adults and very young puppies</li>
        </ul>
      </div>
      <h2>Which dogs typically need XXS?</h2>
      <p>The following breeds often fall into XXS, but individual measurements must always determine size:</p>
      <ul>
        <li>Chihuahuas under 2.5 kg</li>
        <li>Russian Toys</li>
        <li>Very small Papillon puppies</li>
        <li>Puppies of small breeds at 8–12 weeks</li>
      </ul>
      <p><strong>Important:</strong> Breed references are guidance only. A large Chihuahua may need XS, while a very small Yorkshire Terrier might fit XXS. Always <Link to="/journal/how-to-measure-a-small-dog-for-a-harness">measure your dog</Link> before ordering.</p>
      <h2>Full size comparison</h2>
      <table>
        <thead><tr><th>Size</th><th>Chest</th><th>Neck</th></tr></thead>
        <tbody>
          {sizeGuide.map((row) => (<tr key={row.size}><td><strong>{row.size}</strong></td><td>{row.chest}</td><td>{row.neck}</td></tr>))}
        </tbody>
      </table>
      <h2>Between XXS and XS?</h2>
      <p>If your dog's chest measures 24–26 cm — right at the boundary — choose XS. The adjustable strap allows you to tighten it down, whereas an XXS at maximum extension may not leave room for comfortable movement.</p>
      <p>For puppies approaching this boundary, going up also allows a few more weeks of wear before the next size is needed. See our guide on <Link to="/journal/when-to-resize-a-puppy-harness">when to resize a puppy harness</Link>.</p>
    </>
  )
}

function StepInVsOverhead() {
  return (
    <>
      <p>Overhead harnesses slip over the dog's head and fasten at the side or beneath the chest. Step-in harnesses require the dog to place both front paws through loops before buckling on the back. For most small dogs, the overhead style is quicker and easier — especially for wriggly puppies and dogs who dislike having their paws handled.</p>
      <div className="summary-box">
        <h3>Comparison at a glance</h3>
        <table>
          <thead><tr><th>Feature</th><th>Overhead</th><th>Step-In</th></tr></thead>
          <tbody>
            <tr><td>Ease of use</td><td>Quick — one motion</td><td>Requires dog to stand still</td></tr>
            <tr><td>Best for</td><td>Wriggly dogs, puppies</td><td>Calm dogs, sensitive heads</td></tr>
            <tr><td>Escape risk</td><td>Low if fitted well</td><td>Can slip if loose</td></tr>
            <tr><td>Adjustment</td><td>Usually adjustable chest strap</td><td>Varies</td></tr>
          </tbody>
        </table>
      </div>
      <h2>Overhead harnesses explained</h2>
      <p>The head goes through a fixed loop, then the harness fastens around the chest with a buckle. The lead attaches to a D-ring on the back. This style keeps the front legs free and doesn't require any paw lifting.</p>
      <p>My Pup and Me uses the overhead style with a fully adjustable silky webbing strap and a secure branded buckle at the side.</p>
      <h2>Step-in harnesses explained</h2>
      <p>Both front paws step into separate loops laid flat on the ground, then the harness pulls up around the body and clips on the back. This avoids anything going over the head — which some dogs find stressful — but requires the dog to stand still on all four legs while you lift and fasten.</p>
      <h2>Which is better for small dogs?</h2>
      <p>Neither style is universally "better." However, overhead harnesses tend to work more practically for:</p>
      <ul>
        <li>Very small dogs whose paws are difficult to position</li>
        <li>Puppies who won't stand still</li>
        <li>Dogs who struggle with being held</li>
        <li>Quick on/off for short outings</li>
      </ul>
      <p>Step-in styles work best for dogs who react strongly to anything near their face or ears. If this describes your dog, read our <Link to="/journal/how-should-a-puppy-harness-fit">fitting guide</Link> for general advice on making harness time easier.</p>
    </>
  )
}

function BestHarnessToyBreed() {
  return (
    <>
      <p>Toy breeds need harnesses built for their proportions — not simply scaled-down versions of products designed for medium-sized dogs. The key differences are weight, strap width, buckle size and chest panel coverage. A genuinely good toy-breed harness feels barely noticeable to wear.</p>
      <div className="summary-box">
        <h3>What matters most</h3>
        <ul>
          <li>Total harness weight under 50 g</li>
          <li>Narrow straps (under 15 mm wide)</li>
          <li>Compact, lightweight hardware</li>
          <li>Breathable lining</li>
          <li>Proportionate chest panel that doesn't overwhelm the body</li>
        </ul>
      </div>
      <h2>Why "small" isn't small enough</h2>
      <p>Many brands market harnesses as "XS" but design them for dogs weighing 4–6 kg. A 2 kg Toy Poodle or Papillon experiences these as heavy and oversized. The straps sit too far apart, the chest panel covers too much of the ribcage, and the buckles feel disproportionate.</p>
      <h2>Breeds that benefit from purpose-built harnesses</h2>
      <p>The following toy and miniature breeds commonly need harnesses designed specifically for very small frames:</p>
      <ul>
        <li>Chihuahuas</li>
        <li>Toy Poodles</li>
        <li>Papillons</li>
        <li>Maltese</li>
        <li>Pomeranians</li>
        <li>Russian Toys</li>
        <li>Biewer Terriers</li>
        <li>Yorkshire Terriers</li>
        <li>Miniature Dachshunds</li>
      </ul>
      <p>For Chihuahuas specifically, see our dedicated <Link to="/journal/best-harness-for-a-chihuahua">Chihuahua harness guide</Link>.</p>
      <h2>Construction features to look for</h2>
      <ul>
        <li><strong>Anodised metal D-ring:</strong> Lighter than steel, equally strong for toy-breed weights</li>
        <li><strong>Soft padded chest:</strong> Distributes pressure without bulk</li>
        <li><strong>Air-mesh lining:</strong> Prevents overheating, which affects small dogs quickly</li>
        <li><strong>Soft edge binding:</strong> Prevents rubbing on delicate skin and fine coats</li>
      </ul>
      <p>Products in the My Pup and Me range are designed to meet these criteria from XXS to S. The collection is available from <a href="https://mychiandme.co.uk/collections/my-pup-and-me">My Chi and Me</a>.</p>
    </>
  )
}

function WhenToResize() {
  return (
    <>
      <p>Puppies grow quickly in their first year, and a harness that fitted perfectly a fortnight ago may already be too tight. The simple test: if you can no longer slide one flat finger comfortably beneath the chest strap, it's time to remeasure and potentially move up a size.</p>
      <div className="summary-box">
        <h3>Signs your puppy needs the next size</h3>
        <ul>
          <li>You can no longer fit a finger beneath the strap</li>
          <li>Red marks or indentations appear after removal</li>
          <li>The buckle is at its maximum extension</li>
          <li>The harness sits higher on the chest than before</li>
          <li>Your puppy resists putting the harness on when they previously accepted it</li>
        </ul>
      </div>
      <h2>How often to check</h2>
      <ul>
        <li><strong>8–16 weeks:</strong> Check and remeasure every 2 weeks</li>
        <li><strong>4–6 months:</strong> Check every 3 weeks</li>
        <li><strong>6–12 months:</strong> Check monthly</li>
        <li><strong>Over 12 months:</strong> Most toy breeds have stopped growing; check when weight changes</li>
      </ul>
      <h2>Using the adjustable strap</h2>
      <p>A well-designed harness with an adjustable strap gives you several centimetres of range within one size. Start with the strap at a mid-point so you can loosen it as the puppy grows, extending the usable life of each harness.</p>
      <h2>When to buy the next size</h2>
      <p>Order the next size up when the current harness is at maximum extension <em>and</em> fitting snugly. Don't wait until it's visibly tight — by that point it's already uncomfortable.</p>
      <p>For measuring instructions, see <Link to="/journal/how-to-measure-a-small-dog-for-a-harness">how to measure a small dog for a harness</Link>. For size boundary guidance, see the <Link to="/journal/xxs-dog-harness-size-guide">XXS size guide</Link>.</p>
    </>
  )
}

function HowToMatchHarnessAndLead() {
  return (
    <>
      <p>A matching harness and lead set creates a polished, intentional look and ensures that lead hardware is proportionate to the harness — important for small dogs where oversized clips can pull at the D-ring uncomfortably.</p>
      <div className="summary-box">
        <h3>Benefits of a matched set</h3>
        <ul>
          <li>Coordinated fabric print and colourway</li>
          <li>Proportionate hardware weight and clip size</li>
          <li>Consistent brand look for photographs and outings</li>
          <li>Lead handle comfort matched to the overall style</li>
        </ul>
      </div>
      <h2>Why proportion matters</h2>
      <p>A lead designed for a medium-sized dog typically has a heavier trigger clip. Attached to a lightweight XXS harness, this clip can pull the D-ring downward and make the harness sit unevenly. A purpose-matched lead uses a lighter clip that keeps the harness in position.</p>
      <h2>My Pup and Me matching leads</h2>
      <p>Each of the four My Pup and Me harness patterns has a corresponding lead in the same fabric:</p>
      <ul>
        <li>Blue Meadow Floral</li>
        <li>White Vintage Floral</li>
        <li>Brown Tartan</li>
        <li>Classic Tweed</li>
      </ul>
      <p>The leads are designed to complement the harness proportions with a lightweight construction and comfortable padded handle.</p>
      <h2>Mixing patterns</h2>
      <p>There's no rule against mixing patterns if your dog has multiple harnesses. However, the matched sets are designed to be photographed together and create the most intentional appearance on walks.</p>
      <p>The full collection of harnesses and matching leads is available from <a href="https://mychiandme.co.uk/collections/my-pup-and-me">My Chi and Me</a>.</p>
    </>
  )
}

function ChoosingPuppyHarness() {
  return (
    <>
      <p>A comfortable puppy harness should be lightweight, softly padded and easy to adjust as your puppy grows. The most important factors are weight on the body, simplicity of putting it on, and room for growth within the size range.</p>
      <div className="summary-box">
        <h3>Puppy harness priorities</h3>
        <ul>
          <li>Lightweight — under 50 g for toy breed puppies</li>
          <li>Padded chest panel — gentle on a puppy's soft body</li>
          <li>Adjustable strap — accommodates several weeks of growth</li>
          <li>Quick to put on — overhead styles are usually fastest</li>
          <li>Breathable lining — puppies overheat easily during excited walks</li>
        </ul>
      </div>
      <h2>When to introduce a harness</h2>
      <p>Most puppies can start wearing a harness at home from around 8 weeks. Let them wear it indoors for short periods before attaching a lead. This builds positive association before the first outdoor walk.</p>
      <h2>Weight and materials</h2>
      <p>Puppies are sensitive to anything that feels restrictive. A heavy harness can make a puppy freeze, refuse to walk or try to escape. Look for harnesses described as lightweight and check that buckles and clips are proportionate — not designed for a much larger dog.</p>
      <h2>Adjustability for growth</h2>
      <p>A puppy can outgrow a harness in 2–4 weeks during rapid growth phases. A harness with an adjustable ribcage strap gives you more time in each size. Check the fit regularly using the one-finger rule described in our <Link to="/journal/how-should-a-puppy-harness-fit">fitting guide</Link>.</p>
      <h2>Fabric and lining</h2>
      <p>Soft fabrics like silky webbing and gentle edge binding are kinder to a puppy's coat and skin than rough nylon. An air-mesh lining helps prevent overheating during energetic walks and playtime.</p>
      <p>For further guidance, see <Link to="/journal/when-to-resize-a-puppy-harness">when to resize a puppy harness</Link> and the <Link to="/small-dog-harness-guide">complete small dog harness guide</Link>.</p>
    </>
  )
}

// Map slugs to content components
const contentMap: Record<string, () => React.ReactElement> = {
  'how-to-measure-a-small-dog-for-a-harness': HowToMeasure,
  'best-harness-for-a-chihuahua': BestHarnessChihuahua,
  'how-should-a-puppy-harness-fit': HowShouldPuppyHarnessFit,
  'xxs-dog-harness-size-guide': XXSSizeGuide,
  'step-in-vs-overhead-dog-harness': StepInVsOverhead,
  'best-harness-for-a-toy-breed': BestHarnessToyBreed,
  'when-to-resize-a-puppy-harness': WhenToResize,
  'how-to-match-a-dog-harness-and-lead': HowToMatchHarnessAndLead,
  'choosing-a-comfortable-harness-for-a-puppy': ChoosingPuppyHarness,
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : null
  const ContentComponent = slug ? contentMap[slug] : null

  if (!article || !ContentComponent) {
    return (
      <main id="main-content">
        <div className="section container container--narrow">
          <h1>Article Not Found</h1>
          <p>Sorry, this article could not be found.</p>
          <Button to="/journal" variant="primary" size="md">Back to Journal</Button>
        </div>
      </main>
    )
  }

  return (
    <ArticleLayout article={article}>
      <ContentComponent />
    </ArticleLayout>
  )
}
