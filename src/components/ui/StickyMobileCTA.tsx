import { useState, useEffect } from 'react'
import { trackOutboundClick, SHOP_URL } from '@/utils/tracking'
import './StickyMobileCTA.css'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleScroll = () => {
      // Show after scrolling past ~600px (below hero)
      setVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (dismissed) return null

  return (
    <div className={`sticky-cta ${visible ? 'sticky-cta--visible' : ''}`} aria-hidden={!visible}>
      <div className="sticky-cta__inner">
        <a
          href={SHOP_URL}
          className="sticky-cta__link"
          tabIndex={visible ? 0 : -1}
          onClick={() => trackOutboundClick({ button_location: 'sticky_mobile_cta', destination_url: SHOP_URL })}
        >
          Shop at My Chi and Me
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2v6"/>
          </svg>
        </a>
        <button
          className="sticky-cta__dismiss"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss shop prompt"
          tabIndex={visible ? 0 : -1}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
