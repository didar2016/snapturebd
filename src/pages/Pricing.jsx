import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { pricing } from '../data/content.js'
import './Pricing.css'

const faqs = [
  { q: 'How far in advance should we book?', a: 'For weddings we recommend 9–12 months in advance. Editorial and portrait sessions typically require 4–6 weeks of planning.' },
  { q: 'Do you travel internationally?', a: 'Yes — we work worldwide. Travel, accommodation, and logistics are arranged in addition to the creative fee.' },
  { q: 'What is your turnaround?', a: 'Final galleries are delivered within 10–30 days depending on the package. A sneak-peek selection is shared within 48 hours.' },
  { q: 'Can we customize a package?', a: 'Absolutely. Every commission is bespoke — the tiers below are a starting point for the conversation.' },
]

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Investment"
        title="Transparent, tailored collections."
        subtitle="A starting point — every commission is shaped to your story."
        image="https://images.unsplash.com/photo-1506047879-c4b50fddbcd2?w=1800&q=85"
      />

      <section className="section">
        <div className="container">
          <div className="pricing__grid">
            {pricing.map((p, i) => (
              <Reveal key={p.name} className={`pricing-card ${p.featured ? 'is-featured' : ''}`} delay={i * 100}>
                {p.featured && <span className="pricing-card__badge">Most Loved</span>}
                <span className="pricing-card__name">{p.name}</span>
                <div className="pricing-card__price">{p.price}</div>
                <span className="pricing-card__duration">{p.duration}</span>
                <ul>
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className={`btn ${p.featured ? 'btn-solid' : ''}`}>Select {p.name}</Link>
              </Reveal>
            ))}
          </div>
          <p className="pricing__note">All prices in USD · Travel and applicable taxes billed separately · Custom commissions available on request.</p>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq__wrap">
          <Reveal className="section-head" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Questions</span>
            <h2>Before you book.</h2>
          </Reveal>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} className="faq__item" delay={i * 80}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
