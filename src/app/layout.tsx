import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ramjankipalace.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ram Janki Palace - Premium Open Garden Wedding Venue in Muzaffarpur, Bihar',
    template: '%s | Ram Janki Palace',
  },
  description:
    'Ram Janki Palace is a premium open-garden wedding venue in Muzaffarpur, Bihar. Host weddings, receptions, engagements, tilak, birthdays and corporate events with royal outdoor ambience, in-house catering, decoration and parking. Call 8210120133 to book.',
  applicationName: 'Ram Janki Palace',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Ram Janki Palace',
    'Ram Janki Palace Muzaffarpur',
    'ramjankipalace',
    'wedding venue Muzaffarpur',
    'best wedding venue in Muzaffarpur',
    'open garden wedding venue Muzaffarpur',
    'marriage hall Muzaffarpur',
    'banquet hall Muzaffarpur',
    'wedding garden Muzaffarpur',
    'destination wedding Bihar',
    'wedding venue Bihar',
    'reception venue Muzaffarpur',
    'engagement venue Muzaffarpur',
    'tilak venue Muzaffarpur',
    'birthday party venue Muzaffarpur',
    'corporate event venue Muzaffarpur',
    'outdoor wedding venue Bihar',
    'lawn wedding Muzaffarpur',
    'palace wedding venue Muzaffarpur',
    'Sharfuddinpur wedding venue',
    'Darbhanga Road wedding venue Muzaffarpur',
    'wedding hall near me Muzaffarpur',
  ],
  authors: [{ name: 'Ram Janki Palace', url: SITE_URL }],
  creator: 'Ram Janki Palace',
  publisher: 'Ram Janki Palace',
  category: 'Wedding Venue',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Ram Janki Palace',
    title: 'Ram Janki Palace - Premium Open Garden Wedding Venue in Muzaffarpur',
    description:
      'Elegant open-garden wedding venue in Muzaffarpur, Bihar. Weddings, receptions, engagements and events with royal ambience, catering, decor and parking.',
    images: [
      {
        url: '/images/Entrance.jpg',
        width: 1200,
        height: 630,
        alt: 'Ram Janki Palace - Open Garden Wedding Venue in Muzaffarpur',
      },
      {
        url: '/images/Open Garden.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Garden Wedding Venue at Ram Janki Palace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ram Janki Palace - Premium Open Garden Wedding Venue in Muzaffarpur',
    description:
      'Elegant open-garden wedding venue in Muzaffarpur, Bihar. Book your wedding, reception or event today.',
    images: ['/images/Entrance.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'Vjg70hGssTQzBZ9pXfEfcyIYViO3_b1aEhMakOcngHM',
  },
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Muzaffarpur',
    'geo.position': '26.1193393;85.5407447',
    ICBM: '26.1193393, 85.5407447',
    'business:contact_data:street_address':
      'Near Fly Over, Sharfuddinpur, Darbhanga Road',
    'business:contact_data:locality': 'Muzaffarpur',
    'business:contact_data:region': 'Bihar',
    'business:contact_data:postal_code': '843118',
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': '+91-8210120133',
    'business:contact_data:email': 'ramjankipalace@gmail.com',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdf3e7' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'EventVenue'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Ram Janki Palace',
      alternateName: ['RamJankiPalace', 'Ram Janki Palace Muzaffarpur'],
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: [
        `${SITE_URL}/images/Entrance.jpg`,
        `${SITE_URL}/images/Open Garden.jpg`,
        `${SITE_URL}/images/Stage.jpg`,
        `${SITE_URL}/images/Theme Entrance.jpg`,
      ],
      description:
        'Premium open-garden wedding venue in Muzaffarpur, Bihar. Hosts weddings, receptions, engagements, tilak, birthdays and corporate events with in-house catering, decoration, stage, entertainment and parking.',
      telephone: '+91-8210120133',
      email: 'ramjankipalace@gmail.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Fly Over, Sharfuddinpur, Darbhanga Road',
        addressLocality: 'Muzaffarpur',
        addressRegion: 'Bihar',
        postalCode: '843118',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.1193393,
        longitude: 85.5407447,
      },
      hasMap:
        'https://www.google.com/maps/place/Ram+Janki+Palace/@26.1193393,85.5407447,17z',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '09:00',
          closes: '23:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/ramjankipalace',
        'https://www.facebook.com/share/1Br7EnNnAF/',
      ],
      areaServed: [
        { '@type': 'City', name: 'Muzaffarpur' },
        { '@type': 'State', name: 'Bihar' },
        { '@type': 'Country', name: 'India' },
      ],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Open Garden' },
        { '@type': 'LocationFeatureSpecification', name: 'In-house Catering' },
        { '@type': 'LocationFeatureSpecification', name: 'Decoration Services' },
        { '@type': 'LocationFeatureSpecification', name: 'Stage Setup' },
        { '@type': 'LocationFeatureSpecification', name: 'Entertainment Stage' },
        { '@type': 'LocationFeatureSpecification', name: 'Parking' },
        { '@type': 'LocationFeatureSpecification', name: 'Themed Entrance' },
        { '@type': 'LocationFeatureSpecification', name: 'Selfie Point' },
      ],
      makesOffer: [
        { '@type': 'Offer', name: 'Wedding Ceremony Venue' },
        { '@type': 'Offer', name: 'Wedding Reception Venue' },
        { '@type': 'Offer', name: 'Engagement & Tilak Venue' },
        { '@type': 'Offer', name: 'Birthday Party Venue' },
        { '@type': 'Offer', name: 'Corporate & Festive Event Venue' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Ram Janki Palace',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Ram Janki Palace - Premium Open Garden Wedding Venue in Muzaffarpur',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      primaryImageOfPage: `${SITE_URL}/images/Entrance.jpg`,
      inLanguage: 'en-IN',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
