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
          <a href="#about">About</a><a href="#reviews">Reviews</a>
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

      <section className="real-photos section-pad" aria-labelledby="photos-title">
        <div className="photos-heading">
          <div><div className="section-label">02 — At Durga Motors</div><h2 id="photos-title">A real look<br />inside our store.</h2></div>
          <p>Authentic photos from the Durga Motors business listing in Mandla.</p>
        </div>
        <PhotoCarousel />
        <a className="text-link photos-link" href={mapUrl} target="_blank" rel="noreferrer">View the Google business listing <span>↗</span></a>
      </section>

      <section id="reviews" className="reviews section-pad">
        <div className="reviews-head">
          <div><div className="section-label light">03 — Customer reviews</div><h2>Words from<br />our customers.</h2></div>
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
