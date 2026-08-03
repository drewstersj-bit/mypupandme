import { useState, type FormEvent } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import './WholesalePage.css'

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    businessType: 'pet-shop',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.businessName || !formData.contactName || !formData.email) return
    setSubmitting(true)

    try {
      const body = new URLSearchParams()
      body.append('form-name', 'wholesale')
      body.append('businessName', formData.businessName)
      body.append('contactName', formData.contactName)
      body.append('email', formData.email)
      body.append('phone', formData.phone)
      body.append('website', formData.website)
      body.append('businessType', formData.businessType)
      body.append('message', formData.message)

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please email info@mychiandme.co.uk directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead
        title="Wholesale Enquiries | My Pup and Me"
        description="Interested in stocking My Pup and Me harnesses and leads? Get in touch with our trade team to discuss wholesale pricing and minimum orders."
        canonical="/wholesale"
      />

      <main id="main-content" className="wholesale-page">
        <section className="section">
          <div className="container container--narrow">
            <h1>Wholesale Enquiries</h1>
            <p className="wholesale-page__intro">
              Interested in stocking My Pup and Me? We work with independent pet shops, groomers, dog-friendly boutiques and online retailers across the UK.
            </p>

            <div className="wholesale-page__benefits">
              <h2>Why stock My Pup and Me?</h2>
              <ul>
                <li>Lightweight harnesses designed specifically for small dogs and puppies</li>
                <li>Four distinctive fabric patterns with matching leads</li>
                <li>Sizes XXS to S covering Chihuahuas, toy breeds and puppies</li>
                <li>Strong retail margins</li>
                <li>Growing brand with dedicated website and social presence</li>
                <li>Reliable UK-based fulfilment</li>
              </ul>
            </div>

            {submitted ? (
              <div className="wholesale-page__success" role="alert">
                <h2>Thank you for your enquiry</h2>
                <p>We have received your details and will be in touch within 2 working days to discuss trade pricing and minimum orders.</p>
                <p>In the meantime, if you have any questions please email <a href="mailto:info@mychiandme.co.uk">info@mychiandme.co.uk</a>.</p>
              </div>
            ) : (
              <>
                <h2>Apply for a trade account</h2>
                <p>Fill in the form below and we will get back to you with pricing, minimum order quantities and delivery information.</p>

                <form
                  className="wholesale-page__form"
                  name="wholesale"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="wholesale" />
                  <p className="sr-only">
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>

                  <div className="wholesale-page__field">
                    <label htmlFor="ws-business">Business name *</label>
                    <input
                      id="ws-business"
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>

                  <div className="wholesale-page__field">
                    <label htmlFor="ws-contact">Contact name *</label>
                    <input
                      id="ws-contact"
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>

                  <div className="wholesale-page__row">
                    <div className="wholesale-page__field">
                      <label htmlFor="ws-email">Email *</label>
                      <input
                        id="ws-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="wholesale-page__field">
                      <label htmlFor="ws-phone">Phone</label>
                      <input
                        id="ws-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="wholesale-page__field">
                    <label htmlFor="ws-website">Website or social media</label>
                    <input
                      id="ws-website"
                      type="text"
                      name="website"
                      placeholder="e.g. www.yourshop.co.uk or @instagram"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  <div className="wholesale-page__field">
                    <label htmlFor="ws-type">Type of business</label>
                    <select
                      id="ws-type"
                      name="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    >
                      <option value="pet-shop">Pet shop</option>
                      <option value="groomer">Dog groomer</option>
                      <option value="boutique">Boutique / gift shop</option>
                      <option value="online">Online retailer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="wholesale-page__field">
                    <label htmlFor="ws-message">Tell us about your business (optional)</label>
                    <textarea
                      id="ws-message"
                      name="message"
                      rows={4}
                      placeholder="e.g. number of stores, breeds you specialise in, expected order volume"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn--primary btn--lg" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Trade Enquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
