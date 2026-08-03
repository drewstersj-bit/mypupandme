import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import PayPalButton from './PayPalButton'
import './CartDrawer.css'

type ShippingMethod = 'tracked48' | 'tracked24' | 'international'

const SHIPPING_OPTIONS = {
  tracked48: { label: 'RM Tracked 48 (2-3 working days)', price: 3.99 },
  tracked24: { label: 'RM Tracked 24 (1-2 working days)', price: 5.75 },
  international: { label: 'RM International Tracked & Signed', price: 25.00 },
}

const FREE_SHIPPING_THRESHOLD = 75.00

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart()
  const [shipping, setShipping] = useState<ShippingMethod>('tracked48')

  const qualifiesForFree = totalPrice >= FREE_SHIPPING_THRESHOLD
  const shippingCost = (shipping === 'tracked48' && qualifiesForFree) ? 0 : SHIPPING_OPTIONS[shipping].price
  const orderTotal = totalPrice + shippingCost
  const amountToFree = FREE_SHIPPING_THRESHOLD - totalPrice

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={closeCart} aria-hidden="true" />}
      <aside
        className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
      >
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Your Bag ({totalItems})</h2>
          <button className="cart-drawer__close" onClick={closeCart} aria-label="Close bag">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l10 10M15 5l-10 10"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>Your bag is empty</p>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="cart-drawer__shipping-progress">
              {qualifiesForFree ? (
                <p className="cart-drawer__free-qualified">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 7l3 3 5-5"/></svg>
                  You qualify for free UK delivery!
                </p>
              ) : (
                <>
                  <p className="cart-drawer__free-message">Spend £{amountToFree.toFixed(2)} more for free UK delivery</p>
                  <div className="cart-drawer__progress-bar">
                    <div className="cart-drawer__progress-fill" style={{ width: `${Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }} />
                  </div>
                </>
              )}
            </div>

            <div className="cart-drawer__items">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="cart-drawer__item">
                  <img src={item.image} alt={item.name} className="cart-drawer__item-img" width="72" height="90" />
                  <div className="cart-drawer__item-info">
                    <p className="cart-drawer__item-name">{item.name}</p>
                    <p className="cart-drawer__item-size">Size: {item.size}</p>
                    <p className="cart-drawer__item-price">£{item.price.toFixed(2)}</p>
                    <div className="cart-drawer__item-qty">
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >-</button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >+</button>
                    </div>
                  </div>
                  <button
                    className="cart-drawer__item-remove"
                    onClick={() => removeItem(item.productId, item.size)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M3 3l8 8M11 3l-8 8"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-drawer__footer">
              {/* Shipping selector */}
              <div className="cart-drawer__shipping-selector">
                <label className="cart-drawer__shipping-label">Delivery method</label>
                {(Object.entries(SHIPPING_OPTIONS) as [ShippingMethod, typeof SHIPPING_OPTIONS.tracked48][]).map(([key, opt]) => (
                  <label key={key} className={`cart-drawer__shipping-option ${shipping === key ? 'cart-drawer__shipping-option--active' : ''}`}>
                    <input
                      type="radio"
                      name="shipping"
                      value={key}
                      checked={shipping === key}
                      onChange={() => setShipping(key)}
                      className="sr-only"
                    />
                    <span className="cart-drawer__shipping-option-text">
                      {opt.label}
                      {key === 'tracked48' && qualifiesForFree && <span className="cart-drawer__free-badge">FREE</span>}
                    </span>
                    <span className="cart-drawer__shipping-option-price">
                      {key === 'tracked48' && qualifiesForFree ? <s>£{opt.price.toFixed(2)}</s> : `£${opt.price.toFixed(2)}`}
                    </span>
                  </label>
                ))}
              </div>

              <div className="cart-drawer__totals">
                <div className="cart-drawer__total-line">
                  <span>Subtotal</span>
                  <span>£{totalPrice.toFixed(2)}</span>
                </div>
                <div className="cart-drawer__total-line">
                  <span>Delivery</span>
                  <span>{shippingCost === 0 ? 'FREE' : `£${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="cart-drawer__total-line cart-drawer__total-line--grand">
                  <span>Total</span>
                  <span>£{orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <p className="cart-drawer__shipping-note">Shipping and returns handled by My Chi and Me</p>
              <PayPalButton onSuccess={clearCart} orderTotal={orderTotal} />
            </div>
          </>
        )}
      </aside>
    </>
  )
}
