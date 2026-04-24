import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { galleryImages, services, testimonials, stats } from '../data/content.js'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <img src="/img/367732446_1417009272210729_2589044211467631633_n.jpg" alt="Hero" />
          <div className="hero__veil" />
        </div>
        <div className="container hero__inner">
          <span className="eyebrow">Luxury Photography Studio</span>
          <h1 className="hero__title">
            Timeless <em>moments</em><br />painted with light.
          </h1>
          <p className="hero__sub">
            A boutique studio crafting cinematic wedding, fashion, and editorial imagery across the world.
          </p>
          <div className="hero__cta">
            <Link to="/portfolio" className="btn btn-solid">View Portfolio</Link>
            <Link to="/contact" className="btn btn-ghost">Book a Session</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro">
        <div className="container intro__grid">
          <Reveal className="intro__image">
            <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&q=85" alt="Studio" />
            <div className="intro__badge">
              <span>Est.</span>
              <strong>2014</strong>
            </div>
          </Reveal>
          <Reveal className="intro__copy" delay={150}>
            <span className="eyebrow">The Studio</span>
            <h2>Where quiet elegance meets cinematic vision.</h2>
            <p>
              SnaptureBD is an award-winning photography atelier founded on a simple belief — that
              every image should feel like a heirloom. Our approach is unhurried, intentional, and
              deeply personal.
            </p>
            <p>
              From intimate portraits to couture campaigns, we collaborate with discerning clients who
              value craftsmanship, discretion, and a refined visual language.
            </p>
            <Link to="/about" className="btn">Our Story</Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-home">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Specialties</span>
            <h2>A studio for every story.</h2>
          </Reveal>
          <div className="grid grid-3 services-home__grid">
            {services.slice(0, 6).map((s, i) => (
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

      {/* FEATURED GALLERY */}
      <section className="section featured">
        <div className="container">
          <Reveal className="section-head section-head--split">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2>Recent frames.</h2>
            </div>
            <Link to="/portfolio" className="btn btn-ghost">Full Portfolio</Link>
          </Reveal>
        </div>
        <div className="featured__grid">
          {galleryImages.slice(0, 6).map((img, i) => (
            <Reveal key={img.id} className={`featured__item featured__item--${i}`} delay={i * 60}>
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="featured__meta">
                <span>{img.category}</span>
                <h4>{img.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container grid grid-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 80}>
              <h3>{s.value}</h3>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials">
        <div className="container">
          <Reveal className="section-head" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Kind Words</span>
            <h2>Love from our clients.</h2>
          </Reveal>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} className="testimonial" delay={i * 100}>
                <span className="testimonial__quote">“</span>
                <p>{t.quote}</p>
                <div className="testimonial__author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <Reveal>
            <span className="eyebrow">Let's Create</span>
            <h2>Something unforgettable awaits.</h2>
            <p>Reserve a consultation with our creative director and begin your story.</p>
            <Link to="/contact" className="btn btn-solid">Begin the Conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
