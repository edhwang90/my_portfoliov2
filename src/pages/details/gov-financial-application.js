import React from 'react';

import SEO from '../../components/seo/seo';
import Tabs from '../../components/tabs/tabs';

import './details.scss';
import StickyDiv from '../../components/sticky-div/sticky-div';

const GovFinancialApplication = () => (
  <React.Fragment>
    <SEO title=".Gov Financial Application" />
    <section className="wrapper-container">
      <h3>.Gov Financial Application Redesign</h3>

      <p>
      Provided assistance in the selling and planning of a comprehensive redesign effort for a legacy, nation/agency-wide financial application.
      </p>
    </section>
    <section className="portfolio-content">
      <div className="wrapper-container">
        <Tabs>
          <div label="Analysis & Wireframing">
            <p>
              Created wireframes for three problem areas of a legacy application: the Homepage, Reporting, and a Dashboard. Utilized previously collected research and user stories to guide decision making while also conducting heuristic and competitive analysis.
            </p>
            <p>
              Utilized existing sources/guidelines for government web applications through sources such as GSA Government Web Standards and award-winning government web applications. Produced wireframes in Sketch and a prototype through JustInMind for team collaboration.
            </p>
            <ul>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968907/finL-3_yhosej.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968907/finL-3_yhosej.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633236/finL-1_tahrwr.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633236/finL-1_tahrwr.png"></img></a></li>
              <li><a className="zoom-in" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633236/finL-2_xjwe5a.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633236/finL-2_xjwe5a.png"></img></a></li>
            </ul>
          </div>
          <div label="Iteration">
            <p>
              Created iterations of wireframes after discussing and collaborating with the Requirements and Development teams. Considerations such as timeline and technical feasibility guided wireframes to be transitional in new technical functionality. Fidelity was increased to account for new expectations/requests for it to be included in a sales deck.
            </p>
            <ul>
              <li><a className="zoom-in img-large" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1583173090/fin-7_demnkx.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1583173090/fin-7_demnkx.png"></img></a></li>
              <li><a className="zoom-in img-large" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1583172880/fin-8_xumpqq.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1583172880/fin-8_xumpqq.png"></img></a></li>
              <li><a className="zoom-in img-large" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633237/fin-1_hmveld.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558633237/fin-1_hmveld.png"></img></a></li>
            </ul>
          </div>
          <div label="Sales & Strategy">
            <p>
              Utilized downtime on the project to re-analyze past research/raw feedback from customer support sources. Provided UX minded categorization in order to better visualize and understand problem areas within the application as a whole. Created a UX analysis excel document to include all raw data and an interactive dashboard for filtering and viewing of analysis.
            </p>
            <p>
              Elevated issues regarding Requirements/Development team contradictions and potential future roadblocks while also communicating the need for further UX assistance. Successfully argued for further UX analysis and recommended alternate feature prioritizations. Assisted in creating a UX minded sales deck that included: past requested/identified problem areas, newly found problems to be elevated, and potential project process and timeline.
            </p>
            <ul>
              <li><a className="zoom-in img-large" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968501/Fin-byFunctionality_csaet0.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968501/Fin-byFunctionality_csaet0.png"></img></a></li>
              <li><a className="zoom-in img-large" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968501/Fin-bySectionAndTheme_jmjey0.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968501/Fin-bySectionAndTheme_jmjey0.png"></img></a></li>
              <li><a className="zoom-in img-large" href="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968501/Fin-byRole_u5imi5.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1558968501/Fin-byRole_u5imi5.png"></img></a></li>
            </ul>
          </div>
        </Tabs>
      </div>
    </section>

  </React.Fragment>
)

export default GovFinancialApplication;
