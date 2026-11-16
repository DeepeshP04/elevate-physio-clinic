import { clinic } from '../data/clinicData.js'
import { Icon } from './Icon.jsx'

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <div className="contact-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> COME SAY HELLO</p>
            <h2>Good care is<br />closer than <span>you think.</span></h2>
          </div>
          <a className="text-link" href={clinic.directionsUrl} target="_blank" rel="noreferrer">
            Get directions <Icon name="arrowUpRight" size={17} />
          </a>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon"><Icon name="map" size={20} /></span>
              <div><small>FIND US</small><p>{clinic.address}</p><a href={clinic.directionsUrl} target="_blank" rel="noreferrer">Get directions <Icon name="arrowUpRight" size={14} /></a></div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon"><Icon name="phone" size={20} /></span>
              <div><small>GIVE US A CALL</small><p><a href={`tel:${clinic.phoneLink}`}>{clinic.phone}</a></p><a href={`https://wa.me/${clinic.whatsappNumber}`} target="_blank" rel="noreferrer">Or send us a WhatsApp <Icon name="arrowUpRight" size={14} /></a></div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon"><Icon name="clock" size={20} /></span>
              <div><small>WHEN WE’RE HERE</small><div className="hours-list">{clinic.hours.map((item) => <p key={item.days}><span>{item.days}</span><span>{item.time}</span></p>)}</div></div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon"><Icon name="heart" size={20} /></span>
              <div><small>DROP US A NOTE</small><p><a href={`mailto:${clinic.email}`}>{clinic.email}</a></p></div>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Map showing the Elevate Physio clinic area"
              src={clinic.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="map-label" href={clinic.directionsUrl} target="_blank" rel="noreferrer">
              <span className="map-pin"><Icon name="map" size={17} /></span>
              <span><strong>Elevate Physio</strong><small>Open in Google Maps</small></span>
              <Icon name="arrowUpRight" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
