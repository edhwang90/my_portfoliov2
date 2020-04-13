import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../layout';
import SEO from '../../components/seo/seo';
import Tabs from '../../components/tabs/tabs';

import './details.scss';

const MockZacks = () => (
  <React.Fragment>
    <SEO title="Details: Mock Zacks.com Redesign" />
    <section className="wrapper-container">
      <h3>Mock Zacks.com Redesign</h3>

      <p>
        A mock redesign of the Zacks.com mobile application. Motivated by the lack of tablet specific design and personal interest in seeing an updated interface.
      </p>
    </section>
    <section className="portfolio-content">
      <div className="wrapper-container">
        <Tabs>
          <div label="Heuristic & Competitive Analysis">
            <p>
              Conducted a heuristic analysis of the Zacks.com mobile application while also reviewing competitor standards.
            </p>
            <ul>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968613/screen-z-1_hieucq.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968613/screen-z-1_hieucq.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968612/screen-z-2_o6ao0w.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968612/screen-z-2_o6ao0w.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968612/screen-z-3_jyc7qt.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968612/screen-z-3_jyc7qt.png"></img></a></li>
            </ul>
          </div>
          <div label="Wireframing">
            <p>
              Created wireframes for the mobile application with considerations made to navigation, spacing, readability, and scannability. Created a GIF presentation through Keynote to help visualize the gestures and general feel of the application.
            </p>
            <ul>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1583614823/h1_gxsph2.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1583614823/h1_gxsph2.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/zacks-3_h4uah9.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/zacks-3_h4uah9.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/zacks-4_fdc24c.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633244/zacks-4_fdc24c.png"></img></a></li>
              <li>
                <video width="320" controls>
                  <source src="https://res.cloudinary.com/dkcdueneq/video/upload/v1577300822/zacks-cropped_qglbk9.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
                </video>
              </li>
            </ul>
          </div>
          <div label="A/B Testing">
            <p>
              Created potential A/B testing material. Alternatives included (1) search order by volume or ticker name and (2) the order of displaying relevant information.
            </p>
          <ul>
            <li><a className="zoom-in img-xlarge" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1583615819/search-ab_mfzaoo.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1583615819/search-ab_mfzaoo.png"></img></a></li>
            <li><a className="zoom-in img-xlarge" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1583615819/order-ab_qdxq9j.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1583615819/order-ab_qdxq9j.png"></img></a></li> 
            </ul>
          </div>
        </Tabs>
      </div>
    </section>
  </React.Fragment>
);

export default MockZacks;