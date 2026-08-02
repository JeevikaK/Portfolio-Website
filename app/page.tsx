import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from '@/components/Projects'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionTransitions from '@/components/SectionTransitions'

export const metadata: Metadata = {
  title: 'Jeevika Kiran - AI Engineer & Full Stack Developer Portfolio',
  description: 'Explore the portfolio of Jeevika Kiran, an AI engineer and full-stack developer specializing in machine learning, computer vision, and intelligent web applications.',
  openGraph: {
    title: 'Jeevika Kiran - AI Engineer & Full Stack Developer Portfolio',
    description: 'Explore the portfolio of Jeevika Kiran, an AI engineer and full-stack developer specializing in machine learning, computer vision, and intelligent web applications.',
    type: 'website',
    url: 'https://jeevikakiran.dev',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SectionTransitions />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
