"use client";

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
        <a className="brand" href="/" aria-label="Durga Motors home">
          <span className="brand-mark"><img src="/piaggio-logo-transparent.png" alt="Piaggio emblem" /></span>
          <span className="brand-copy"><strong>DURGA MOTORS</strong><small>म/स दुर्गा मोटर्स</small></span>
        </a>
        <span className="nav-dealer"><i /> PIAGGIO AUTHORISED DEALER</span>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a><a href="/products">Vehicles</a><a href="/gallery">Gallery</a>
          <a href="/reviews">Reviews</a><a href="/contact">Contact</a>
        </nav>
        <a className="nav-enquire" href="/contact"><span aria-hidden="true">☎</span> Enquire Now</a>
        <details className="mobile-navigation"><summary aria-label="Open navigation menu"><span /><span /><span /></summary><nav aria-label="Mobile navigation"><a href="/">Home</a><a href="/products">Vehicles</a><a href="/gallery">Gallery</a><a href="/reviews">Reviews</a><a href="/contact">Contact</a></nav></details>
      </div>
    </header>
  );
}
