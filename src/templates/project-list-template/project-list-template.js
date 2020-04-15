import React from 'react';
import { graphql } from 'gatsby';

import TemplateLayout from '../template-layout';
import AssetList from '../../components/lists/asset-list';

const ProjectListTemplate = (props) => {
  const { data: { projectListJson: { content } }, pageContext: { nextProject }} = props;
  
  return (
    <TemplateLayout content={content} nextProject={nextProject}>
      <div className="wrapper-container">
        <AssetList data={content.assets}></AssetList>
      </div>
    </TemplateLayout>
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
        assets {
          url
          assetSize
          isVideo
        }
      }
    }
  }
`;


export default ProjectListTemplate;