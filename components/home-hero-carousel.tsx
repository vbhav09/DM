'use client';

import * as React from 'react';
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const slides = [
  { image: '/piaggio-banner-cargo.png', eyebrow: 'Piaggio commercial vehicles', title: 'Power your business forward', copy: 'Explore dependable cargo vehicles for daily work and growing businesses.', href: '/products' },
  { image: '/piaggio-banner-electric.png', eyebrow: 'Electric mobility', title: 'Move more. Spend less.', copy: 'Discover electric passenger and cargo solutions at Durga Motors, Mandla.', href: '/products' },
  { image: '/piaggio-banner-range.png', eyebrow: 'Sales · Service · Spares', title: 'Everything your vehicle needs', copy: 'Authorised Piaggio sales, service support and genuine spares under one roof.', href: '/contact' },
];

export function HomeHeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => { if (!api) return; const update = () => setCurrent(api.selectedScrollSnap()); update(); api.on('select', update); return () => { api.off('select', update); }; }, [api]);
  React.useEffect(() => { if (!api) return; const timer = window.setInterval(() => api.scrollNext(), 5000); return () => window.clearInterval(timer); }, [api]);

  return <section className="official-hero" aria-label="Featured Piaggio vehicles">
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent className="official-hero-track">
        {slides.map((slide, index) => <CarouselItem className="official-hero-slide" key={slide.image}>
          <img src={slide.image} alt="Piaggio commercial vehicle promotional banner" />
          <div className="official-hero-overlay"><div className="official-hero-copy"><p>{slide.eyebrow}</p><h1>{slide.title}</h1><span>{slide.copy}</span><a href={slide.href}>Explore vehicles →</a></div></div>
          <small className="official-image-credit">Official Piaggio promotional image</small>
        </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious className="official-arrow official-prev" />
      <CarouselNext className="official-arrow official-next" />
    </Carousel>
    <div className="official-dots">{slides.map((slide,index)=><button key={slide.image} className={current===index?'active':''} onClick={()=>api?.scrollTo(index)} aria-label={`Show slide ${index+1}`} aria-current={current===index?'true':undefined} />)}</div>
  </section>;
}
