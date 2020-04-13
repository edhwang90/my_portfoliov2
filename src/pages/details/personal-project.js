import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../layout';
import SEO from '../../components/seo/seo';
import Tabs from '../../components/tabs/tabs';

import './details.scss';

const PersonalProject = () => (
  <React.Fragment>
    <SEO title="Details: Personal Project" />
    <section className="wrapper-container">
      <h3>Personal Project</h3>

      <p>
        Inspired by infographics displayed on HQ televisions and monitors, this personal project intended to create an online 2x2 application to help facilitate discussion and information awareness.
      </p>
    </section>
    <section className="portfolio-content">
      <div className="wrapper-container">
        <Tabs>
          <div label="Wireframing">
            <p>
              Created wireframes for an MVP to test data input, customization, and scannability. Created versions for Television, Desktop, and Tablet formats. 
            </p>
            <ul>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/ml-6_j5zmbk.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/ml-6_j5zmbk.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633245/ml-2_dzyszw.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633245/ml-2_dzyszw.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633245/ml-5_eaoz89.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633245/ml-5_eaoz89.png"></img></a></li>
            </ul>
          </div>
          <div label="Prototyping">
            <p>
              Iterated over wireframes after consulting use cases from DesignerNews.co and Medium.com. Utilized InVision to create a prototype for initial feedback gathering. Planned phase 2 deliverables to include: CSV export and shareable link creation.
            </p>
            <p><a rel="noopener noreferrer" href="https://invis.io/BHRN990S2WU" target="_blank">InVision Prototype: https://invis.io/BHRN990S2WU</a></p>
            <ul>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-1_e35fjs.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-1_e35fjs.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-2_ip3kbx.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-2_ip3kbx.png"></img></a></li>
              <li><a className="zoom-in" className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-4_ayzryw.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-4_ayzryw.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-6_iuu1ar.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-6_iuu1ar.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-5_ocortz.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/mm-5_ocortz.png"></img></a></li>
            </ul>
            
          </div>
          <div label="User Testing Planning">
            <p>
              Created assets for potential user feedback sessions. Included script, prompt, and alternate versions depending on roles such as PM or generic user.
            </p>
            <ul>
              <li><a className="zoom-in img-large" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1577299975/test1_cttrec.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1577299975/test1_cttrec.png"></img></a></li>
            </ul>
          </div>
        </Tabs>
      </div>
    </section>
  </React.Fragment>
);

export default PersonalProject;