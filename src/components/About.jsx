import { team } from '../data/clinicData.js'
import { Icon } from './Icon.jsx'

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85"
            alt="A healthcare professional talking with a patient"
            loading="lazy"
          />
          <div className="about-stamp"><span>CARE</span><Icon name="heart" size={19} /><span>THAT LISTENS</span></div>
          <div className="about-image-caption"><span>01 — YOUR JOURNEY, YOUR WAY</span></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A MORE PERSONAL KIND OF CARE</p>
          <h2>Care that sees<br />the whole you.</h2>
          <p className="lead">
            At Elevate Physio, we believe feeling better starts with being heard—and feeling supported.
          </p>
          <p className="body-copy">
            Every person, body, and goal is different. That’s why we begin by listening: what feels difficult right now, what progress would mean to you, and what you want to get back to doing. Together, we shape a considered treatment plan around your needs, comfort, and everyday life.
          </p>
          <p className="body-copy">
            Your care may bring together hands-on treatment, guided movement, and practical advice you can use at home. We’ll explain each step, make space for your questions, and adjust the plan as you progress—so recovery feels clear, collaborative, and entirely your own.
          </p>
          <p className="body-copy">
            Whether you’re returning to a favorite activity, building confidence after surgery, or looking for more ease in daily movement, we’ll meet you where you are and help you take the next step at a pace that feels right.
          </p>
          <a className="text-link about-link" href="#team">
            Meet your care team <Icon name="arrowRight" size={17} />
          </a>
          <div className="about-signoff"><span className="signoff-rule" /> HERE FOR YOUR NEXT CHAPTER</div>
        </div>
      </div>
      <div className="container team-section" id="team">
        <div className="team-heading">
          <div>
            <p className="eyebrow">THE PEOPLE BESIDE YOU</p>
            <h3>Meet your <span>care team.</span></h3>
          </div>
          <p>Recovery is a team effort. Get to know the people who’ll listen, guide, and encourage you along the way.</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <article className="team-card" key={member.name}>
              <div className="team-photo">
                <img src={member.image} alt={member.alt} loading="lazy" />
                <span>0{index + 1}</span>
              </div>
              <div className="team-info">
                <div><h4>{member.name}</h4><p>{member.role}</p></div>
                <Icon name="arrowUpRight" size={17} />
              </div>
            </article>
          ))}
        </div>
        <p className="team-note">Team profiles are editable placeholders. Add your clinic’s team details and approved photos before publishing.</p>
      </div>
    </section>
  )
}
