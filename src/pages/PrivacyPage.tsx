import SEOHead from '@/components/seo/SEOHead'

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="How My Pup and Me collects, uses and protects your personal information."
        canonical="/privacy"
      />

      <main id="main-content">
        <section className="section">
          <div className="container container--narrow">
            <h1>Privacy Policy</h1>
            <p style={{ marginBottom: '2rem' }}>Last updated: December 2024</p>

            <h2>Who We Are</h2>
            <p>My Pup and Me is operated by the team behind My Chi and Me. This policy explains how we handle your personal information when you use our website.</p>

            <h2>Information We Collect</h2>
            <p>When you sign up for our newsletter or use our contact form, we collect your name and email address. We do not collect payment information on this website—all purchases are processed through our Shopify store.</p>

            <h2>How We Use Your Information</h2>
            <p>We use your email address to send you updates about new products, new patterns and useful advice for small-dog owners. We will not share your information with third parties for marketing purposes.</p>

            <h2>Your Rights</h2>
            <p>You can unsubscribe from our emails at any time using the link in each message. You can also contact us to request deletion of your personal data.</p>

            <h2>Cookies</h2>
            <p>This website uses minimal cookies necessary for site functionality. We do not use tracking cookies or third-party advertising cookies.</p>

            <h2>Contact</h2>
            <p>If you have questions about your data or this policy, please <a href="/contact" style={{ color: 'var(--color-red)' }}>get in touch</a>.</p>
          </div>
        </section>
      </main>
    </>
  )
}
