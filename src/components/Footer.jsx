import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__logo">Snapture<em>bd</em></h3>
            <p>Crafting timeless visual stories for those who value artistry, detail, and elegance.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Pinterest">PN</a>
              <a href="#" aria-label="Behance">BE</a>
              <a href="#" aria-label="Vimeo">VM</a>
            </div>
          </div>

          <div className="footer__col">
            <h5>Studio</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/blog">Journal</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Work</h5>
            <ul>
              <li><Link to="/portfolio">Weddings</Link></li>
              <li><Link to="/portfolio">Portraits</Link></li>
              <li><Link to="/portfolio">Fashion</Link></li>
              <li><Link to="/portfolio">Commercial</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Contact</h5>
            <ul>
              <li>hello@snapturebd.com</li>
              <li>+880 1700 000 000</li>
              <li>Gulshan Avenue, Dhaka</li>
              <li>By appointment only</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} SnaptureBD. All rights reserved.</span>
          <span>Crafted with care — for lovers of light.</span>
        </div>
      </div>
    </footer>
  )
}
