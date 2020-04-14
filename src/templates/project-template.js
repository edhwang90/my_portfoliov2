import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";

const ProjectTemplate = ({data}) => {
    console.log(data);
  return (
    <div>hi project details</div>
  )
}

export const query = graphql`
  query ProjectTemplateQuery ($projectID: String!) {
    testJson (id: { eq: $projectID }) {
      id
      title
      content {
        title
        description
        link
        tabs {
          title
          description
          images {
            url
            imgSize
          }
        }
        images {
          url
          imgSize
        }
      }
    }
  }
`;


export default ProjectTemplate;