"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Durga Motors home">
          <span className="brand-mark"><img src="/piaggio-logo-transparent.png" alt="Piaggio emblem" /></span>
          <span className="brand-copy"><strong>DURGA MOTORS</strong><small>म/स दुर्गा मोटर्स</small></span>
        </Link>
        <span className="nav-dealer"><i /> PIAGGIO AUTHORISED DEALER</span>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link><Link href="/products">Vehicles</Link><Link href="/gallery">Gallery</Link>
          <Link href="/reviews">Reviews</Link><Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-enquire" href="/contact"><span aria-hidden="true">☎</span> Enquire Now</Link>
      </div>
    </header>
  );
}
