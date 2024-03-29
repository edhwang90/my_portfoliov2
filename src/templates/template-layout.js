import React from "react"
import { Link } from "gatsby"
import Layout from "../layout"
import SEO from "../components/seo/seo"

import "./template-layout.scss"

const TemplateLayout = props => {
  const { children, content, nextProject } = props

  let additionalLink
  if (content.link) {
    additionalLink = (
      <p>
        <a
          className="to-bold"
          rel="noopener noreferrer"
          href={content.link.url}
          title={content.link.title}
          target="_blank"
        >
          {`${content.link.title}:`} {content.link.url}
        </a>
      </p>
    )
  }

  return (
    <Layout>
      <div className="details">
        <SEO title={content.title} />
        <section className="wrapper-container">
          <h3>{content.title}</h3>

          {content.description.map((text, index) => {
            return <p key={index}>{text}</p>
          })}

          {additionalLink}
        </section>
        <section className="portfolio-content">{children}</section>
        <div className="sticky-bottom">
          <Link to={`/${nextProject}`} className="link" title="To Next Project">
            Next Project
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default TemplateLayout
