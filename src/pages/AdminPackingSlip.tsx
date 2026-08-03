import { useState } from 'react'
import { products } from '@/data/products'
import './AdminPackingSlip.css'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'mpam2026'

interface OrderItem {
  description: string
  qty: number
}

export default function AdminPackingSlip() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [orderNumber, setOrderNumber] = useState('')
  const [orderDate, setOrderDate] = useState(new Date().toLocaleDateString('en-GB'))
  const [shippingMethod, setShippingMethod] = useState('RM Tracked 48 2-3 Working Days from 1st scan')

  const [billName, setBillName] = useState('')
  const [billAddress, setBillAddress] = useState('')

  const [postName, setPostName] = useState('')
  const [postAddress, setPostAddress] = useState('')

  const [items, setItems] = useState<OrderItem[]>([{ description: '', qty: 1 }])

  const [showPreview, setShowPreview] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  const addItem = () => setItems([...items, { description: '', qty: 1 }])
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index))
  const updateItem = (index: number, field: keyof OrderItem, value: string | number) => {
    setItems(items.map((item, i) => i === index ? { ...item, [field]: value } : item))
  }

  const copyBillToPost = () => {
    setPostName(billName)
    setPostAddress(billAddress)
  }

  const handlePrint = () => {
    setShowPreview(true)
    setTimeout(() => window.print(), 300)
  }

  if (!authenticated) {
    return (
      <main id="main-content" className="admin-login">
        <div className="admin-login__box">
          <h1>Admin Login</h1>
          <p>Enter your password to access the packing slip generator.</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
            />
            <button type="submit" className="btn btn--primary btn--md">Log In</button>
            {error && <p className="admin-login__error">{error}</p>}
          </form>
        </div>
      </main>
    )
  }

  if (showPreview) {
    return (
      <div className="packing-slip" id="packing-slip-print">
        <div className="packing-slip__header">
          <h1 className="packing-slip__brand">MY PUP AND ME</h1>
          <div className="packing-slip__meta">
            <p><strong>Order</strong> #{orderNumber}</p>
            <p><strong>Date</strong> {orderDate}</p>
            <p><strong>Shipping</strong> {shippingMethod}</p>
          </div>
        </div>

        <div className="packing-slip__addresses">
          <div>
            <p className="packing-slip__address-label"><strong>Bill to</strong></p>
            <p className="packing-slip__address-text">{billName}</p>
            <p className="packing-slip__address-text">{billAddress.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
          </div>
          <div>
            <p className="packing-slip__address-label"><strong>Post to</strong></p>
            <p className="packing-slip__address-text">{postName}</p>
            <p className="packing-slip__address-text">{postAddress.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
          </div>
        </div>

        <table className="packing-slip__table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{item.description}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="packing-slip__returns">
          <p>We accept returns within 14 DAYS OF ORDER of pristine items with tags attached in their original packaging for a refund or exchange. We reserve the right to refuse returns on items which are not in an as new resale-able condition with labels attached or missing packaging. Faulty goods will be refunded or exchanged. Some items where stated on our product description cannot be returned. To arrange your return please visit mypupandme.co.uk/returns</p>
          <p className="packing-slip__contact">If you have any questions, please do get in contact.</p>
          <p className="packing-slip__footer-address">My Pup and Me / Address P.O. Box 754 / Oldham, OL1 9QN / United Kingdom / Email info@mychiandme.co.uk</p>
        </div>

        <button className="packing-slip__back-btn no-print" onClick={() => setShowPreview(false)}>
          Back to Editor
        </button>
      </div>
    )
  }

  return (
    <main id="main-content" className="admin-packing">
      <div className="container">
        <h1>Packing Slip Generator</h1>
        <p className="admin-packing__subtitle">Fill in the order details below, then click Print to generate the packing slip.</p>

        <div className="admin-packing__form">
          <div className="admin-packing__section">
            <h2>Order Details</h2>
            <div className="admin-packing__row">
              <div className="admin-packing__field">
                <label>Order Number</label>
                <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} placeholder="e.g. 1001" />
              </div>
              <div className="admin-packing__field">
                <label>Date</label>
                <input type="text" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
              </div>
            </div>
            <div className="admin-packing__field">
              <label>Shipping Method</label>
              <select value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}>
                <option>RM Tracked 48 2-3 Working Days from 1st scan</option>
                <option>RM Tracked 24 1-2 Working Days from 1st scan</option>
                <option>RM International Tracked and Signed</option>
              </select>
            </div>
          </div>

          <div className="admin-packing__section">
            <h2>Bill To</h2>
            <div className="admin-packing__field">
              <label>Name</label>
              <input type="text" value={billName} onChange={(e) => setBillName(e.target.value)} placeholder="Customer name" />
            </div>
            <div className="admin-packing__field">
              <label>Address</label>
              <textarea rows={4} value={billAddress} onChange={(e) => setBillAddress(e.target.value)} placeholder="Street&#10;Town&#10;County&#10;Postcode" />
            </div>
          </div>

          <div className="admin-packing__section">
            <div className="admin-packing__section-header">
              <h2>Post To</h2>
              <button type="button" className="admin-packing__copy-btn" onClick={copyBillToPost}>Same as billing</button>
            </div>
            <div className="admin-packing__field">
              <label>Name</label>
              <input type="text" value={postName} onChange={(e) => setPostName(e.target.value)} placeholder="Recipient name" />
            </div>
            <div className="admin-packing__field">
              <label>Address</label>
              <textarea rows={4} value={postAddress} onChange={(e) => setPostAddress(e.target.value)} placeholder="Street&#10;Town&#10;County&#10;Postcode" />
            </div>
          </div>

          <div className="admin-packing__section">
            <h2>Items</h2>
            {items.map((item, i) => (
              <div key={i} className="admin-packing__item-row">
                <div className="admin-packing__field admin-packing__field--grow">
                  <label>Description</label>
                  <select
                    value={item.description}
                    onChange={(e) => updateItem(i, 'description', e.target.value)}
                  >
                    <option value="">Select a product...</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} {p.sizes.length > 0 ? `(${p.sizes.join('/')})` : ''}
                      </option>
                    ))}
                    <option value="__custom">Custom item...</option>
                  </select>
                  {item.description === '__custom' && (
                    <input
                      type="text"
                      className="admin-packing__custom-input"
                      placeholder="Type custom description"
                      onChange={(e) => updateItem(i, 'description', e.target.value)}
                    />
                  )}
                </div>
                <div className="admin-packing__field admin-packing__field--qty">
                  <label>Qty</label>
                  <input type="number" min="1" value={item.qty} onChange={(e) => updateItem(i, 'qty', parseInt(e.target.value) || 1)} />
                </div>
                {items.length > 1 && (
                  <button type="button" className="admin-packing__remove-item" onClick={() => removeItem(i)} aria-label="Remove item">x</button>
                )}
              </div>
            ))}
            <button type="button" className="admin-packing__add-item" onClick={addItem}>+ Add another item</button>
          </div>

          <div className="admin-packing__actions">
            <button className="btn btn--primary btn--lg" onClick={handlePrint}>
              Preview and Print
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
