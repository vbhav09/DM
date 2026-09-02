"use client";

import Link from 'next/link';
import { useState } from 'react';
import { featuredProducts } from '@/lib/piaggio-products';

const filters = ['All vehicles', 'Electric', 'Passenger', 'Cargo'] as const;
type Filter = typeof filters[number];

export function VehicleShowcase() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All vehicles');
  const visibleVehicles = activeFilter === 'All vehicles'
    ? featuredProducts
    : featuredProducts.filter(vehicle => vehicle.fuel.includes(activeFilter) || vehicle.category === activeFilter);

  return <>
    <div className="vehicle-tabs" role="tablist" aria-label="Filter vehicles">
      {filters.map(filter => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
    </div>
    <div className="official-vehicle-grid" aria-live="polite">
      {visibleVehicles.map(vehicle => <article key={vehicle.name}>
        <div className="official-product-image"><img src={vehicle.image} alt={`${vehicle.name} product view`} /></div>
        <p>{vehicle.fuel}</p><h3>{vehicle.name}</h3><span>{vehicle.spec}</span><Link href={`/products/${vehicle.slug}`}>View details →</Link>
      </article>)}
    </div>
  </>;
}
