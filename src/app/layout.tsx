import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Ram Janki Palace - Premium Open Garden Wedding Venue in Muzaffarpur',
  description: 'Ram Janki Palace is one of the most elegant and spacious open-garden wedding venues in Muzaffarpur. Perfect for weddings, receptions, engagements, and festive events with royal outdoor ambience.',
  keywords: 'wedding venue Muzaffarpur, open garden wedding, Ram Janki Palace, wedding venue Bihar, outdoor wedding venue, garden wedding Muzaffarpur',
  authors: [{ name: 'Ram Janki Palace' }],
  openGraph: {
    title: 'Ram Janki Palace - Premium Open Garden Wedding Venue',
    description: 'Celebrate your moments at Ram Janki Palace - elegant open garden wedding venue in Muzaffarpur',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
