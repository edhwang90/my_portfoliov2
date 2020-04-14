import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";

import './projects.scss';

const Projects = () => {

  const data = useStaticQuery(graphql`
    query ProjectsListQuery {
      allProjectListJson {
        edges {
          node {
            title
            description
            badges
            slug
            id
          }
        }
      }
    }
  `);

  const projects = data.allProjectListJson.edges.map((item, index) => {
    const { title, description, badges, slug } = item.node;

    return (
      <section key={`projectKey${index}`} id="Project1" className="showcase">
        <div className="info wrapper-container">
          <h3>{title}</h3>
          <p>{description}</p>

          <div className="showcase-bottom">
            <ul>
              {
                badges.map((badge, index) =>
                  (<li key={`key${index}`} className="badge"><img src={badge} /></li>))
              }
            </ul>
            <Link to={`/${slug}`} className="link" title="To Project Details">View details</Link>
          </div>
          
        </div>
      </section>
    );
  });

  return (
    <div>
      {projects}
    </div>
  );
};

export default Projects;