import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Focus from './components/Focus'
import Rates from './components/Rates'
import Quote from './components/Quote'
import Footer from './components/Footer'
import Faq from './components/Faq'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Focus />
      <Rates />
      <Quote />
      <Services />
      <Contact />
      <Faq />
      <Footer />
    </main>
  )
}