import React from 'react';
import { Link, graphql } from "gatsby";
import Layout from '../layout';
import SEO from '../components/seo/seo';

import TabsPartial from './_partial-tabs';
import ListPartial from './_partial-list';

import './project-template.scss';

const ProjectTemplate = (props) => {
  const { data: { projectListJson: { content } }, pageContext: { nextProject }} = props;

  let contentPartial;
    if (content.tabs) {
      contentPartial = <TabsPartial data={content.tabs}></TabsPartial>
    }
    else {
      contentPartial = <ListPartial data={content.assets}></ListPartial>
    }
  

  return (
    <Layout>
      <SEO title={content.title} />
      <section className="wrapper-container">
        <h3>{content.title}</h3>

        {
          content.description.map((text, index) => {
           return <p key={index}>{text}</p>
          })
        }
      </section>
      <section className="portfolio-content">
        {contentPartial}
      </section>
      <div className="sticky-bottom cta">
        <Link to={`/${nextProject}`} className="link" title="To Next Project">Next Project</Link>
      </div>
    </Layout>  
  )
}

export const query = graphql`
  query ProjectTemplateQuery ($projectID: String!) {
    projectListJson (id: { eq: $projectID }) {
      id
      title
      content {
        title
        description
        link {
          title
          url
        }
        tabs {
          title
          description
          assets {
            url
            assetSize
          }
        }
        assets {
          url
          assetSize
        }
      }
    }
  }
`;


export default ProjectTemplate;