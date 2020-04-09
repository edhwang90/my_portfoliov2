import React from 'react';

import './index.scss';

const Projects = () => {
  const data = {
    projects: [
      {
        title: '.Gov Financial Application Redesign',
        description: 'Provided assistance in the selling and planning of a comprehensive redesign effort for a legacy, nation/agency-wide financial application.',
        badges: ['https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/excel_alulbq.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/sketch_ukkcnt.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/justinmind_kmtfa5.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/powerpoint_dxn8p7.png'],
        route: 'govFinancialApplication',
        id: '3'
      },
      { 
        title: 'ProptIn Application',
        description: 'Developed a POC for an internal project intended to compliment the proposal creation process.',
        badges: ['https://res.cloudinary.com/dkcdueneq/image/upload/v1585245020/html_pmwsnn.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585245094/css_xnf9rx.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585245094/js_s9dokv.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585244808/sass_j806pp.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585244871/angular_aiutpd.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585244927/webpack_nt1wx6.png'],
        route: 'proptInApplication',
        id: '4'
      },
      { 
        title: 'Fundbox Partners Plugin',
        description: 'Developed a POC to enable Fundbox products within third-party websites and exchanges.',
        badges: ['https://res.cloudinary.com/dkcdueneq/image/upload/v1585245020/html_pmwsnn.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585245094/css_xnf9rx.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585245094/js_s9dokv.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1585244962/python_vhwdny.png' ],
        route: 'fundboxPartnersPlugin',
        id: '5'
      },
      { 
        title: 'Personal Project',
        description: 'Designed to provide an online space to create custom 2x2 matrices whether in the design, development, or project planning phases.',
        badges: ['https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/sketch_ukkcnt.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/invision_x0r9qq.png'],
        route: 'personalProject',
        id: '1'
      },
      { 
        title: 'Mock Zacks.com Redesign',
        description: 'A mock redesign of the Zacks.com mobile application. Motivated by the lack of tablet specific design and personal interest in seeing an updated interface.',
        badges: ['https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/sketch_ukkcnt.png', 'https://res.cloudinary.com/dkcdueneq/image/upload/v1558633254/keynote_ygbrka.png'],
        route: 'mockZacks',
        id: '2'
      }
    ]
  };


  let projects = data.projects.map((item, index) => {
    const { title, description, badges, route } = item;

    return (
      <section key={`projectKey${index}`} id="Project1" className="showcase">
        <div className="info wrapper-container">
          <h3>{title}</h3>
          <p>{description}</p>

          <div className="showcase-bottom">
            <ul>
              {
                badges.map((badge, index) =>
                  (<li key={`key${index}`} className="badge"><img src={badge} /></li>)
                )
              }
            </ul>
            <a href={route} className="link" title="To GitHub Repo">View details</a>
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