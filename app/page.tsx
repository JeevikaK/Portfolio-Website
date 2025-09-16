import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from '@/components/Projects'
import Gallery from '@/components/Gallery'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}
