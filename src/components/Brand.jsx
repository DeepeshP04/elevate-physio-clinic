import { Icon } from './Icon.jsx'

export default function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="Elevate Physio home">
      <span className="brand-mark">
        <Icon name="activity" size={23} strokeWidth={2.2} />
      </span>
      <span className="brand-name">
        elevate<span>physio</span>
      </span>
    </a>
  )
}
