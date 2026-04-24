import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Wedding', date: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', phone: '', service: 'Wedding', date: '', message: '' })
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's create something extraordinary."
        subtitle="Reach out and tell us about your story. We answer every enquiry personally within 48 hours."
        image="/img/482201793_1185794282915924_5503812058731978617_n.jpg"
      />

      <section className="section">
        <div className="container contact__grid">
          <Reveal className="contact__info">
            <span className="eyebrow">Studio</span>
            <h2>We would love to hear from you.</h2>

            <div className="contact__detail">
              <h5>Address</h5>
              <p>House 42, Road 11<br />Gulshan Avenue, Dhaka 1212<br />Bangladesh</p>
            </div>

            <div className="contact__detail">
              <h5>Contact</h5>
              <p>hello@snapturebd.com<br />+880 1700 000 000</p>
            </div>

            <div className="contact__detail">
              <h5>Hours</h5>
              <p>By appointment only<br />Monday — Saturday · 10am to 7pm</p>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="contact__row">
                <label>
                  <span>Full Name</span>
                  <input name="name" value={form.name} onChange={onChange} required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" value={form.email} onChange={onChange} required />
                </label>
              </div>
              <div className="contact__row">
                <label>
                  <span>Phone</span>
                  <input name="phone" value={form.phone} onChange={onChange} />
                </label>
                <label>
                  <span>Service</span>
                  <select name="service" value={form.service} onChange={onChange}>
                    <option>Wedding</option>
                    <option>Portrait</option>
                    <option>Fashion & Editorial</option>
                    <option>Commercial</option>
                    <option>Event</option>
                    <option>Destination</option>
                  </select>
                </label>
              </div>
              <label>
                <span>Preferred Date</span>
                <input type="date" name="date" value={form.date} onChange={onChange} />
              </label>
              <label>
                <span>Tell us your story</span>
                <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
              </label>
              <button type="submit" className="btn btn-solid">Send Enquiry</button>
              {sent && <div className="contact__success">Thank you — your message has been received. We'll be in touch shortly.</div>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
