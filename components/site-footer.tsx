import Link from 'next/link';
import { mapUrl, nainpurMapUrl } from '@/lib/site';

export function SiteFooter() {
  return <>
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-identity">
          <Link className="brand footer-brand" href="/"><span className="brand-mark"><img src="/piaggio-logo-transparent.png" alt="Piaggio emblem" /></span><span><strong>DURGA MOTORS</strong><small>म/स दुर्गा मोटर्स</small></span></Link>
          <p className="footer-intro">Your local destination for Piaggio commercial vehicles, dependable support and genuine parts in Mandla.</p>
          <div className="dealer-badge"><span>Authorised dealer</span><strong>PIAGGIO</strong><small>Sales · Service · Genuine Spares</small></div>
        </div>
        <div className="footer-block footer-links"><small>EXPLORE</small><Link href="/products">Vehicles</Link><Link href="/gallery">Gallery</Link><Link href="/reviews">Customer reviews</Link><Link href="/contact">Contact us</Link></div>
        <div className="footer-block footer-locations"><small>OUR LOCATIONS</small><p><strong>Mandla Showroom</strong><br />Jabalpur Road, Muhgaon,<br />Mandla, Madhya Pradesh 481661</p><a href={mapUrl} target="_blank" rel="noreferrer">Mandla directions ↗</a><p><strong>Nainpur Branch</strong><br />Block Colony, Nainpur,<br />Madhya Pradesh</p><a href={nainpurMapUrl} target="_blank" rel="noreferrer">Nainpur directions ↗</a></div>
        <div className="footer-block"><small>CONTACT US</small><a className="footer-phone" href="tel:+919669659070">096696 59070</a><p>Open from 9:30 AM</p><a href="https://wa.me/919669659070" target="_blank" rel="noreferrer">WhatsApp enquiry ↗</a></div>
      </div>
      <div className="footer-bottom"><p>Piaggio authorised dealer for sales, service and genuine spares in Mandla.</p><span>© 2026 Durga Motors</span></div>
    </footer>
    <div className="mobile-bar">
      <a href="tel:+919669659070">☎ Call now</a>
      <a href={mapUrl} target="_blank" rel="noreferrer">⌖ Directions</a>
    </div>
  </>;
}
