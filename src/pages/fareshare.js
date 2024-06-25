import React from 'react';
import { Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/seo/seo";
import Tabs from '../components/tabs/tabs';

import '../templates/project-tabs-template//project-tabs-template.scss';
import '../components/lists/asset-list.scss';
import Back from '../components/back/back';


const FareShare = () => {
  return (
    <Layout>
      <div className="details">
        <SEO title="FareShare Capstone" />
        <section className="wrapper-container">
          <h3>FareShare</h3>

          <p>
            A capstone project for Springboard's UX Design Immersive.
            Acted as a UX/UI designer for a carpooling mobile application going from the discovery to the prototype phase.
            Utilized Google Docs, Survey, Sheets, FigJam, and Figma. 
          </p>
          <p><a className="to-bold" rel="noopener noreferrer" href="https://drive.google.com/file/d/1dbNrXgfeXCMm6497qUObDwjEGD5NN0-C/view?usp=sharing" title="Link to Case Study" target="_blank">Link to Case Study</a></p>

        </section>
        <section className="portfolio-content">
          <div className="wrapper-container">
            <Tabs>
              <div label="Understanding the User" key="0">
                <p>Understanding the User</p>
              </div>
              <div label="Ideate and Implement" key="1">
                <p>Ideate and Implement</p>
                <p><a className="to-bold" rel="noopener noreferrer" href="https://www.figma.com/design/GaG1hWy2ODLqp2lRlTlhaI/Capstone-FareShare?node-id=6-2" title="Link to Wireframes" target="_blank">Link to Wireframes</a></p>
              </div>
              <div label="Test and Iterate" key="2">
                <p>Test and Iterate</p>
                <p><a className="to-bold" rel="noopener noreferrer" href="https://www.figma.com/design/GaG1hWy2ODLqp2lRlTlhaI/Capstone-FareShare?node-id=0-1" title="Link to Updated Designs" target="_blank">Link to Updated Designs</a></p>
              </div>
            </Tabs>
          </div>
        </section>
        <div className="project-bottom">
          <Back></Back>
          <Link to="/gov-financial-app" className="link" title="To Next Project">
            Next Project
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default FareShare;