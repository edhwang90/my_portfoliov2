import React from "react"

import Layout from "../layout"
import SEO from "../components/seo/seo"
import Projects from "../components/projects/projects"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["Portfolio", "Edmond Hwang", "Edy Hwang"]} />

    <section className="landing wrapper-container">
      <h1 className="hero-text">
        Hello, my name is <strong>Edy</strong> and I am a{" "}
        <strong>UX/UI Designer</strong> with experience in{" "}
        <strong>Front End Development</strong>.
      </h1>
    </section>

    <Projects></Projects>
  </Layout>
)

export default IndexPage
