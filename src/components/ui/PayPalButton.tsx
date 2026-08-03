import { useEffect, useRef, useCallback } from 'react'
import { useCart } from '@/context/CartContext'
import './PayPalButton.css'

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'sb'

interface PayPalButtonProps {
  onSuccess: () => void
  orderTotal?: number
}

export default function PayPalButton({ onSuccess, orderTotal }: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { items, totalPrice } = useCart()
  const buttonsRendered = useRef(false)
  const finalTotal = orderTotal ?? totalPrice

  const renderButtons = useCallback(() => {
    if (!containerRef.current || buttonsRendered.current) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paypal = (window as any).paypal
    if (!paypal) return

    // Clear any existing buttons first
    containerRef.current.innerHTML = ''
    buttonsRendered.current = true

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
              value: finalTotal.toFixed(2),
              breakdown: {
                item_total: { currency_code: 'GBP', value: totalPrice.toFixed(2) },
                shipping: { currency_code: 'GBP', value: (finalTotal - totalPrice).toFixed(2) },
              },
            },
            items: items.map((item) => ({
              name: `${item.name} (${item.size})`,
              unit_amount: { currency_code: 'GBP', value: item.price.toFixed(2) },
              quantity: String(item.quantity),
              category: 'PHYSICAL_GOODS' as const,
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
  }, [items, totalPrice, finalTotal, onSuccess])

  useEffect(() => {
    if (items.length === 0) return

    // Reset rendered state when items change so buttons can re-render with new totals
    buttonsRendered.current = false
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
    }

    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]')
    if (existingScript) {
      renderButtons()
    } else {
      const script = document.createElement('script')
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=GBP`
      script.async = true
      script.onload = () => renderButtons()
      document.head.appendChild(script)
    }
  }, [items, finalTotal, renderButtons])

  if (items.length === 0) return null

  return (
    <div className="paypal-button-container">
      <div ref={containerRef} />
      <p className="paypal-button-container__note">Secure payment via PayPal</p>
    </div>
  )
}
