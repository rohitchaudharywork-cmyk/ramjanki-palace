import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ram Janki Palace - Open Garden Wedding Venue in Muzaffarpur',
    short_name: 'Ram Janki Palace',
    description:
      'Premium open-garden wedding venue in Muzaffarpur, Bihar. Weddings, receptions, engagements and events.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdf3e7',
    theme_color: '#a32f2f',
    lang: 'en-IN',
    categories: ['business', 'lifestyle', 'events'],
    icons: [
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
