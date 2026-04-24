import './PageHeader.css'

export default function PageHeader({ eyebrow, title, subtitle, image }) {
  return (
    <section className="page-header" style={image ? { backgroundImage: `url(${image})` } : undefined}>
      <div className="page-header__overlay" />
      <div className="container page-header__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
