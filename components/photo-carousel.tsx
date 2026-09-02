'use client';

import * as React from 'react';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const photos = [
  {
    src: '/durga-motors-front.jpg',
    alt: 'Durga Motors storefront in Mandla with Piaggio commercial vehicles signage',
    caption: 'Durga Motors storefront',
    detail: 'Muhgaon, Mandla',
  },
  {
    src: '/durga-motors-interior.jpg',
    alt: 'Inside Durga Motors showing stocked vehicle parts shelves',
    caption: 'Parts stock and store interior',
    detail: 'Ready to serve',
  },
];

export function PhotoCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on('select', update);
    return () => { api.off('select', update); };
  }, [api]);

  React.useEffect(() => {
    if (!api || paused) return;
    const timer = window.setInterval(() => api.scrollNext(), 4500);
    return () => window.clearInterval(timer);
  }, [api, paused]);

  return (
    <div className="photo-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Carousel setApi={setApi} opts={{ loop: true }} aria-label="Durga Motors photo gallery">
        <CarouselContent className="photo-track">
          {photos.map((photo, index) => (
            <CarouselItem key={photo.src} className="photo-slide">
              <figure>
                <img src={photo.src} alt={photo.alt} />
                <figcaption>
                  <span><strong>{photo.caption}</strong><small>{photo.detail}</small></span>
                  <span className="slide-count">0{index + 1} / 0{photos.length}</span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="slider-arrow slider-prev" />
        <CarouselNext className="slider-arrow slider-next" />
      </Carousel>
      <div className="slider-dots" aria-label="Choose a photo">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={index === current ? 'active' : ''}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Show photo ${index + 1}: ${photo.caption}`}
            aria-current={index === current ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
