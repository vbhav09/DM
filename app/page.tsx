import { HomeHeroCarousel } from '@/components/home-hero-carousel';
import { VehicleShowcase } from '@/components/vehicle-showcase';
import { mapUrl } from '@/lib/site';

export default function Home() {
  return <main className="official-home">
    <HomeHeroCarousel />

    <section className="official-section vehicle-showcase">
      <div className="official-heading"><div><p>OUR VEHICLES</p><h2>Choose the vehicle<br />that works for you.</h2></div><span>Passenger and cargo solutions across electric and diesel categories, supported locally by Durga Motors.</span></div>
      <VehicleShowcase />
      <div className="center-action"><a className="official-button" href="/products">View all products</a></div>
    </section>

    <section className="dealer-service-band">
      <div><p>PIAGGIO AUTHORISED DEALER</p><h2>Sales, service and genuine spares.</h2><span>Durga Motors provides complete support for Piaggio commercial vehicle owners in Mandla.</span></div>
      <div className="service-icons"><article><b>01</b><h3>Vehicle sales</h3><p>Product guidance for passenger and cargo requirements.</p></article><article><b>02</b><h3>Service support</h3><p>Dependable help to keep your vehicle working.</p></article><article><b>03</b><h3>Genuine spares</h3><p>Ask our team for suitable Piaggio spare parts.</p></article></div>
    </section>

    <section className="official-section official-about">
      <div className="about-photo"><img src="/durga-motors-front.jpg" alt="Durga Motors storefront in Mandla" /></div>
      <div className="about-info"><p>ABOUT DURGA MOTORS</p><h2>Your local Piaggio commercial vehicle partner.</h2><span>Visit our authorised dealership on Jabalpur Road, Muhgaon for vehicle sales, service guidance, genuine spares and finance assistance.</span><div className="about-facts"><b><strong>5.0</strong>Google rating</b><b><strong>9:30 AM</strong>Opening time</b></div><a className="official-button" href="/contact">Know more</a></div>
    </section>

    <section className="dealer-cta"><div><p>READY TO GET STARTED?</p><h2>Talk to Durga Motors today.</h2></div><div><a href="tel:+919669659070">☎ 096696 59070</a><a href={mapUrl} target="_blank" rel="noreferrer">Find our dealership →</a></div></section>
  </main>;
}
