import { useState, type FormEvent } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import './ContactPage.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with the My Pup and Me team. We'd love to hear from you about our harnesses and leads for small dogs."
        canonical="/contact"
      />

      <main id="main-content" className="contact-page">
        <section className="section">
          <div className="container container--narrow">
            <h1>Contact Us</h1>
            <p className="contact-page__intro">
              Have a question about sizing, patterns or anything else? We'd love to hear from you.
            </p>

            {submitted ? (
              <div className="contact-page__success" role="alert">
                <p><strong>Thank you for your message.</strong></p>
                <p>We'll get back to you as soon as we can.</p>
              </div>
            ) : (
              <form
                className="contact-page__form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="sr-only">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <div className="contact-page__field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--md">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
