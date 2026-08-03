import { useEffect, useRef } from 'react'
import { useCart } from '@/context/CartContext'
import './PayPalButton.css'

/**
 * PayPal Checkout Button
 *
 * Uses the PayPal JavaScript SDK to render checkout buttons.
 * Replace PAYPAL_CLIENT_ID in the script src with your real client ID.
 *
 * For sandbox testing use: sb
 * For production use your PayPal Business client ID
 */

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'sb'

interface PayPalButtonProps {
  onSuccess: () => void
}

export default function PayPalButton({ onSuccess }: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { items, totalPrice } = useCart()
  const renderedRef = useRef(false)

  useEffect(() => {
    if (renderedRef.current || !containerRef.current || items.length === 0) return

    // Load PayPal SDK if not already loaded
    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=GBP`
      script.async = true
      script.onload = () => renderButtons()
      document.head.appendChild(script)
    } else {
      renderButtons()
    }

    function renderButtons() {
      if (!containerRef.current || renderedRef.current) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const paypal = (window as any).paypal
      if (!paypal) return

      renderedRef.current = true
      paypal.Buttons({
        style: {
          layout: 'vertical',
          shape: 'rect',
          label: 'paypal',
          height: 45,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              description: 'My Pup and Me order',
              amount: {
                currency_code: 'GBP',
                value: totalPrice.toFixed(2),
                breakdown: {
                  item_total: { currency_code: 'GBP', value: totalPrice.toFixed(2) },
                },
              },
              items: items.map((item) => ({
                name: `${item.name} (${item.size})`,
                unit_amount: { currency_code: 'GBP', value: item.price.toFixed(2) },
                quantity: String(item.quantity),
                category: 'PHYSICAL_GOODS',
              })),
            }],
          })
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onApprove: async (_data: any, actions: any) => {
          await actions.order.capture()
          onSuccess()
          alert('Payment successful! Thank you for your order. My Chi and Me will handle delivery.')
        },
        onError: (err: Error) => {
          console.error('PayPal error:', err)
          alert('Payment could not be completed. Please try again.')
        },
      }).render(containerRef.current)
    }

    return () => {
      renderedRef.current = false
    }
  }, [items, totalPrice, onSuccess])

  if (items.length === 0) return null

  return (
    <div className="paypal-button-container">
      <div ref={containerRef} id="paypal-buttons" />
      <p className="paypal-button-container__note">Secure payment via PayPal</p>
    </div>
  )
}
