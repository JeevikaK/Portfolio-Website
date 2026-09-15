import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from '@/components/Projects'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionTransitions from '@/components/SectionTransitions'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SectionTransitions />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
