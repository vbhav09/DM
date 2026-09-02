import Link from 'next/link';
import { featuredProducts } from '@/lib/piaggio-products';

export function generateStaticParams() {
  return featuredProducts.map(product => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug:string }> }) {
  const { slug } = await params;
  const product = featuredProducts.find(item => item.slug === slug);
  if (!product) return <main className="product-detail"><section className="product-not-found"><h1>Product not found</h1><Link href="/products">Return to vehicles</Link></section></main>;

  return <main className="product-detail">
    <section className="product-detail-hero">
      <div className="product-detail-image"><img src={product.image} alt={`${product.name} product view`} /></div>
      <div className="product-detail-copy"><p>{product.fuel}</p><h1>{product.name}</h1><span>{product.description}</span><div className="product-detail-actions"><a href={`https://wa.me/919669659070?text=${encodeURIComponent(`Hello, I am interested in the ${product.name}. Please share availability and price.`)}`} target="_blank" rel="noreferrer">Enquire on WhatsApp</a><a href={product.url} target="_blank" rel="noreferrer">Official Piaggio page ↗</a></div></div>
    </section>
    <section className="product-spec-section"><div className="product-spec-heading"><p>KEY SPECIFICATIONS</p><h2>Built for everyday business.</h2><span>Official specifications shown for quick comparison. Confirm current variant, colour, price and availability with Durga Motors.</span></div><div className="product-spec-grid">{product.highlights.map(item => <article key={item.label}><small>{item.label}</small><strong>{item.value}</strong></article>)}</div></section>
    <section className="product-detail-bottom"><div><p>PIAGGIO AUTHORISED DEALER</p><h2>See this vehicle at Durga Motors.</h2></div><Link href="/contact">Contact our team →</Link></section>
  </main>;
}
