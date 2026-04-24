import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { stats } from '../data/content.js'
import './About.css'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the Studio"
        title="A practice devoted to light, patience, and grace."
        subtitle="We are a small team of artists, printers, and storytellers — crafting every frame with intention."
        image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1800&q=85"
      />

      <section className="section about-story">
        <div className="container about-story__grid">
          <Reveal className="about-story__copy">
            <span className="eyebrow">Our Philosophy</span>
            <h2>We chase stillness in a world that hurries.</h2>
            <p>
              Founded in 2014, SnaptureBD began as a single photographer's pursuit of quiet beauty.
              A decade later, we remain a boutique atelier — intentionally small, deeply devoted,
              and unfailingly personal in our approach.
            </p>
            <p>
              Our work draws from classical painting, cinema, and the Japanese principle of <em>ma</em> —
              the beauty of negative space. We believe the most powerful images are the ones that
              breathe.
            </p>
          </Reveal>
          <Reveal className="about-story__media" delay={120}>
            <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&q=85" alt="" />
          </Reveal>
        </div>
      </section>

      <section className="about-stats">
        <div className="container grid grid-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 80}>
              <h3>{s.value}</h3>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section team">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The Team</span>
            <h2>Artisans behind the lens.</h2>
          </Reveal>
          <div className="grid grid-3">
            {[
              { name: 'Afnan Linkon', role: 'Photographer', img: '/img/558864791_1928777977700520_8413238414469836722_n.jpg' },
             
            ].map((m, i) => (
              <Reveal key={m.name} className="team-card" delay={i * 100}>
                <div className="team-card__img"><img src={m.img} alt={m.name} /></div>
                <h3>{m.name}</h3>
                <span>{m.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section awards">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Recognition</span>
            <h2>Awards & Press.</h2>
          </Reveal>
          <div className="awards__list">
            {['Vogue', 'Harper\'s BAZAAR', 'Condé Nast Traveler', 'Junebug Weddings', 'The Knot', 'Martha Stewart'].map(a => (
              <div key={a} className="awards__item">{a}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2>Begin your story with us.</h2>
            <Link to="/contact" className="btn btn-solid">Get in Touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
