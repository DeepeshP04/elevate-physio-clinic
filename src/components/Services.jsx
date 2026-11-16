import { services } from '../data/clinicData.js'
import { Icon } from './Icon.jsx'

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-heading services-heading">
          <div>
            <p className="eyebrow">CARE THAT MEETS YOU WHERE YOU ARE</p>
            <h2>Find your way<br />back to <span>feeling good.</span></h2>
          </div>
          <p className="section-intro">
            Thoughtful support for a wide range of needs—always shaped around your body, your goals, and your everyday life.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <a className="service-card" href="#appointment" key={service.title}>
              <div className="service-card-top">
                <span className="service-icon"><Icon name={service.icon} size={22} /></span>
                <span className="service-number">0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow"><Icon name="arrowUpRight" size={18} /></span>
            </a>
          ))}
        </div>
        <div className="services-bottom">
          <span>NOT SURE WHERE TO START?</span>
          <a className="text-link" href="#appointment">Let’s talk about it <Icon name="arrowRight" size={17} /></a>
        </div>
      </div>
    </section>
  )
}
