import { useState } from 'react'
import { clinic, services } from '../data/clinicData.js'
import { Icon } from './Icon.jsx'

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

export default function AppointmentForm() {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function updateForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    if (error) setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.currentTarget
    if (!formElement.reportValidity()) return

    if (!/^[+\d\s().-]{7,20}$/.test(form.phone.trim())) {
      setError('Please enter a valid phone number so our team can reach you.')
      return
    }

    const message = [
      'Hello Elevate Physio!',
      '',
      'I would like to book a physiotherapy appointment.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || 'Not provided'}`,
      `Service: ${form.service || 'Not specified'}`,
      `Preferred Date: ${form.date || 'Flexible'}`,
      `Preferred Time: ${form.time || 'Flexible'}`,
      `Message: ${form.message.trim() || 'None'}`,
      '',
      'Please confirm the appointment availability.',
      '',
      'Thank you!',
    ].join('\n')

    const whatsappUrl = `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="appointment section-pad" id="appointment">
      <div className="container appointment-layout">
        <div className="appointment-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT STEP STARTS HERE</p>
          <h2>Let’s get you<br /><span>moving forward.</span></h2>
          <p>Tell us a little about what you need. We’ll take it from there, together.</p>
          <div className="appointment-assurance">
            <span className="assurance-icon"><Icon name="shield" size={21} /></span>
            <div><strong>A conversation, not a commitment.</strong><span>Our team will help you find a time that works.</span></div>
          </div>
          <div className="appointment-side-note">GOOD THINGS<br />START WITH<br /><span>ONE STEP.</span></div>
        </div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <div><span className="form-kicker">01 / SAY HELLO</span><h3>Request an appointment</h3></div>
            <span className="form-heading-icon"><Icon name="arrowDownRight" size={23} /></span>
          </div>
          <div className="form-grid">
            <label className="form-field">
              <span>Your name <b>*</b></span>
              <input name="name" autoComplete="name" placeholder="How should we address you?" required value={form.name} onChange={updateForm} />
            </label>
            <label className="form-field">
              <span>Phone number <b>*</b></span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" required minLength={7} maxLength={20} value={form.phone} onChange={updateForm} />
            </label>
            <label className="form-field">
              <span>Email address <small>OPTIONAL</small></span>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={updateForm} />
            </label>
            <label className="form-field">
              <span>What can we help with? <small>OPTIONAL</small></span>
              <select name="service" value={form.service} onChange={updateForm}>
                <option value="">Choose a service</option>
                {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
              </select>
            </label>
            <label className="form-field">
              <span>Preferred date <small>OPTIONAL</small></span>
              <input name="date" type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={updateForm} />
            </label>
            <label className="form-field">
              <span>Preferred time <small>OPTIONAL</small></span>
              <select name="time" value={form.time} onChange={updateForm}>
                <option value="">Flexible</option>
                <option>Morning · 8 AM – 12 PM</option>
                <option>Afternoon · 12 PM – 4 PM</option>
                <option>Evening · 4 PM – 7 PM</option>
              </select>
            </label>
            <label className="form-field form-field-wide">
              <span>A little more about it <small>OPTIONAL</small></span>
              <textarea name="message" rows="3" placeholder="Share anything you’d like us to know before we chat." value={form.message} onChange={updateForm} />
            </label>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="form-submit-row">
            <p><Icon name="shield" size={17} /> Your details stay between you and our team.</p>
            <button type="submit" className="button button-dark">Continue on WhatsApp <Icon name="arrowUpRight" size={18} /></button>
          </div>
          <p className="form-disclaimer">
            Your appointment request will open in WhatsApp with a pre-filled message. Please press <strong>Send</strong> in WhatsApp to share it with our team. We’ll then contact you to confirm availability.
          </p>
        </form>
      </div>
    </section>
  )
}
