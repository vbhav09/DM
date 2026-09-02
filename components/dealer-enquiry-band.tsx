import { mapUrl } from '@/lib/site';

export function DealerEnquiryBand() {
  return <section className="dealer-cta page-dealer-cta"><div><p>PIAGGIO AUTHORISED DEALER</p><h2>Sales, service and genuine spares.</h2></div><div><a href="tel:+919669659070">☎ 096696 59070</a><a href={mapUrl} target="_blank" rel="noreferrer">Get directions →</a></div></section>;
}
