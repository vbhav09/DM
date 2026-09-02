import type { Metadata } from 'next';
import { PageBanner } from '@/components/page-banner';
import { DealerEnquiryBand } from '@/components/dealer-enquiry-band';
import { piaggioProducts, productSlug } from '@/lib/piaggio-products';

export const metadata: Metadata = { title: 'Piaggio Product Range | Durga Motors' };

const categories = ['Electric', 'Cargo', 'Passenger'] as const;

export default function ProductsPage() {
  return <main className="inner-page piaggio-catalogue-page">
    <PageBanner eyebrow="COMPLETE PIAGGIO RANGE" title="Commercial vehicles for every journey." copy="Explore the current Piaggio Apé electric, cargo and passenger range available across India." image="/piaggio-banner-cargo.png" />
    <section className="full-catalogue-intro">
      <div><p>OFFICIAL PIAGGIO PRODUCT RANGE</p><h2>21 vehicles.<br />Three categories.</h2></div>
      <span>Browse official Piaggio model information below. Availability, variant, colour, price and finance options should be confirmed directly with Durga Motors.</span>
    </section>
    <nav className="catalogue-jump" aria-label="Product categories"><a href="#electric">Electric · 6</a><a href="#cargo">Cargo · 7</a><a href="#passenger">Passenger · 8</a></nav>
    {categories.map(category => {
      const items = piaggioProducts.filter(product => product.category === category);
      return <section className="piaggio-category" id={category.toLowerCase()} key={category}>
        <div className="category-title"><div><p>{category === 'Electric' ? 'EV RANGE' : `${category.toUpperCase()} RANGE`}</p><h2>{category}</h2></div><span>{items.length} models</span></div>
        <div className="piaggio-product-grid">{items.map(product => <article key={product.name}>
          <div className="piaggio-product-image"><img src={product.image} alt={`${product.name} product view`} /></div>
          <p>{product.fuel}</p><h3>{product.name}</h3><span>{product.spec}</span>
          <div className="piaggio-card-actions"><a href={`https://wa.me/919669659070?text=${encodeURIComponent(`Hello, I am interested in the ${product.name}. Please share availability and price.`)}`} target="_blank" rel="noreferrer">Enquire at Durga Motors</a>{productSlug(product) ? <a href={`/products/${productSlug(product)}`}>View details →</a> : <a href={product.url} target="_blank" rel="noreferrer">Official details ↗</a>}</div>
        </article>)}</div>
      </section>;
    })}
    <section className="catalogue-disclaimer"><strong>Product information notice</strong><p>Model names and selected specifications are sourced from Piaggio Commercial Vehicles’ official website. Pictures are for reference. Specifications, variants, colours, pricing and availability can change without notice. Please confirm current details with Durga Motors before purchase.</p></section>
    <DealerEnquiryBand />
  </main>;
}
