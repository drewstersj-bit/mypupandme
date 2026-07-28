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
          <svg className="email-signup__heart" width="24" height="24" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 18s-7-4.5-7-10.5C3 4.5 5.5 2 8.5 2c1.5 0 2.7.8 3 1.2.3-.4 1.5-1.2 3-1.2C17.5 2 20 4.5 20 7.5 20 13.5 10 18 10 18z" fill="#E63946" transform="translate(-3,-1) scale(0.9)"/>
          </svg>
          <h2 id="signup-heading">Join the little-dog club.</h2>
          <p>New prints, useful advice and first looks—straight to your inbox.</p>

          {submitted ? (
            <div className="email-signup__success" role="alert">
              <p>You're in. We'll be in touch with news and new arrivals.</p>
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
                By signing up you agree to receive emails from My Pup and Me.
                Unsubscribe any time. <Link to="/privacy">Privacy Policy</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
