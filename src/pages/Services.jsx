import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { services } from '../data/content.js'
import './Services.css'

const process = [
  { step: '01', title: 'Consultation', desc: 'We begin with an unhurried conversation to understand your vision, story, and the feeling you wish to preserve.' },
  { step: '02', title: 'Creative Direction', desc: 'A bespoke moodboard, styling notes, and location scouting — every detail considered in advance.' },
  { step: '03', title: 'The Session', desc: 'Relaxed, intuitive, and artful — we document the day with calm confidence and an eye for the unguarded.' },
  { step: '04', title: 'Refinement', desc: 'Hand-curated editing and fine-art retouching delivered through a private, password-protected gallery.' },
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Bespoke photography, thoughtfully crafted."
        subtitle="Each commission is approached as a singular work — never templated, always personal."
        image="/img/481943755_1186380586190627_8229476427913184654_n.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map((s, i) => (
              <Reveal key={s.title} className="service-card" delay={i * 80}>
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p className="service-card__tag">{s.tagline}</p>
                <p>{s.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The Experience</span>
            <h2>A considered process.</h2>
          </Reveal>
          <div className="process__grid">
            {process.map((p, i) => (
              <Reveal key={p.step} className="process__item" delay={i * 100}>
                <span className="process__step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <span className="eyebrow">Ready?</span>
            <h2>Let's plan your session.</h2>
            <Link to="/contact" className="btn btn-solid">Enquire Now</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
