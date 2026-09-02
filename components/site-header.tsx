"use client";

import { useEffect, useState } from 'react';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
      <div className="nav-shell">
        <a className="brand" href="/" aria-label="Durga Motors home">
          <span className="brand-mark"><img src="/piaggio-logo-transparent.png" alt="Piaggio emblem" /></span>
          <span className="brand-copy"><strong>DURGA MOTORS</strong><small>म/स दुर्गा मोटर्स</small></span>
        </a>
        <span className="nav-dealer"><i /> PIAGGIO AUTHORISED DEALER</span>
        <nav id="mobile-navigation" className={menuOpen ? 'mobile-open' : ''} aria-label="Primary navigation">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a><a href="/products" onClick={() => setMenuOpen(false)}>Vehicles</a><a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="/reviews" onClick={() => setMenuOpen(false)}>Reviews</a><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="nav-enquire" href="/contact"><span aria-hidden="true">☎</span> Enquire Now</a>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}><span /><span /><span /></button>
      </div>
    </header>
  );
}
