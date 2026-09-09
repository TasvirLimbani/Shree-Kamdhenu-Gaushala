import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shree Kamdhenu Gaushala | A gentle home for sacred lives',
  description: 'Shree Kamdhenu Gaushala in Surat provides compassionate food, shelter, rescue, and medical care for cows through the practice of Gau Seva.',
  keywords: ['gaushala Surat', 'cow care Surat', 'Gau Seva', 'cow shelter Gujarat', 'donate to gaushala'],
  openGraph: { title: 'Shree Kamdhenu Gaushala', description: 'A gentle home for sacred lives in Surat, Gujarat.', type: 'website' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#2d5437', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
