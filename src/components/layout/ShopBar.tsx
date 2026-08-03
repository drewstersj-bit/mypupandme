import { Link } from 'react-router-dom'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './ShopBar.css'

export default function ShopBar() {
  return (
    <div className="shop-bar">
      <div className="container shop-bar__inner">
        <p className="shop-bar__text">
          Buy directly here with PayPal, or <strong>shop a wider range of products at My Chi and Me</strong>.
        </p>
        <Link to="/collection" className="shop-bar__btn">
          Shop Here
        </Link>
        <a
          href={SHOP_URL}
          className="shop-bar__btn shop-bar__btn--secondary"
          onClick={() => trackOutboundClick({ button_location: 'shop_bar', destination_url: SHOP_URL })}
        >
          Browse My Chi and Me
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2v6"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
