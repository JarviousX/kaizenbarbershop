/**
 * Kaizen Barbershop — editable site content
 * ----------------------------------------
 * Update this file to change business details, services, barbers, and reviews.
 * Search for "REPLACE" to find placeholder values that still need real information.
 */

export type NavLink = {
  href: string
  label: string
  external?: boolean
}

export type Service = {
  id: string
  name: string
  description: string
  price: string
  duration?: string
}

export type Barber = {
  id: string
  name: string
  role: string
  specialty: string
  bio: string
  initials: string
  /** Optional portrait. Leave empty to show the initials placeholder. */
  photo?: string
  /** Optional individual Squire booking link. Falls back to the shop booking URL. */
  bookingUrl?: string
}

export type GalleryClip = {
  /** Vertical Instagram MP4 in public/videos/work. */
  src: string
  alt: string
  caption: string
}

export type Review = {
  id: string
  name: string
  quote: string
  rating: number
  source: string
}

export type HoursEntry = {
  day: string
  hours: string
}

const shopUrl = 'https://kaizen-barber-products.myshopify.com/'

export const site = {
  name: 'Kaizen Barbershop',
  shortName: 'Kaizen',
  tagline: 'Precision. Style. Kaizen.',
  supportingText:
    'A modern shop built on craft, consistency, and the details that make a cut last.',
  description:
    'Kaizen Barbershop in Fort Smith, AR. Precision haircuts, beard work, and lineups. Walk-ins welcome. Book your next appointment on Squire.',
  bookingUrl: 'https://getsquire.com/booking/brands/kaizen-barbershop',
  /** REPLACE with the public website domain once deployed. */
  siteUrl: 'https://kaizen-barbershop.jackson24le.workers.dev',
  phone: '(479) 974-4520',
  instagram: 'https://www.instagram.com/kaizenbarbershopfs/',
  instagramHandle: '@kaizenbarbershopfs',
  shopUrl,
  googleReviewsUrl:
    'https://www.google.com/search?q=Kaizen+Barbershop+Fort+Smith+AR#lrd=0x87cbb3fd1846ee5f:0xed1f1146d3e54919,1',
  /** REPLACE with a public shop email if you want it listed. */
  email: 'hello@kaizenbarbershop.com',
  address: {
    street: '1401 S Waldron Rd',
    city: 'Fort Smith',
    region: 'AR',
    postalCode: '72903',
    country: 'US',
  },
  highlights: ['Accepts walk-ins', 'Good for kids', 'Restroom'],
  hours: [
    { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ] satisfies HoursEntry[],
  nav: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#barbers', label: 'Barbers' },
    { href: '#gallery', label: 'Work' },
    { href: shopUrl, label: 'Shop', external: true },
    { href: '#contact', label: 'Contact' },
  ] satisfies NavLink[],
  hero: {
    video: '/images/herovid.mp4',
    poster: '/images/hero.jpg',
  },
  about: {
    eyebrow: 'The shop',
    title: 'Craft, refined over time.',
    lead: 'Kaizen is the Japanese idea of continuous improvement — small, deliberate refinements that compound into mastery. That is how we cut.',
    body: 'Every line is considered. Every fade is built with patience. We keep the room calm, the work precise, and the experience consistent from the first consult to the last look in the mirror. No rush. No template haircut. Just a standard we keep raising.',
    photo: {
      src: '/images/about.jpg',
      alt: 'Dark wood barbershop interior with classic chairs and warm lighting',
    },
  },
  services: [
    {
      id: 'haircut',
      name: 'Haircut',
      description: 'A precision cut shaped to your hair, head, and how you actually wear it.',
      price: '$40',
      duration: '45 min',
    },
    {
      id: 'beard-trim',
      name: 'Beard Trim',
      description: 'Sculpted edges, balanced length, and a finish that looks intentional.',
      price: '$20',
      duration: '30 min',
    },
    {
      id: 'line-up',
      name: 'Line Up',
      description: 'Sharp perimeter work — hairline, temples, and neck — without a full cut.',
      price: '$20',
      duration: '15 min',
    },
    {
      id: 'full-experience',
      name: 'The Full Experience',
      description: 'Haircut and beard together so the whole shape reads as one cut.',
      price: '$65',
      duration: '1 hr',
    },
    {
      id: 'kids-cut',
      name: "Kid's Haircut",
      description: 'Patient, clean cuts for younger clients. Ages 12 and under.',
      price: '$35',
      duration: '30 min',
    },
  ] satisfies Service[],
  /** Drop JPEGs into public/images/barbers using these filenames: angel.jpg, brandon.jpg, eddy.jpg, vinny.jpg, austin.jpg, david.jpg */
  barbers: [
    {
      id: 'angel',
      name: 'Angel Diaz',
      role: 'Barber',
      specialty: 'Barber',
      bio: '',
      initials: 'AD',
      photo: '/images/barbers/angel.jpg',
      bookingUrl: 'https://getsquire.com/booking/book/kaizen-barbershop-fort-smith/barber/angel-diaz-6/services',
    },
    {
      id: 'brandon',
      name: 'Brandon Nguyen',
      role: 'Barber',
      specialty: 'Barber',
      bio: '',
      initials: 'BN',
      photo: '/images/barbers/brandon.jpg',
      bookingUrl: 'https://getsquire.com/booking/book/kaizen-barbershop-fort-smith/barber/brandon-nguyen-13/services',
    },
    {
      id: 'eddy',
      name: 'Eddy Resendiz',
      role: 'Barber',
      specialty: 'Barber',
      bio: '',
      initials: 'ER',
      photo: '/images/barbers/eddy.jpg',
      bookingUrl: 'https://getsquire.com/booking/book/kaizen-barbershop-fort-smith/barber/eddy-resendiz-1/services',
    },
    {
      id: 'vinny',
      name: 'Vinny Doan',
      role: 'Barber',
      specialty: 'Barber',
      bio: '',
      initials: 'VD',
      photo: '/images/barbers/vinny.jpg',
      bookingUrl: 'https://getsquire.com/booking/book/kaizen-barbershop-fort-smith/barber/vinny-doan-3/services',
    },
    {
      id: 'austin',
      name: 'Austin Nguyen',
      role: 'Barber',
      specialty: 'Barber',
      bio: '',
      initials: 'AN',
      photo: '/images/barbers/austin.jpg',
      bookingUrl: 'https://getsquire.com/booking/book/kaizen-barbershop-fort-smith/barber/austin-nguyen-3/services',
    },
    {
      id: 'david',
      name: 'David Sanchez',
      role: 'Barber',
      specialty: 'Barber',
      bio: '',
      initials: 'DS',
      photo: '/images/barbers/david.jpg',
      bookingUrl: 'https://getsquire.com/booking/book/kaizen-barbershop-fort-smith/barber/david-sanchez-13/services',
    },
  ] satisfies Barber[],
  /** Drop vertical Instagram MP4s into public/videos/work using these filenames. */
  gallery: [
    {
      src: '/videos/work/01.mp4',
      alt: 'Skin fade',
      caption: 'Skin fade',
    },
    {
      src: '/videos/work/02.mp4',
      alt: 'Precision cut',
      caption: 'Precision cut',
    },
    {
      src: '/videos/work/03.mp4',
      alt: 'Beard work',
      caption: 'Beard work',
    },
    {
      src: '/videos/work/04.mp4',
      alt: 'Line up',
      caption: 'Line up',
    },
    {
      src: '/videos/work/05.mp4',
      alt: 'Texture',
      caption: 'Texture',
    },
    {
      src: '/videos/work/06.mp4',
      alt: 'In the chair',
      caption: 'In the chair',
    },
    {
      src: '/videos/work/07.mp4',
      alt: 'Shop floor',
      caption: 'Shop floor',
    },
    {
      src: '/videos/work/08.mp4',
      alt: 'The bench',
      caption: 'The bench',
    },
    {
      src: '/videos/work/09.mp4',
      alt: 'After the cut',
      caption: 'After the cut',
    },
  ] satisfies GalleryClip[],
  reviews: [
    {
      id: 'r1',
      name: 'Andre W.',
      quote:
        'Best fade I have had in years. The blend is invisible and the shop feels calm, not chaotic. Already booked the next one.',
      rating: 5,
      source: 'Google',
    },
    {
      id: 'r2',
      name: 'Chris M.',
      quote:
        'They actually listen. I showed a photo, we talked through my hair type, and the cut came out cleaner than the reference.',
      rating: 5,
      source: 'Google',
    },
    {
      id: 'r3',
      name: 'Priya S.',
      quote:
        'Took my son for a kids cut and it was easy, unhurried, and sharp. The kind of place you trust without thinking twice.',
      rating: 5,
      source: 'Google',
    },
    {
      id: 'r4',
      name: 'Evan L.',
      quote:
        'Sharp line up, perfect beard shape, no upselling. Just excellent work and a room that feels like a proper shop.',
      rating: 5,
      source: 'Google',
    },
  ] satisfies Review[],
}

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`

export const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`)

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`

export const telHref = `tel:${site.phone.replace(/[^\d+]/g, '')}`

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: site.name,
  description: site.description,
  url: site.siteUrl,
  image: `${site.siteUrl}/og-image.png`,
  telephone: site.phone,
  email: site.email,
  sameAs: [site.instagram, site.shopUrl],
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  hasMap: mapsDirectionsUrl,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '15:00' },
  ],
}
