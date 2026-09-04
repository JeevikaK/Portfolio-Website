import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://jeevikakiran.com'),
  title: {
    default: 'Jeevika Kiran - AI & Software Engineer',
    template: '%s | Jeevika Kiran'
  },
  description: 'AI and software engineer building agentic AI tools, scalable intelligent systems, multimodal machine learning applications and robotics research.',
  keywords: [
    'Jeevika Kiran',
    'AI Engineer',
    'Machine Learning',
    'Software Engineer',
    'Agentic AI',
    'Computer Vision',
    'React',
    'Python',
    'TensorFlow',
    'Next.js',
    'Portfolio'
  ],
  authors: [{ name: 'Jeevika Kiran', url: 'https://linkedin.com/in/jeevika-kiran-a0957b242' }],
  creator: 'Jeevika Kiran',
  publisher: 'Jeevika Kiran',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeevikakiran.com',
    siteName: 'Jeevika Kiran Portfolio',
    title: 'Jeevika Kiran - AI & Software Engineer',
    description: 'Agentic AI tools, scalable intelligent systems, multimodal machine learning and robotics research.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeevika Kiran - AI & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeevika Kiran - AI & Software Engineer',
    description: 'Agentic AI tools, scalable intelligent systems, multimodal machine learning and robotics research.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="canonical" href="https://jeevikakiran.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jeevika Kiran",
              "jobTitle": "AI & Software Engineer",
              "description": "AI and software engineer specializing in agentic AI, scalable intelligent systems, multimodal machine learning, and robotics research",
              "url": "https://jeevikakiran.com",
              "sameAs": [
                "https://linkedin.com/in/jeevika-kiran-a0957b242",
                "https://github.com/JeevikaK"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Agentic AI",
                "Retrieval-Augmented Generation",
                "Computer Vision",
                "Robotics",
                "Distributed Systems",
                "React",
                "Python",
                "PyTorch"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Ramaiah Institute of Technology"
              },
              "affiliation": {
                "@type": "Organization",
                "name": "University of Southern California"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
