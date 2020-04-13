import React from 'react';

import SEO from '../../components/seo/seo';

import './details.scss';

const ProptinApplication = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default ProptinApplication;