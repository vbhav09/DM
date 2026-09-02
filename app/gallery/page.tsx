import type { Metadata } from 'next';
import { PhotoCarousel } from '@/components/photo-carousel';
import { mapUrl } from '@/lib/site';
import { PageBanner } from '@/components/page-banner';
import { DealerEnquiryBand } from '@/components/dealer-enquiry-band';

export const metadata: Metadata = { title: 'Gallery | Durga Motors' };
export default function GalleryPage() { return <main className="inner-page"><PageBanner eyebrow="DEALERSHIP GALLERY" title="A real look inside our store." copy="Explore authentic photographs from Durga Motors in Muhgaon, Mandla." image="/piaggio-banner-electric.png" /><section className="real-photos section-pad"><div className="official-heading gallery-heading"><div><p>VISIT DURGA MOTORS</p><h2>Our showroom and spares store.</h2></div><span>See where we welcome customers, discuss vehicle options and provide local sales, service and spares support.</span></div><PhotoCarousel /><a className="text-link photos-link" href={mapUrl} target="_blank" rel="noreferrer">View the Google business listing <span>↗</span></a></section><DealerEnquiryBand /></main>; }
