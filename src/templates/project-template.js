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
  
  let additionalLink;
  if (content.link) {
    additionalLink = <p><a className="to-bold" rel="noopener noreferrer" href={content.link.url} title={content.link.title} target="_blank">{`${content.link.title}:`} {content.link.url}</a></p>
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

        {additionalLink}
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
        tabs {
          title
          description
          link {
            title
            url
          }
          assets {
            url
            assetSize
            isVideo
          }
        }
        assets {
          url
          assetSize
          isVideo
        }
      }
    }
  }
`;


export default ProjectTemplate;