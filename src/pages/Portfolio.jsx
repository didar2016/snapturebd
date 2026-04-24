import { useState, useMemo } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { galleryImages } from '../data/content.js'
import './Portfolio.css'

const categories = ['All', 'Wedding', 'Portrait', 'Fashion', 'Commercial', 'Event']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = useMemo(
    () => filter === 'All' ? galleryImages : galleryImages.filter(i => i.category === filter),
    [filter]
  )

  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="A curated portfolio."
        subtitle="Editorial weddings, intimate portraits, and campaigns crafted with timeless sensibility."
        image="/img/481667607_1181620866666599_8750752116879713541_n.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="filter">
            {categories.map(c => (
              <button
                key={c}
                className={`filter__btn ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="portfolio__grid">
            {filtered.map((img, i) => (
              <Reveal key={img.id} className="portfolio__item" delay={i * 40}>
                <button className="portfolio__btn" onClick={() => setLightbox(img)}>
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="portfolio__overlay">
                    <span>{img.category}</span>
                    <h4>{img.title}</h4>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>×</button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <div className="lightbox__caption">
              <span>{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
