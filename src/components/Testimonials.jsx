import { testimonials } from '../data/clinicData.js'
import { Icon } from './Icon.jsx'

export default function Testimonials() {
  return (
    <section className="testimonials section-pad" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials-header">
          <div>
            <p className="eyebrow">A LITTLE ENCOURAGEMENT GOES A LONG WAY</p>
            <h2 id="testimonials-title">Words from the<br /><span>journey.</span></h2>
          </div>
          <p className="demo-label"><Icon name="sparkles" size={17} /> DEMO CONTENT — NOT VERIFIED PATIENT REVIEWS</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={`${item.name}-${index}`}>
              <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }, (_, star) => <Icon name="star" size={16} key={star} fill="currentColor" />)}
              </div>
              <p>{item.review}</p>
              <div className="testimonial-person">
                <span className="testimonial-avatar">{index === 0 ? 'A' : index === 1 ? 'S' : 'R'}</span>
                <span>{item.name}<small>DEMO PLACEHOLDER</small></span>
                <span className="quote-mark">“</span>
              </div>
            </article>
          ))}
        </div>
        <p className="testimonial-disclaimer">These are editable sample testimonials for demonstration only. Replace with consented patient feedback before publishing.</p>
      </div>
    </section>
  )
}
