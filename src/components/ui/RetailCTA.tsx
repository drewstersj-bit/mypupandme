import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './RetailCTA.css'

interface RetailCTAProps {
  heading?: string
  copy?: string
  buttonText?: string
  location: string
}

export default function RetailCTA({
  heading = 'Ready to find their fit?',
  copy = 'Explore My Pup and Me harnesses in XXS, XS and S. The collection is available to purchase from our sister website, My Chi and Me.',
  buttonText = 'Shop at My Chi and Me',
  location,
}: RetailCTAProps) {
  return (
    <aside className="retail-cta" aria-label="Purchase information">
      <h3 className="retail-cta__heading">{heading}</h3>
      <p className="retail-cta__copy">{copy}</p>
      <a
        href={SHOP_URL}
        className="btn btn--primary btn--md retail-cta__btn"
        onClick={() => trackOutboundClick({ button_location: location, destination_url: SHOP_URL })}
      >
        {buttonText}
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M2 10L10 2M10 2H4M10 2v6"/>
        </svg>
      </a>
    </aside>
  )
}
