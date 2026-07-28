/**
 * Outbound shop click tracking layer.
 * Fires a custom event that can be picked up by any analytics provider.
 * No provider is configured yet — this prepares the data cleanly.
 */

interface OutboundClickEvent {
  event: 'outbound_shop_click'
  product_name?: string
  product_pattern?: string
  button_location: string
  destination_url: string
}

export function trackOutboundClick(data: Omit<OutboundClickEvent, 'event'>) {
  const event: OutboundClickEvent = {
    event: 'outbound_shop_click',
    ...data,
  }

  // Push to dataLayer if available (GTM-compatible)
  if (typeof window !== 'undefined' && Array.isArray((window as unknown as { dataLayer: unknown[] }).dataLayer)) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push(event)
  }

  // Also dispatch a custom DOM event for future use
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('outbound_shop_click', { detail: event }))
  }
}

export const SHOP_URL = 'https://mychiandme.co.uk/collections/my-pup-and-me'
