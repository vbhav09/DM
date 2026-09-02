import Link from 'next/link';

export function PageBanner({ eyebrow, title, copy, image = '/piaggio-banner-range.png' }: { eyebrow: string; title: string; copy: string; image?: string }) {
  return <section className="subpage-banner">
    <img src={image} alt="Piaggio commercial vehicle promotional banner" />
    <div className="subpage-shade" />
    <div className="subpage-banner-copy"><p>{eyebrow}</p><h1>{title}</h1><span>{copy}</span><Link href="/contact">Enquire now →</Link></div>
    <small>Official Piaggio promotional image</small>
  </section>;
}
