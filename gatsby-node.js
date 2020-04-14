/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require('fs');
const path = require('path')

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node @dontinfer {
      id: ID!
      title: String!
      content: ProjectMetadata!
      slug: String!
    }
    type ProjectMetadata {
      title: String!
      description: String!
      link: String
      tabs: ProjectTabsMetadata
      images: ProjectImagesMetadata
    }
    type ProjectTabsMetadata {
      title: String!
      description: String!
      images: ProjectImagesMetadata!
    }
    type ProjectImagesMetadata {
      url: String!
      imgSize: String!
    }
  `);
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';

  const projectTemplate = path.resolve('src/templates/project-template.js');

  const result = await graphql(`
    query {
      allTestJson {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading events', result.errors);
    return;
  }

  const projects = result.data.allTestJson.edges;

  projects.forEach(project => {
    const { node: { slug, id } } = project;

    actions.createPage({
      path: slug,
      component: projectTemplate,
      context: {
        projectID: id
      }
    });
  });
};