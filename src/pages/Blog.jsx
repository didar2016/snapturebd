import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { blogPosts } from '../data/content.js'
import './Blog.css'

export default function Blog() {
  const [feature, ...rest] = blogPosts
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Stories, guides & musings."
        subtitle="Behind-the-scenes dispatches, travel notes, and reflections from the studio."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85"
      />

      <section className="section">
        <div className="container">
          <Reveal className="blog-feature">
            <div className="blog-feature__media"><img src={feature.image} alt={feature.title} /></div>
            <div className="blog-feature__copy">
              <span className="eyebrow">{feature.category} · {feature.date}</span>
              <h2>{feature.title}</h2>
              <p>{feature.excerpt}</p>
              <a href="#" className="btn">Read Story</a>
            </div>
          </Reveal>

          <div className="grid grid-3 blog-grid">
            {rest.map((post, i) => (
              <Reveal key={post.id} className="blog-card" delay={i * 100}>
                <div className="blog-card__img"><img src={post.image} alt={post.title} /></div>
                <span className="blog-card__meta">{post.category} · {post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="blog-card__more">Read More →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section newsletter">
        <div className="container newsletter__inner">
          <Reveal>
            <span className="eyebrow">Subscribe</span>
            <h2>Join our private letter.</h2>
            <p>A quiet dispatch — new work, travel notes, and occasional openings. No noise.</p>
            <form className="newsletter__form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-solid">Subscribe</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
