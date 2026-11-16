import { clinic, services } from '../data/clinicData.js'
import Brand from './Brand.jsx'
import { Icon } from './Icon.jsx'

export default function Footer() {
  const serviceLinks = services.slice(0, 4)
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand light />
            <p>Thoughtful physiotherapy and rehabilitation, built around you and the life you want to get back to.</p>
            <div className="footer-socials" aria-label="Social media">
              <a href={clinic.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href={clinic.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href={clinic.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>EXPLORE</h3>
            <a href="#about">About us</a><a href="#services">Our services</a><a href="#approach">Our approach</a><a href="#appointment">Book an appointment</a>
          </div>
          <div className="footer-column">
            <h3>OUR CARE</h3>
            {serviceLinks.map((service) => <a href="#services" key={service.title}>{service.title}</a>)}
          </div>
          <div className="footer-column footer-contact">
            <h3>LET’S CONNECT</h3>
            <a href={`tel:${clinic.phoneLink}`}>{clinic.phone}</a>
            <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
            <span>{clinic.address}</span>
            <a href={`https://wa.me/${clinic.whatsappNumber}`} target="_blank" rel="noreferrer" className="footer-whatsapp"><Icon name="arrowUpRight" size={15} /> Chat on WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Elevate Physio. All rights reserved.</span>
          <span>Made for movement, and everything that comes with it.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  )
}
