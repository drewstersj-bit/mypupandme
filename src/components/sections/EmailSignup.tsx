import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './EmailSignup.css'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section className="section email-signup" aria-labelledby="signup-heading">
      <div className="container">
        <div className="email-signup__inner">
          <h2 id="signup-heading">Join our little-dog club.</h2>
          <p>Be first to discover new prints, new products and useful advice for life with a little dog.</p>

          {submitted ? (
            <div className="email-signup__success" role="alert">
              <p>Thank you for joining! We'll be in touch with news and new arrivals.</p>
            </div>
          ) : (
            <form
              className="email-signup__form"
              name="newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p className="sr-only">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <div className="email-signup__field">
                <label htmlFor="signup-email" className="sr-only">Email address</label>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  className={`email-signup__input ${error ? 'email-signup__input--error' : ''}`}
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-required="true"
                  aria-describedby={error ? 'signup-error' : undefined}
                />
                <button type="submit" className="btn btn--primary btn--md">
                  Sign Up
                </button>
              </div>
              {error && (
                <p id="signup-error" className="email-signup__error" role="alert">{error}</p>
              )}
              <p className="email-signup__consent">
                By signing up, you agree to receive email communications from My Pup and Me.
                You can unsubscribe at any time. View our{' '}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
