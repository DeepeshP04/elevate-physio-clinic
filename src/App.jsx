import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Approach from './components/Approach.jsx'
import AppointmentForm from './components/AppointmentForm.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <AppointmentForm />
        <Testimonials />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
