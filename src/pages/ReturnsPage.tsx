import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@/components/seo/SEOHead'
import './ReturnsPage.css'

export default function ReturnsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderRef: '',
    reason: 'wrong-size',
    items: '',
    comments: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.items) return
    setSubmitting(true)

    try {
      const body = new URLSearchParams()
      body.append('form-name', 'returns')
      body.append('name', formData.name)
      body.append('email', formData.email)
      body.append('orderRef', formData.orderRef)
      body.append('reason', formData.reason)
      body.append('items', formData.items)
      body.append('comments', formData.comments)

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
        title="Returns Centre | My Pup and Me"
        description="Request a return or exchange for your My Pup and Me order. Simple online form - we aim to process all returns within 7 working days."
        canonical="/returns"
      />

      <main id="main-content" className="returns-page">
        <section className="section">
          <div className="container container--narrow">
            <h1>Returns Centre</h1>
            <p className="returns-page__intro">
              Need to return or exchange an item? Complete the form below and we will email you a return reference within 1 working day.
            </p>

            <div className="returns-page__info">
              <h3>Before you start</h3>
              <ul>
                <li>Returns must be requested within 14 days of receiving your order</li>
                <li>Items must be unworn, with tags attached and in original condition</li>
                <li>You will need to post the item back to us (return postage at your cost)</li>
              </ul>
              <p><strong>Return address:</strong> My Chi and Me, PO Box 754, Oldham, OL1 9QN</p>
              <p>For full details see our <Link to="/delivery-returns">Delivery and Returns Policy</Link>.</p>
            </div>

            {submitted ? (
              <div className="returns-page__success" role="alert">
                <h2>Return request received</h2>
                <p>Thank you. We will email you a return reference number within 1 working day.</p>
                <p>Please do not send your return until you have received your reference number.</p>
                <p>If you have any questions, email <a href="mailto:info@mychiandme.co.uk">info@mychiandme.co.uk</a>.</p>
              </div>
            ) : (
              <form
                className="returns-page__form"
                name="returns"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="returns" />
                <p className="sr-only">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div className="returns-page__field">
                  <label htmlFor="return-name">Your name</label>
                  <input
                    id="return-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="returns-page__field">
                  <label htmlFor="return-email">Email address</label>
                  <input
                    id="return-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="returns-page__field">
                  <label htmlFor="return-order">PayPal transaction/order reference (if known)</label>
                  <input
                    id="return-order"
                    type="text"
                    name="orderRef"
                    value={formData.orderRef}
                    onChange={(e) => setFormData({ ...formData, orderRef: e.target.value })}
                  />
                </div>

                <div className="returns-page__field">
                  <label htmlFor="return-reason">Reason for return</label>
                  <select
                    id="return-reason"
                    name="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  >
                    <option value="wrong-size">Wrong size</option>
                    <option value="changed-mind">Changed my mind</option>
                    <option value="faulty">Item is faulty or damaged</option>
                    <option value="not-as-described">Item not as described</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="returns-page__field">
                  <label htmlFor="return-items">Item(s) to return (name, size, pattern)</label>
                  <textarea
                    id="return-items"
                    name="items"
                    rows={3}
                    required
                    placeholder="e.g. Blue Meadow Floral Harness, size XS"
                    value={formData.items}
                    onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                  />
                </div>

                <div className="returns-page__field">
                  <label htmlFor="return-comments">Additional comments (optional)</label>
                  <textarea
                    id="return-comments"
                    name="comments"
                    rows={3}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--lg" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Return Request'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
