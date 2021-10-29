import React from "react";

import Layout from '../layout';
import SEO from '../components/seo/seo';
import Projects from '../components/projects/projects';

import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Portfolio', 'Edmond Hwang', 'Edy Hwang']} />
   
    <section className="landing wrapper-container">
      <h1 className="hero-text">
      Hello, my name is <strong>Edmond</strong>, and I am a <strong>Front End Developer</strong> who enjoys working in <strong>UX</strong> and <strong>Full Stack Development</strong>.
      </h1>
      <div className="hero-img">
        <img className="hero desktop-only" alt="Waving Hand" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1577126229/waving-hand_qdyn4e.png"/>
      </div>
    </section>

      <Projects></Projects>
  </Layout>
)

export default IndexPage
