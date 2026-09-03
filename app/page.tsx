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
  title: 'Jeevika Kiran - AI & Software Engineer Portfolio',
  description: 'Portfolio of Jeevika Kiran, an AI and software engineer building agentic AI tools, scalable intelligent systems, multimodal ML applications and robotics research.',
  openGraph: {
    title: 'Jeevika Kiran - AI & Software Engineer Portfolio',
    description: 'Agentic AI, scalable intelligent systems, multimodal machine learning and robotics research.',
    type: 'website',
    url: 'https://jeevikakiran.com',
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
