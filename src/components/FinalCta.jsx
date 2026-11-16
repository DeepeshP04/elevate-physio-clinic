import { Icon } from './Icon.jsx'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div className="cta-orbit" aria-hidden="true"><span /><span /><span /></div>
        <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER IS WAITING</p>
        <h2>A little closer to<br />feeling <em>like you.</em></h2>
        <p>Take the first step towards a healthier, stronger, more active life.</p>
        <a className="button button-light" href="#appointment">Book your first visit <Icon name="arrowUpRight" size={18} /></a>
        <span className="cta-footnote">START WHERE YOU ARE. WE’LL GO FROM THERE.</span>
      </div>
    </section>
  )
}
