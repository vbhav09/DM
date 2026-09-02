import { PhotoCarousel } from '@/components/photo-carousel';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=J989%2B8R%20Mandla%2C%20Madhya%20Pradesh';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Durga Motors home">
          <span className="brand-mark">DM</span>
          <span><strong>DURGA MOTORS</strong><small>म/स दुर्गा मोटर्स</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#products">Products</a><a href="#reviews">Reviews</a>
          <a className="nav-call" href="tel:+919669659070"><span aria-hidden="true">☎</span> Call now</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" role="img" aria-label="A modern automobile showroom"><div className="hero-shade" /></div>
        <div className="hero-content">
          <div className="rating-pill"><span aria-hidden="true">★</span> 5.0 rated in Mandla</div>
          <p className="eyebrow">Your trusted local auto market</p>
          <h1>Drive forward<br />with confidence.</h1>
          <p className="hero-copy">Friendly service and dependable guidance for vehicle buyers in Mandla.</p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+919669659070"><span aria-hidden="true">☎</span> 096696 59070</a>
            <a className="button secondary" href={mapUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">⌖</span> Get directions <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-meta">
            <span><strong>Open 9:30 AM</strong><small>Visit us in Muhgaon</small></span>
            <span><strong>5.0 ★</strong><small>Customer rating</small></span>
          </div>
        </div>
      </section>

      <section id="about" className="about section-pad">
        <div className="section-label">01 — About us</div>
        <div className="about-grid">
          <div>
            <p className="eyebrow dark">Local. Helpful. Dependable.</p>
            <h2>Your neighbourhood<br />auto destination.</h2>
          </div>
          <div className="about-copy">
            <p>
              Durga Motors is an auto market serving customers in Mandla and nearby areas.
              Visit us on Jabalpur Road for a straightforward conversation about your vehicle needs.
            </p>
            <p>
              Call ahead to ask about current availability, plan your visit, or get help finding our location.
            </p>
            <a className="text-link" href="tel:+919669659070">Speak with our team <span>→</span></a>
          </div>
        </div>
        <div className="feature-strip">
          <div><span>01</span><strong>Local service</strong><small>Conveniently located in Muhgaon, Mandla</small></div>
          <div><span>02</span><strong>Easy to reach</strong><small>Call directly for quick vehicle enquiries</small></div>
          <div><span>03</span><strong>Customer trusted</strong><small>A 5.0 rating from local customers</small></div>
        </div>
      </section>

      <section id="products" className="products section-pad" aria-labelledby="products-title">
        <div className="products-heading">
          <div>
            <div className="section-label light">02 — Products & services</div>
            <p className="eyebrow">Start your own livelihood</p>
            <h2 id="products-title">Autos built for<br />earning every day.</h2>
          </div>
          <p>
            Explore battery and diesel auto options for city and rural use, with finance assistance designed to help you get started.
          </p>
        </div>

        <div className="product-grid">
          <article className="product-card electric">
            <div className="product-top"><span>For city routes</span><b>⚡ ELECTRIC</b></div>
            <div className="product-copy">
              <p className="product-kicker">Battery Auto</p>
              <h3>Clean, quiet and economical.</h3>
              <ul><li>Environment-friendly operation</li><li>Zero tailpipe emissions</li><li>Lower running expenses</li></ul>
            </div>
            <div className="offer"><small>Down payment from</small><strong>₹10,000</strong><span>plus easy instalments</span></div>
          </article>

          <article className="product-card diesel">
            <div className="product-top"><span>For rural routes</span><b>● DIESEL</b></div>
            <div className="product-copy">
              <p className="product-kicker">Diesel Auto</p>
              <h3>Strong power for longer journeys.</h3>
              <ul><li>Powerful and dependable</li><li>Suited to longer distances</li><li>Built for demanding routes</li></ul>
            </div>
            <div className="offer"><small>Down payment range</small><strong>₹40,000–₹50,000</strong><span>plus easy instalments</span></div>
          </article>
        </div>

        <div className="services-row">
          <div><span>₹</span><strong>Finance assistance</strong><small>Help with suitable financing options</small></div>
          <div><span>%</span><strong>Competitive rates</strong><small>Subject to lender terms and eligibility</small></div>
          <div><span>✓</span><strong>Easy instalments</strong><small>Repayment plans for eligible customers</small></div>
          <div><span>☎</span><strong>Personal guidance</strong><small>Talk directly with Pankaj Soni</small></div>
        </div>

        <div className="offer-banner">
          <div className="offer-poster"><img src="/rozgar-auto-offer.jpeg" alt="Battery and diesel auto livelihood offer from Durga Motors" /></div>
          <div className="offer-contact">
            <p className="eyebrow">Employment vehicle enquiry</p>
            <h3>Begin your work<br />closer to home.</h3>
            <p>Contact Pankaj Soni for product availability, down-payment guidance and finance information.</p>
            <div className="offer-actions">
              <a className="button product-call" href="tel:+917389009070">☎ Call 7389009070</a>
              <a className="button product-whatsapp" href="https://wa.me/917389009070" target="_blank" rel="noreferrer">WhatsApp enquiry →</a>
            </div>
            <small className="disclaimer">*Finance, interest rate, down payment and instalments are subject to financier/dealer eligibility, approval, terms and conditions.</small>
          </div>
        </div>
      </section>

      <section className="real-photos section-pad" aria-labelledby="photos-title">
        <div className="photos-heading">
          <div><div className="section-label">03 — At Durga Motors</div><h2 id="photos-title">A real look<br />inside our store.</h2></div>
          <p>Authentic photos from the Durga Motors business listing in Mandla.</p>
        </div>
        <PhotoCarousel />
        <a className="text-link photos-link" href={mapUrl} target="_blank" rel="noreferrer">View the Google business listing <span>↗</span></a>
      </section>

      <section id="reviews" className="reviews section-pad">
        <div className="reviews-head">
          <div><div className="section-label light">04 — Customer reviews</div><h2>Words from<br />our customers.</h2></div>
          <div className="score"><strong>5.0</strong><span>★★★★★</span><small>Based on 2 Google reviews</small></div>
        </div>
        <div className="review-grid">
          <article className="review-card featured">
            <div className="quote-mark">“</div><div className="stars">★★★★★</div>
            <blockquote>Very well going</blockquote>
            <footer><span className="avatar">RB</span><div><strong>rahulsingh baghel</strong><small>Google review</small></div></footer>
          </article>
          <article className="review-card">
            <div className="quote-mark">“</div><div className="stars">★★★★★</div>
            <blockquote>Five-star customer rating</blockquote>
            <footer><span className="avatar">RS</span><div><strong>Roshani Soni</strong><small>Google review</small></div></footer>
          </article>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-card">
          <p className="eyebrow">Plan your visit</p>
          <h2>Let’s get you<br />moving.</h2>
          <div className="contact-actions">
            <a className="button primary" href="tel:+919669659070"><span aria-hidden="true">☎</span> Call 096696 59070</a>
            <a className="button whatsapp" href="https://wa.me/919669659070" target="_blank" rel="noreferrer">Message on WhatsApp <span>→</span></a>
          </div>
        </div>
        <div className="visit-card">
          <div><small>ADDRESS</small><p>Jabalpur Road, Mandla,<br />Muhgaon, Madhya Pradesh 481661</p></div>
          <div><small>OPENING TIME</small><p>9:30 AM</p></div>
          <div><small>PLUS CODE</small><p>J989+8R Mandla, Madhya Pradesh</p></div>
          <a className="directions-link" href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">DM</span><span><strong>DURGA MOTORS</strong><small>म/स दुर्गा मोटर्स</small></span></a>
        <p>Auto market • Mandla, Madhya Pradesh</p>
        <a href="tel:+919669659070">096696 59070</a>
      </footer>

      <div className="mobile-bar">
        <a href="tel:+919669659070">☎ Call now</a>
        <a href={mapUrl} target="_blank" rel="noreferrer">⌖ Directions</a>
      </div>
    </main>
  );
}
