export type PiaggioProduct = { name:string; category:'Electric'|'Cargo'|'Passenger'; fuel:string; spec:string; image:string; url:string };
export type FeaturedProduct = PiaggioProduct & { slug:string; shortName:string; description:string; highlights:{ label:string; value:string }[] };

const base = 'https://piaggio-cv.co.in';
export const piaggioProducts: PiaggioProduct[] = [
  { name:'Apé E-Xtra FX Max Cargo', category:'Electric', fuel:'Electric · Cargo', spec:'Strong metal body · Fixed battery cargo platform', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/electric/cargo-home.png', url:`${base}/electric/ape-e-xtra-fx-max/` },
  { name:'Apé E-City SwaP Passenger', category:'Electric', fuel:'Electric · Passenger', spec:'6.26 kWh swappable battery · 120 km certified range', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/electric/home-swap.png', url:`${base}/electric/ape-e-city-fx-max-swappable/` },
  { name:'Apé E-City MAXX Passenger', category:'Electric', fuel:'Electric · Passenger', spec:'8.6 kWh battery · 160 ± 5 km typical range', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/electric/home-maxx.png', url:`${base}/electric/ape-e-city-fx-max-fixed/` },
  { name:'Apé Electric Cargo (Swappable Battery)', category:'Electric', fuel:'Electric · Cargo', spec:'Swappable-battery cargo three-wheeler', image:'/piaggio-banner-electric.png', url:`${base}/electric/electric-cargo-swappable-battery/` },
  { name:'Apé E-City Ultra Passenger', category:'Electric', fuel:'Electric · Passenger', spec:'10.2 kWh battery · 205 ± 5 km typical range', image:'/piaggio-banner-electric.png', url:`${base}/electric/ape-e-city-ultra/` },
  { name:'Apé WavE Electric', category:'Electric', fuel:'Electric · Passenger', spec:'5.4 kWh battery · 140 ± 5 km superior range', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/electric/wave%20electric/home-product.png', url:`${base}/electric/ape-wave-electric/` },

  { name:'Apé Xtra Bada 330 CNG', category:'Cargo', fuel:'CNG · Cargo', spec:'330 cc CNG engine · 750 kg payload', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/cargo/ape-xtra-bada-330/home-thumb.png', url:`${base}/cargo/ape-xtra-bada-330-cargo-3-wheeler/` },
  { name:'Apé Xtra Bada 700 Diesel', category:'Cargo', fuel:'Diesel · Cargo', spec:'700 DI engine · 750 kg payload', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/cargo/ape-xtra-bada-700/desk-thumb.png', url:`${base}/cargo/ape-xtra-bada-700/` },
  { name:'Apé Xtra 600 Diesel', category:'Cargo', fuel:'Diesel · Cargo', spec:'600 DI engine · 500 kg payload', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/cargo/ape-xtra-600/home-thumb.png', url:`${base}/cargo/ape-xtra-600/` },
  { name:'Apé Xtra Classic Diesel', category:'Cargo', fuel:'Diesel · Cargo', spec:'435 cc mechanical engine · Pulley assist', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/cargo/classic/img-edit.png', url:`${base}/cargo/ape-xtra-classic-diesel/` },
  { name:'Apé Xtra LDX 230cc CNG', category:'Cargo', fuel:'CNG · Cargo', spec:'230 cc CNG cargo three-wheeler', image:'/piaggio-banner-cargo.png', url:`${base}/cargo/ape-xtra-ldx-230-cng/` },
  { name:'Apé Xtra HT 300cc CNG', category:'Cargo', fuel:'CNG · Cargo', spec:'300 cc CNG cargo three-wheeler', image:'/piaggio-banner-cargo.png', url:`${base}/cargo/ape-xtra-ht-300-cng/` },
  { name:'Apé Xtra HT 300cc Petrol', category:'Cargo', fuel:'Petrol · Cargo', spec:'300 cc petrol engine · 60-month super warranty', image:'/piaggio-banner-cargo.png', url:`${base}/cargo/ape-xtra-ht-300-petrol/` },

  { name:'Apé Auto Classic (Wide Body)', category:'Passenger', fuel:'Diesel · Passenger', spec:'435 cc engine · Driver + 3 passengers', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-classic/F2C33B.png', url:`${base}/passenger/ape-classic/` },
  { name:'Apé NXT+ (Small Body)', category:'Passenger', fuel:'CNG / LPG / Petrol', spec:'230 cc engine · Driver + 3 passengers', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/nxt-plus/67AE58.png', url:`${base}/passenger/ape-nxt-cng/` },
  { name:'Apé Metro (Medium Body)', category:'Passenger', fuel:'Passenger', spec:'Spacious body · Smart luggage space', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/metro/home-thumb.png', url:`${base}/passenger/ape-metro/` },
  { name:'Apé Auto Bada', category:'Passenger', fuel:'CNG · Passenger', spec:'Wide-body passenger three-wheeler', image:'https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-dx/F2C33B.png', url:`${base}/passenger/ape-auto-dx-cng/` },
  { name:'Apé Auto DXL (Extra Wide Body)', category:'Passenger', fuel:'Diesel · Passenger', spec:'Extra-wide passenger body', image:'/product-diesel-auto.png', url:`${base}/passenger/ape-dxl-three-wheeler-diesel/` },
  { name:'Apé Auto+ (Extra Wide Body)', category:'Passenger', fuel:'Diesel · Passenger', spec:'597 cc engine · Driver + 5 passengers', image:'/product-diesel-auto.png', url:`${base}/passenger/ape-auto-three-wheeler/` },
  { name:'Apé City Diesel 3-wheeler', category:'Passenger', fuel:'Diesel · Passenger', spec:'Compact city passenger three-wheeler', image:'/product-diesel-auto.png', url:`${base}/passenger/ape-city-diesel-3-wheeler/` },
  { name:'Apé City+ 3-wheeler Auto', category:'Passenger', fuel:'Passenger', spec:'City passenger auto for last-mile mobility', image:'/product-diesel-auto.png', url:`${base}/passenger/ape-city-3-wheeler-auto/` },
];

export const featuredProducts: FeaturedProduct[] = [
  {
    ...piaggioProducts[2], slug:'ape-e-city-maxx', shortName:'Electric Auto',
    description:'A capable electric passenger three-wheeler designed for dependable daily mobility, strong performance and lower running costs.',
    highlights:[{label:'Battery',value:'8.6 kWh Lithium-ion'},{label:'Typical range',value:'160 ± 5 km'},{label:'Max power',value:'7.40 kW'},{label:'Max torque',value:'32 Nm'},{label:'Seating',value:'Driver + 3'},{label:'Gradeability',value:'22%'}]
  },
  {
    ...piaggioProducts[0], slug:'ape-e-xtra-fx-max', shortName:'Electric Loader',
    description:'An electric cargo three-wheeler built to carry business loads with a practical six-foot deck and confident pulling power.',
    highlights:[{label:'Battery',value:'8.34 kWh Lithium-ion'},{label:'Typical range',value:'130 ± 5 km'},{label:'Max power',value:'9.55 kW'},{label:'Max torque',value:'45 Nm'},{label:'Deck length',value:'6 ft'},{label:'Gradeability',value:'20%'}]
  },
  {
    ...piaggioProducts[13], slug:'ape-auto-classic', shortName:'Diesel Auto',
    description:'A trusted diesel passenger auto with a wide body, dependable mechanical engine and seating for everyday local transport.',
    highlights:[{label:'Engine',value:'435 cc Diesel'},{label:'Max power',value:'5.7 kW'},{label:'Max torque',value:'19 Nm'},{label:'Fuel tank',value:'10 litres'},{label:'Seating',value:'Driver + 3'},{label:'Gradeability',value:'26.79%'}]
  },
  {
    ...piaggioProducts[7], slug:'ape-xtra-bada-700', shortName:'Diesel Loader',
    description:'A large-deck diesel cargo vehicle engineered for demanding commercial loads and strong daily earning potential.',
    highlights:[{label:'Engine',value:'DI G700 Diesel'},{label:'Max power',value:'7.9 kW'},{label:'Max torque',value:'26.3 Nm'},{label:'Payload',value:'750 kg'},{label:'Deck length',value:'7 ft'},{label:'Gradeability',value:'25%'}]
  }
];

export function productSlug(product: PiaggioProduct) {
  return featuredProducts.find(item => item.name === product.name)?.slug;
}
