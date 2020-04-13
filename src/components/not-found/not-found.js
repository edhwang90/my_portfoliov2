import React from 'react';
import SEO from '../seo/seo';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <React.Fragment>
      <SEO title="404: Not found" />
      <section className="wrapper-container">
        <h2>404 Error, Page not found</h2>
        <p><Link to="/">Click here!</Link></p>
      </section>
    </React.Fragment>
  )
}

export default NotFound;