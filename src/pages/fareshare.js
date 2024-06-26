import React from 'react';
import { Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/seo/seo";
import Tabs from '../components/tabs/tabs';

import '../templates/project-tabs-template//project-tabs-template.scss';
import '../components/lists/asset-list.scss';
import Back from '../components/back/back';

import './fareshare.scss';


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
          <p><a className="to-bold" rel="noopener noreferrer" href="https://drive.google.com/file/d/1qELVa_sLS6lUyRpk6fYKWhgBz8vsrMIK/view?usp=sharing" title="Link to Case Study" target="_blank">Link to Case Study</a></p>

        </section>
        <section className="portfolio-content">
          <div className="wrapper-container">
            <Tabs>
              <div label="Understanding the User" key="0">
                <p>
                  Carpooling’s popularity has waned in the United States. Aspects like coordination, payment, planning, and communication make carpooling a larger hassle than a solution.
                  <br/> <br/>
                  By completing secondary research and interviews, an understanding and empathy for the user was developed.
                  <br/><br/>
                  Some artifacts that were produced include an affinity map, empathy maps, personas, and a post-interview survey analysis.
                </p>

                <ul className="asset-list">
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320507/affinity-map_uwy3g4.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320507/affinity-map_uwy3g4.png" ></img></a>

                    <p><strong>Affinity Map: </strong>Through the creation of an affinity map, post-interview quotes, comments, and data could be categorized into four main categories.</p>
                  </li>
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719402392/empathy-maps_eedp2o.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719402392/empathy-maps_eedp2o.png" ></img></a>

                    <p>
                      <strong>Empathy Maps: </strong>Empathy maps were created to represent two user archetypes from the interviews. The occupant, an average carpool passenger or driver from key demographic groups including students and metropolitan workers, and the planner, the user who is more inclined to be the organizer of their peer group. This could include a personal inclination or professional responsibility. 
                      
                    </p>
                  </li>
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719402392/personas_ukipbp.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719402392/personas_ukipbp.png" ></img></a>

                    <p><strong>Personas: </strong>As a method of further increasing empathy with the users, personas were created to resemble the two user archetypes.</p>
                  </li>
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/likertscale-analysis_rtxplk.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/likertscale-analysis_rtxplk.png" ></img></a>

                    <p><strong>Likert Scale Analysis: </strong>A post-interview survey was conducted utilizing the Likert Scale. The purpose of this survey was to validate information gathered from interviews while also helping to prioritize features.</p>
                  </li>
                </ul>
              </div>
              <div label="Ideate and Implement" key="1">
                <p>Finding and creating a generic carpool were chosen for red route designs.</p>
                <p><a className="to-bold" rel="noopener noreferrer" href="https://www.figma.com/design/GaG1hWy2ODLqp2lRlTlhaI/Capstone-FareShare?node-id=6-2" title="Link to Wireframes" target="_blank">Link to Wireframes</a></p>

                <ul className="asset-list">
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/wireframe-designs_si9wna.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/wireframe-designs_si9wna.png" ></img></a>
                    <p className="text-center"><strong>Wireframes</strong></p>
                  </li>
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/moodboard_jg4zav.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/moodboard_jg4zav.png" ></img></a>

                    <p className="text-center"><strong>Moodboard</strong></p>
                  </li>
                </ul>
              </div>
              <div label="Test and Iterate" key="2">
                <p>Upon completion of a prototype for the red routes, two rounds of usability testing were undergone. Major insights could be summarized into three categories: Information and details, access to actions, and contrast and compatibility.</p>
                <p><a className="to-bold" rel="noopener noreferrer" href="https://www.figma.com/design/GaG1hWy2ODLqp2lRlTlhaI/Capstone-FareShare?node-id=0-1" title="Link to Updated Designs" target="_blank">Link to Updated Designs</a></p>

                <ul className="asset-list">
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/info_hz7nrh.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/info_hz7nrh.png" ></img></a>

                    <p><strong>Information and Details: </strong>Users exhibited a need for more information as a carpooling service was something they were new to. Users also exhibited a need to confirm their previously inputted data.</p>
                  </li>
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320507/fixed-actions_qnnnhr.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320507/fixed-actions_qnnnhr.png" ></img></a>

                    <p><strong>Access to Actions: </strong>Usability testing showed a user’s natural tendency to search a list prior to filtering - resulting in the filter or sort functions being hidden. When progressing through various steps, users also exhibited the need for actions to be made visible on the current screen.</p>
                  </li>
                  <li className="with-description">
                    <a className={`zoom-in asset-large`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320507/contrast_ap74xu.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320507/contrast_ap74xu.png" ></img></a>

                    <p><strong>Contrast and Compatibility: </strong>In-person testing showed the need to accommodate varying screen devices through a darker shade of gray. Users also did not prioritize the top features due to the lack of contrast and attention given to the call-to-actions.</p>
                  </li>
                  <li className="with-description">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/final-designs_ky9hez.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1719320508/final-designs_ky9hez.png" ></img></a>
                    <p className="text-center"><strong>Updated Designs</strong></p>
                  </li>
                </ul>
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