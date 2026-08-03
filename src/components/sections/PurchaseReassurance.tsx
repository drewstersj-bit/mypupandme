import { Link } from 'react-router-dom'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './PurchaseReassurance.css'

const points = [
  'Buy directly here with PayPal',
  'Shipping and returns handled by My Chi and Me',
  'The same trusted team behind both brands',
]

export default function PurchaseReassurance() {
  return (
    <section className="section purchase-reassurance" aria-labelledby="reassurance-heading">
      <div className="container">
        <div className="purchase-reassurance__inner">
          <h2 id="reassurance-heading">Ready to buy?</h2>
          <p className="purchase-reassurance__intro">
            Purchase directly here via PayPal, or browse the wider My Chi and Me collection for more small-dog accessories.
          </p>
          <div className="purchase-reassurance__points">
            {points.map((point) => (
              <div key={point} className="purchase-reassurance__point">
                <svg className="purchase-reassurance__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 8l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="purchase-reassurance__buttons">
            <Link to="/collection" className="btn btn--primary btn--lg">
              Shop the Collection
            </Link>
            <a
              href={SHOP_URL}
              className="purchase-reassurance__wider-link"
              onClick={() => trackOutboundClick({ button_location: 'purchase_reassurance_wider', destination_url: SHOP_URL })}
            >
              Shop a wider range at My Chi and Me
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6"/>
              </svg>
            </a>
          </div>
          <div className="purchase-reassurance__payments" aria-label="Accepted payment methods">
            <svg width="38" height="24" viewBox="0 0 38 24" aria-label="PayPal"><rect width="38" height="24" rx="4" fill="#fff" stroke="#ddd" strokeWidth="0.5"/><text x="19" y="15" textAnchor="middle" fontSize="8" fontWeight="700" fill="#003087" fontFamily="sans-serif">Pay</text><text x="19" y="15" textAnchor="middle" fontSize="8" fontWeight="700" fill="#009cde" fontFamily="sans-serif" dx="10">Pal</text></svg>
            <svg width="38" height="24" viewBox="0 0 38 24" aria-label="Visa"><rect width="38" height="24" rx="4" fill="#fff" stroke="#ddd" strokeWidth="0.5"/><text x="19" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a1f71" fontFamily="sans-serif">VISA</text></svg>
            <svg width="38" height="24" viewBox="0 0 38 24" aria-label="Mastercard"><rect width="38" height="24" rx="4" fill="#fff" stroke="#ddd" strokeWidth="0.5"/><circle cx="15" cy="12" r="7" fill="#eb001b" opacity="0.8"/><circle cx="23" cy="12" r="7" fill="#f79e1b" opacity="0.8"/></svg>
          </div>
        </div>
      </div>
    </section>
  )
}
