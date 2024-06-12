import React from "react"
import { Link } from "gatsby"

import "./footer.scss"

const Footer = () => (
  <div id="Footer" className="footer-container">
    <ul className="navigation">
      <li>
        <Link className="link" to="/" title="Home">
          Home
        </Link>
      </li>
      <li>
        <a
          className="link"
          title="Resume"
          href="/edh_resume_public.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Resume
        </a>
      </li>
      <li>
        <a
          className="link"
          title="GitHub"
          href="https://github.com/edhwang90"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </li>
    </ul>

    <a
      className="link rounded inverted"
      title="Email"
      href="mailto:edydhwang@gmail.com?subject=Work Opportunity"
    >
      Let's Talk!
    </a>
  </div>
)

export default Footer
