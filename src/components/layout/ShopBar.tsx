import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './ShopBar.css'

export default function ShopBar() {
  return (
    <div className="shop-bar">
      <div className="container shop-bar__inner">
        <p className="shop-bar__text">
          Ready to shop? The My Pup and Me collection is currently available exclusively from our sister site, <strong>My Chi and Me</strong>.
        </p>
        <a
          href={SHOP_URL}
          className="shop-bar__btn"
          onClick={() => trackOutboundClick({ button_location: 'shop_bar', destination_url: SHOP_URL })}
        >
          Shop at My Chi and Me
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2v6"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
