import { Icon } from './Icon.jsx'

const principles = [
  {
    number: '01',
    title: 'A plan that feels personal',
    text: 'Your goals, comfort, and day-to-day life help shape every step of your care.',
    icon: 'target',
  },
  {
    number: '02',
    title: 'Care that listens first',
    text: 'We make space for your questions and work together on a way forward.',
    icon: 'heart',
  },
  {
    number: '03',
    title: 'Progress for the long run',
    text: 'Build practical habits and confidence that can support you beyond the clinic.',
    icon: 'activity',
  },
]

export default function Approach() {
  return (
    <section className="approach section-pad" id="approach">
      <div className="container approach-layout">
        <div className="approach-intro">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> THE ELEVATE APPROACH</p>
          <h2>Good care<br />is a <em>conversation.</em></h2>
          <p>We’ll meet you with expert guidance, clear next steps, and the encouragement to keep going at a pace that feels right for you.</p>
          <a className="button button-light" href="#appointment">Meet us where you are <Icon name="arrowUpRight" size={18} /></a>
          <div className="approach-decoration" aria-hidden="true">E.</div>
        </div>
        <div className="principle-list">
          {principles.map((item) => (
            <article className="principle" key={item.number}>
              <span className="principle-number">{item.number}</span>
              <span className="principle-icon"><Icon name={item.icon} size={22} /></span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <Icon name="arrowUpRight" size={18} className="principle-arrow" />
            </article>
          ))}
          <div className="approach-footnote"><Icon name="check" size={15} /> MOVEMENT, MADE MORE MEANINGFUL</div>
        </div>
      </div>
    </section>
  )
}
