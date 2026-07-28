import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './PurchaseReassurance.css'

const points = [
  'Secure checkout at mychiandme.co.uk',
  'Delivery and returns handled by My Chi and Me',
  'The same team behind both brands',
]

export default function PurchaseReassurance() {
  return (
    <section className="section purchase-reassurance" aria-labelledby="reassurance-heading">
      <div className="container">
        <div className="purchase-reassurance__inner">
          <h2 id="reassurance-heading">Found the right one?</h2>
          <p className="purchase-reassurance__intro">
            The complete My Pup and Me collection is available from My Chi and Me, our trusted sister website for Chihuahuas, puppies and small dogs.
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
          <a
            href={SHOP_URL}
            className="btn btn--primary btn--lg"
            onClick={() => trackOutboundClick({ button_location: 'purchase_reassurance', destination_url: SHOP_URL })}
          >
            Shop My Pup and Me at My Chi and Me
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
