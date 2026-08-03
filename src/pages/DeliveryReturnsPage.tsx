import SEOHead from '@/components/seo/SEOHead'
import './DeliveryReturnsPage.css'

export default function DeliveryReturnsPage() {
  return (
    <>
      <SEOHead
        title="Delivery & Returns | My Pup and Me"
        description="UK delivery £3.99 via Royal Mail Tracked 48. Easy returns within 14 days. Shipping and returns handled by My Chi and Me."
        canonical="/delivery-returns"
      />

      <main id="main-content" className="delivery-returns-page">
        <section className="section">
          <div className="container container--narrow">
            <h1>Delivery and Returns</h1>
            <p className="delivery-returns-page__updated">Last updated: August 2026</p>

            <div className="delivery-returns-page__highlight">
              <p><strong>Free UK delivery on orders over £75</strong> via Royal Mail Tracked 48. Standard delivery from £3.99.</p>
            </div>

            <h2>Delivery</h2>

            <h3>How we ship</h3>
            <p>We offer the following delivery options for UK orders:</p>
            <ul>
              <li><strong>Royal Mail Tracked 48</strong> - 2-3 working days from first scan - £3.99</li>
              <li><strong>Royal Mail Tracked 24</strong> - 1-2 working days from first scan - £5.75</li>
              <li><strong>Free delivery (RM Tracked 48)</strong> - on orders of £75.00 and over</li>
            </ul>
            <p>For international orders:</p>
            <ul>
              <li><strong>Royal Mail International Tracked and Signed</strong> - £25.00</li>
            </ul>

            <h3>Despatch times</h3>
            <p>We aim to despatch all orders within 2 working days of payment being received. Orders placed on weekends or bank holidays will be despatched on the next working day.</p>

            <h3>Tracking</h3>
            <p>You will receive a tracking number by email once your order has been despatched. You can track your parcel at <a href="https://www.royalmail.com/track-your-item" target="_blank" rel="noopener noreferrer">royalmail.com/track-your-item</a>.</p>

            <h3>Delivery address</h3>
            <p>Please ensure your delivery address is correct when placing your order via PayPal. We cannot be responsible for orders sent to incorrect addresses provided at checkout.</p>

            <h3>If your order has not arrived</h3>
            <p>If your order has not arrived within 5 working days of despatch, please contact us at <a href="mailto:info@mychiandme.co.uk">info@mychiandme.co.uk</a> and we will investigate with Royal Mail.</p>

            <h2>Returns</h2>

            <h3>Your right to cancel</h3>
            <p>Under the Consumer Contracts Regulations 2013, you have the right to cancel your order within 14 days of receiving your goods. You then have a further 14 days to return the goods to us.</p>

            <h3>Condition of returned goods</h3>
            <p>Items must be returned in their original condition with all tags attached. Please try items on your dog carefully and avoid removing tags. Items that have been worn outdoors, washed, soiled or damaged cannot be accepted for return.</p>

            <h3>How to return an item</h3>
            <ol>
              <li>Submit a return request through our <a href="/returns">Returns Centre</a></li>
              <li>You will receive a confirmation email with your return reference number</li>
              <li>Include your return reference with the item(s)</li>
              <li>Send your return to: <strong>My Chi and Me, PO Box 754, Oldham, OL1 9QN</strong></li>
            </ol>

            <div className="delivery-returns-page__note">
              <p><strong>Important:</strong> Most couriers (including Evri) do not deliver to PO Box addresses. We recommend Royal Mail Tracked 48 or Second Class Signed For for returns. Please retain your proof of postage.</p>
            </div>

            <h3>Return postage</h3>
            <p>Return postage is the responsibility of the customer unless the item is faulty or not as described.</p>

            <h3>Refunds</h3>
            <p>Refunds will be processed to your original PayPal account within 7 working days of receiving your return. Please allow up to 10 working days for the refund to appear in your account.</p>

            <h2>Faulty or Damaged Goods</h2>
            <p>If you receive a faulty or damaged item, please contact us within 48 hours of receipt at <a href="mailto:info@mychiandme.co.uk">info@mychiandme.co.uk</a> with a photograph of the fault. We will arrange a replacement or full refund and cover the cost of return postage for confirmed faulty items.</p>

            <h2>Sizing Issues</h2>
            <p>If an item does not fit, returns are accepted within the standard 14-day window provided items are unworn and in original condition with tags attached. Please see our <a href="/size-guide">Size Guide</a> before ordering and contact us if you need sizing advice.</p>

            <h2>Who handles delivery and returns?</h2>
            <p>All shipping and returns for My Pup and Me are handled by our sister company, <strong>My Chi and Me</strong>. For any queries, please email <a href="mailto:info@mychiandme.co.uk">info@mychiandme.co.uk</a>.</p>

            <p className="delivery-returns-page__legal">Nothing in this policy affects your statutory rights as a consumer under the Consumer Contracts Regulations 2013, the Consumer Rights Act 2015, or any other applicable UK consumer protection legislation.</p>

            <p className="delivery-returns-page__legal">My Pup and Me is a brand of Centric Business Limited.</p>
          </div>
        </section>
      </main>
    </>
  )
}
