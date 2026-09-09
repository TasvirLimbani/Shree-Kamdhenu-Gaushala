import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = 'https://shreekamdhenugaushala.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Shree Kamdhenu Gaushala | Gaushala in Surat, Gujarat',
    template: '%s | Shree Kamdhenu Gaushala',
  },

  description:
    'Shree Kamdhenu Gaushala in Surat, Gujarat is dedicated to compassionate cow care, shelter, food, medical support and Gau Seva for 150+ cows and calves. Visit, volunteer or support cow care.',

  applicationName: 'Shree Kamdhenu Gaushala',

  keywords: [
    'Shree Kamdhenu Gaushala',
    'Gaushala Surat',
    'Gaushala in Surat',
    'Surat Gaushala',
    'best Gaushala in Surat',
    'Gaushala near me',
    'Gaushala near Surat',
    'cow shelter Surat',
    'cow sanctuary Surat',
    'cow care Surat',
    'cow rescue Surat',
    'cow welfare Surat',
    'Gau Seva Surat',
    'Gau Seva Gujarat',
    'Gaushala Gujarat',
    'cow shelter near me',
    'cow care near me',
    'cow rescue near me',
    'donate to Gaushala Surat',
    'Gaushala donation Surat',
    'donate for cows',
    'cow donation Surat',
    'sponsor a cow Surat',
    'cow sponsorship Surat',
    'visit Gaushala Surat',
    'Gaushala visit Surat',
    'cow medical care Surat',
    'veterinary care for cows',
    'animal shelter Surat',
    '150+ cows Surat',
    'गौशाला सूरत',
    'गौ सेवा सूरत',
    'ગૌશાળા સુરત',
    'ગૌ સેવા સુરત',
    'સુરત ગૌશાળા',
  ],

  authors: [
    {
      name: 'Shree Kamdhenu Gaushala',
    },
  ],

  creator: 'Shree Kamdhenu Gaushala',
  publisher: 'Shree Kamdhenu Gaushala',

  category: 'Nonprofit Organization',

  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Shree Kamdhenu Gaushala',

    title:
      'Shree Kamdhenu Gaushala | Gaushala in Surat, Gujarat',

    description:
      'A compassionate home for 150+ cows and calves in Surat, Gujarat. Support cow care, medical treatment, Gau Seva and visit our peaceful natural environment.',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shree Kamdhenu Gaushala - Cow Care in Surat, Gujarat',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Shree Kamdhenu Gaushala | Gaushala in Surat',

    description:
      'Supporting 150+ cows with food, shelter, medical care and compassionate Gau Seva in Surat, Gujarat.',

    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      {
        url: '/kamdhenu.png',
        type: 'image/svg+xml',
      },
    ],

    apple: [
      {
        url: '/kamdhenu.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',

  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Surat, Gujarat, India',
    'content-language': 'en-IN',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#2d5437',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" dir="ltr" className="bg-background">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />
      </head>

      <body className="antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}