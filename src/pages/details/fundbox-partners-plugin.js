import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../layout';
import SEO from '../../components/seo/seo';
import Tabs from '../../components/tabs/tabs';

import './details.scss';

const FundboxPartnersPlugin = () => (
  <React.Fragment>
    <SEO title="Details: Fundbox Partners Plugin" />
    <section className="wrapper-container">
      <h3>Fundbox Partners Plugin</h3>

      <p>
        Developed a POC to enable Fundbox products within third-party websites and exchanges such as: Intuit and NerdWallet. Utilized HTML/CSS, JavaScript, and Python to provide a cross-origin solution for whitelisted partners and third parties.
      </p>
    </section>
    <section className="portfolio-content">
      <div className="wrapper-container">
        <ol className="img-stepped-list img-list">
          <li>
            <label>
              <span>1.</span>
              <p>Simple button placement through JavaScript inclusion.</p>
            </label>
            <a className="zoom-in img-xlarge" rel="noopener noreferrer" target="_blank" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968545/GC_BTN-1_dk6ic1.png"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968545/GC_BTN-1_dk6ic1.png"></img></a>
          </li>
          <li>
            <label>
              <span>2.</span>
              <p>Full Fundbox application functionality through a slide in/out panel.</p>
            </label>
            <a className="zoom-in img-xlarge" rel="noopener noreferrer" target="_blank" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633236/GC_BTN-3_pftnyg.png"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633236/GC_BTN-3_pftnyg.png"></img></a>
          </li>
          <li>
            <label>
              <span>3.</span>
              <p>Interactive button with updated status and action.</p>
            </label>
            <a className="zoom-in img-xlarge" rel="noopener noreferrer" target="_blank" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968545/GC_BTN-2_evwfgj.png"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968545/GC_BTN-2_evwfgj.png"></img></a>
          </li>
        </ol>
      </div>
    </section>
  </React.Fragment>
);

export default FundboxPartnersPlugin;