import { useCart } from '@/context/CartContext'
import PayPalButton from './PayPalButton'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart()

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
              <div className="cart-drawer__total">
                <span>Total</span>
                <span>£{totalPrice.toFixed(2)}</span>
              </div>
              <p className="cart-drawer__shipping-note">Shipping and returns handled by My Chi and Me</p>
              <PayPalButton onSuccess={clearCart} />
            </div>
          </>
        )}
      </aside>
    </>
  )
}
