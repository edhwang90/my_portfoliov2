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
      link: ProjectLinkMetadata
      tabs: ProjectTabsMetadata
      assets: ProjectAssetsMetadata
    }
    type ProjectTabsMetadata {
      title: String!
      description: String!
      link: ProjectLinkMetadata
      assets: ProjectAssetsMetadata!
    }
    type ProjectAssetsMetadata {
      url: String!
      assetSize: String!
      isVideo: Boolean!
    }
    type ProjectLinkMetadata {
      title: String!
      url: String!
    }
  `);
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const projectListTemplate = path.resolve('src/templates/project-list-template/project-list-template.js');
  const projectTabsTemplate = path.resolve('src/templates/project-tabs-template/project-tabs-template.js');

  const result = await graphql(`
    query {
      allProjectListJson {
        edges {
          node {
            id
            slug
            content {
              tabs {
                title
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading events', result.errors);
    return;
  }

  const projects = result.data.allProjectListJson.edges;

  projects.forEach((project, index) => {
    const { node: { slug, id, content } } = project;

    const nextProjectSlug = index === projects.length-1
      ? projects[0].node.slug
      : projects[index+1].node.slug;

    if (content.tabs) {
      actions.createPage({
        path: slug,
        component: projectTabsTemplate,
        context: {
          projectID: id,
          nextProject: nextProjectSlug
        }
      });
    }
    else {
      actions.createPage({
        path: slug,
        component: projectListTemplate,
        context: {
          projectID: id,
          nextProject: nextProjectSlug
        }
      });
    }
  });
};