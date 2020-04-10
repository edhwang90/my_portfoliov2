import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../layout';
import SEO from '../../components/seo/seo';
import Tabs from '../../components/tabs/tabs';

import './details.scss';

const Details = () => (
  <Layout>
    <SEO title="Details: ProptIn Application" />
    <section className="wrapper-container">
      <h3>ProptIn Application</h3>

      <p>
      Utilized Angular, Webpack, and Sass for a MAMP application for searching and creating user profiles regarding proposal team creation. Provided features for both online/offline favoriting, searching, and viewing/creating profiles.
      </p>

      <p>
        Utilized user tests to validate and improve features. Successfully presented and received approval for further development.
      </p>
    </section>
    <section className="portfolio-content">
      <div className="wrapper-container">
        <ul className="img-list">
          <li><a className="zoom-in img-xlarge" rel="noopener noreferrer" target="_blank" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/proptin-login_dvkz2j.png"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/proptin-login_dvkz2j.png"></img></a></li>
          <li><a className="zoom-in img-xlarge" rel="noopener noreferrer" target="_blank" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/proptin-search_wbvfwe.png"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/proptin-search_wbvfwe.png"></img></a></li>
        </ul>
      </div>
    </section>
    <section className="next-project">
      <Link to="/details/fundbox-partners-plugin" className="link" title="To Next Project">Next project</Link>
    </section>
  </Layout>
);

export default Details;