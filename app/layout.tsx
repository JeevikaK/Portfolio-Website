import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Jeevika Kiran - AI Engineer & Full Stack Developer',
    template: '%s | Jeevika Kiran'
  },
  description: 'AI enthusiast and full-stack developer creating intelligent solutions for real-world challenges. Specializing in machine learning, computer vision, and modern web development.',
  keywords: [
    'Jeevika Kiran',
    'AI Engineer',
    'Machine Learning',
    'Full Stack Developer',
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
    url: 'https://jeevikakiran.dev',
    siteName: 'Jeevika Kiran Portfolio',
    title: 'Jeevika Kiran - AI Engineer & Full Stack Developer',
    description: 'AI enthusiast and full-stack developer creating intelligent solutions for real-world challenges.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeevika Kiran - AI Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeevika Kiran - AI Engineer & Full Stack Developer',
    description: 'AI enthusiast and full-stack developer creating intelligent solutions for real-world challenges.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://jeevikakiran.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jeevika Kiran",
              "jobTitle": "AI Engineer & Full Stack Developer",
              "description": "AI enthusiast and full-stack developer creating intelligent solutions for real-world challenges",
              "url": "https://jeevikakiran.dev",
              "sameAs": [
                "https://linkedin.com/in/jeevika-kiran-a0957b242",
                "https://github.com/JeevikaK"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "Full Stack Development",
                "React",
                "Python",
                "TensorFlow"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Your University"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "IBM India Software Labs"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
