import { Icon } from './Icon.jsx'

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> PHYSIOTHERAPY, WITH YOU IN MIND</p>
          <h1>Move better.<br />Feel <span>more like you.</span></h1>
          <p className="hero-description">
            Personalized physiotherapy and rehabilitation to help you recover, regain strength, and get back to the things you love.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#appointment">
              Let’s get started <Icon name="arrowUpRight" size={18} />
            </a>
            <a className="text-link" href="#services">
              Explore our care <Icon name="arrowRight" size={17} />
            </a>
          </div>
          <div className="hero-values">
            <div className="avatar-stack" aria-hidden="true">
              <span>✳</span><span>✦</span><span>◌</span>
            </div>
            <p><strong>Care that moves with you.</strong><br />Personalized. Practical. Encouraging.</p>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85"
            alt="A trainer guiding a person through a supported mobility exercise"
            fetchPriority="high"
          />
          <div className="hero-photo-shade" />
          <div className="hero-note">
            <span className="hero-note-icon"><Icon name="sparkles" size={20} /></span>
            <div><strong>Your pace. Your progress.</strong><span>One step at a time.</span></div>
          </div>
          <div className="hero-side-label">A LITTLE MORE YOU, EVERY DAY</div>
          <div className="hero-image-index">01 <span>/ 03</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  )
}
