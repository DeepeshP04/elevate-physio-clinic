import { useState } from 'react'
import { clinic } from '../data/clinicData.js'
import Brand from './Brand.jsx'
import { Icon } from './Icon.jsx'

const links = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Our approach', '#approach'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-details">
            <a href={`tel:${clinic.phoneLink}`}><Icon name="phone" size={13} /> {clinic.phone}</a>
            <a className="topbar-address" href={clinic.directionsUrl} target="_blank" rel="noreferrer">
              <Icon name="map" size={13} /> {clinic.address}
            </a>
            <a className="topbar-email" href={`mailto:${clinic.email}`}><Icon name="heart" size={13} /> {clinic.email}</a>
          </div>
          <div className="topbar-links">
            <a href="#about">Meet your care team</a>
            <a href="#contact">Find the clinic <Icon name="arrowUpRight" size={12} /></a>
          </div>
        </div>
      </div>
      <nav className="nav-shell container" aria-label="Main navigation">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <div
          id="primary-navigation"
          className={`nav-content${menuOpen ? ' nav-open' : ''}`}
        >
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a href={href} key={label} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
          <a className="button button-dark nav-cta" href="#appointment" onClick={closeMenu}>
            Book a visit <Icon name="arrowUpRight" size={17} />
          </a>
        </div>
      </nav>
    </header>
  )
}
