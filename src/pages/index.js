import React from "react";
import { Link } from "gatsby";

import Layout from '../layout';
import Image from '../components/image/image';
import SEO from '../components/seo/seo';
import Projects from '../components/projects/projects';

import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Portfolio', 'Edmond Hwang', 'Edy Hwang']} />
      <section className="landing wrapper-container">
        <h3 className="hero-text">
          Hello World! My name is <strong>Edy Hwang</strong>, and I am an experienced <strong>Front&#x2011;End Developer</strong> with a passion for <strong>User Experience</strong>.
        </h3>
        <div className="hero-img">
          <img className="hero desktop-only" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1577126229/waving-hand_qdyn4e.png"/>
        </div>
      </section>

      <Projects></Projects>
    {/* <Link to="/projects/project">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
