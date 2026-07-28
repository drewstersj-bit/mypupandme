import SEOHead from '@/components/seo/SEOHead'

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions"
        description="Terms and conditions for using the My Pup and Me website."
        canonical="/terms"
      />

      <main id="main-content">
        <section className="section">
          <div className="container container--narrow">
            <h1>Terms &amp; Conditions</h1>
            <p style={{ marginBottom: '2rem', color: '#999' }}>Last updated: December 2024</p>

            <h2>About This Website</h2>
            <p>My Pup and Me (mypupandme.co.uk) is a brand website operated by the team behind My Chi and Me. Product purchases are completed through the My Chi and Me Shopify store.</p>

            <h2>Product Information</h2>
            <p>We make every effort to ensure product descriptions, images and pricing are accurate. If you notice any errors, please let us know. Prices are shown in GBP and include VAT where applicable.</p>

            <h2>Purchasing</h2>
            <p>When you click to purchase a product, you will be directed to our Shopify store where the transaction is completed. Delivery, returns and payment are governed by the terms of that store.</p>

            <h2>Newsletter</h2>
            <p>By subscribing to our newsletter, you consent to receiving email communications about products and small-dog advice. You may unsubscribe at any time.</p>

            <h2>Intellectual Property</h2>
            <p>All content on this website including images, text, logos and design is the property of My Pup and Me and may not be reproduced without permission.</p>

            <h2>Contact</h2>
            <p>For questions about these terms, please <a href="/contact" style={{ color: '#E63946' }}>contact us</a>.</p>
          </div>
        </section>
      </main>
    </>
  )
}
