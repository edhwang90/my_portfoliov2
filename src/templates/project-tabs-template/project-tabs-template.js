import React from 'react';
import { graphql } from 'gatsby';

import TemplateLayout from '../template-layout';
import Tabs from '../../components/tabs/tabs';
import AssetList from '../../components/lists/asset-list';

import './project-tabs-template.scss';

const ProjectTabsTemplate = (props) => {
  const { data: { projectListJson: { content } }, pageContext: { nextProject } } = props;

  return (
    <TemplateLayout content={content} nextProject={nextProject}>
      <div className="wrapper-container">
        <Tabs>
          {
            content.tabs.map((tab, index) => {
              const descriptions = tab.description.map((text, textIndex) => {
                return (<p key={textIndex}>{text}</p>)
              });

              let additionalLink;

              if (tab.link) {
                additionalLink = <p><a className="to-bold" rel="noopener noreferrer" href={tab.link.url} title={tab.link.title} target="_blank">{`${tab.link.title}:`} {tab.link.url}</a></p>;
              }

              return (
                <div label={tab.title} key={index} >
                  { descriptions }
                  { additionalLink }
                  <AssetList data={tab.assets}></AssetList>
                </div>
              )
            })
          }
        </Tabs>
      </div>
    </TemplateLayout>
  )
}

export const query = graphql`
  query ProjectTabsTemplateQuery($projectID: String!) {
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
      }
    }
  }
`;


export default ProjectTabsTemplate;